import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { env } from 'cloudflare:workers';

export const server = {
  subscribe: defineAction({
    input: z.object({
      email: z.string().email({ message: 'Invalid email address' }),
      source: z.string().optional().default('portal'),
      // Honeypot field: invisible to humans, filled by bots
      comments: z.string().optional(),
    }),
    handler: async (input) => {
      // Bot protection: if honeypot is filled, silently return success without sending email
      if (input.comments && input.comments.trim().length > 0) {
        console.warn('[subscribe action] Honeypot triggered, silently ignoring bot submission');
        return {
          success: true,
          botFiltered: true,
        };
      }

      // In Cloudflare Workers modern runtime, env comes from 'cloudflare:workers'
      const resendApiKey = (env as any)?.RESEND_API_KEY || (process as any)?.env?.RESEND_API_KEY;

      const targetRecipient = 'dima@minka.mk';
      const senderAddress = 'DJ Dima Minka Site <notifications@dj.dimaminka.com>';

      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
            'User-Agent': 'curl/8.7.1',
          },
          body: JSON.stringify({
            from: senderAddress,
            to: [targetRecipient],
            reply_to: input.email,
            subject: `New Subscriber in the Vibe: ${input.email}`,
            text: `A new visitor subscribed on dj.dimaminka.com\n\nEmail: ${input.email}\nSpace: ${input.source}\nTime: ${new Date().toUTCString()}`,
            html: `
              <div style="font-family: sans-serif; padding: 24px; max-width: 520px; line-height: 1.6; color: #222; background: #faf8f5; border: 1px solid #ebd8c1; border-radius: 12px;">
                <h2 style="color: #b78a48; margin-top: 0;">🎧 New Subscriber in the Vibe</h2>
                <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${input.email}" style="color: #b78a48; font-weight: 600;">${input.email}</a></p>
                <p><strong>Space / Vibe:</strong> ${input.source}</p>
                <p style="color: #777; font-size: 13px;">Time: ${new Date().toUTCString()}</p>
              </div>
            `,
          }),
        });

        if (!response.ok) {
          const errBody = await response.text();
          console.error('[subscribe action] Resend API error response:', response.status, errBody);
          throw new ActionError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to send notification via Resend.',
          });
        }

        const data = await response.json();
        return {
          success: true,
          id: (data as any)?.id,
        };
      } catch (err: any) {
        console.error('[subscribe action] Error sending email via Resend:', err);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send notification email. Please try again later.',
        });
      }
    },
  }),

  inquire: defineAction({
    input: z.object({
      name: z.string().min(2, { message: 'Name is required' }).max(120),
      contact: z.string().min(5, { message: 'Contact is required' }).max(150),
      eventDate: z.string().optional().default(''),
      locationType: z.string().optional().default(''),
      guestCount: z.string().optional().default(''),
      notes: z.string().optional().default(''),
      locale: z.enum(['en', 'ru', 'he']).default('en'),
      // Bot protection fields
      comments: z.string().optional(), // Honeypot (must remain empty)
      formLoadedAt: z.number().optional(), // Timestamp when form rendered
    }),
    handler: async (input) => {
      // 1. Honeypot bot protection
      if (input.comments && input.comments.trim().length > 0) {
        console.warn('[inquire action] Honeypot triggered, silently ignoring bot submission');
        return {
          success: true,
          botFiltered: true,
        };
      }

      // 2. Timestamp bot protection: if submitted under 1.2 seconds, it is automated script
      if (input.formLoadedAt && Date.now() - input.formLoadedAt < 1200) {
        console.warn('[inquire action] Submission too fast (<1.2s), ignoring bot submission');
        return {
          success: true,
          botFiltered: true,
        };
      }

      const resendApiKey = (env as any)?.RESEND_API_KEY || (process as any)?.env?.RESEND_API_KEY;
      const targetRecipient = 'dima@minka.mk';
      const senderAddress = 'DJ Dima Minka Site <notifications@dj.dimaminka.com>';

      const subject = `🎼 New Event Brief: ${input.name} (${input.locationType || 'Private Event'})`;
      const plainText = `
New Event Brief received on dj.dimaminka.com

Name: ${input.name}
Contact: ${input.contact}
Target Date: ${input.eventDate || 'Not specified'}
Location / Format: ${input.locationType || 'Not specified'}
Guest Count: ${input.guestCount || 'Not specified'}
Details / Vision: ${input.notes || 'None provided'}
Language: ${input.locale.toUpperCase()}
Submitted At: ${new Date().toUTCString()}
      `.trim();

      const htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 28px; max-width: 580px; line-height: 1.6; color: #1e1e24; background: #faf8f5; border: 1px solid #ebd8c1; border-radius: 14px; margin: 0 auto;">
          <div style="border-bottom: 2px solid #dfb15b; padding-bottom: 12px; margin-bottom: 20px;">
            <span style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #a1782f; font-weight: 700;">DJ Dima Minka • The Architecture of Frequency</span>
            <h2 style="color: #222; margin: 6px 0 0; font-size: 22px;">🎼 New Event Booking Brief</h2>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #777; width: 140px; font-size: 14px;">Host / Name:</td>
              <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #111;">${input.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777; font-size: 14px;">Contact Channel:</td>
              <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #b78a48;">${input.contact}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777; font-size: 14px;">Target Date:</td>
              <td style="padding: 8px 0; font-size: 15px; color: #222;">${input.eventDate || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777; font-size: 14px;">Format / Location:</td>
              <td style="padding: 8px 0; font-size: 15px; color: #222;">${input.locationType || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777; font-size: 14px;">Estimated Guests:</td>
              <td style="padding: 8px 0; font-size: 15px; color: #222;">${input.guestCount || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777; font-size: 14px;">Site Language:</td>
              <td style="padding: 8px 0; font-size: 13px; font-weight: 700; color: #555;">${input.locale.toUpperCase()}</td>
            </tr>
          </table>

          ${input.notes ? `
            <div style="background: #ffffff; border: 1px solid #ebd8c1; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px;">
              <span style="font-size: 12px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 6px;">Event Vision & Notes:</span>
              <p style="margin: 0; font-size: 14px; color: #333; white-space: pre-wrap;">${input.notes}</p>
            </div>
          ` : ''}

          <div style="font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 12px;">
            Submitted from <em>dj.dimaminka.com/about</em> • ${new Date().toUTCString()}
          </div>
        </div>
      `;

      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
            'User-Agent': 'curl/8.7.1',
          },
          body: JSON.stringify({
            from: senderAddress,
            to: [targetRecipient],
            reply_to: input.contact.includes('@') ? input.contact : undefined,
            subject,
            text: plainText,
            html: htmlContent,
          }),
        });

        if (!response.ok) {
          const errBody = await response.text();
          console.error('[inquire action] Resend API error response:', response.status, errBody);
          throw new ActionError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to send inquiry via Resend.',
          });
        }

        const data = await response.json();
        return {
          success: true,
          id: (data as any)?.id,
        };
      } catch (err: any) {
        console.error('[inquire action] Error sending email via Resend:', err);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send inquiry email. Please try again later.',
        });
      }
    },
  }),
};
