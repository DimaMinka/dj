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

      const targetRecipient = 'dj@dimaminka.com';
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
            subject: `New Subscriber on dj.dimaminka.com: ${input.email}`,
            text: `A new visitor subscribed to stay in the vibe on dj.dimaminka.com\n\nSubscriber Email: ${input.email}\nVibe Space: ${input.source}\nTimestamp: ${new Date().toUTCString()}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; max-width: 520px; color: #222; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h2 style="font-size: 18px; font-weight: 600; color: #111; margin-top: 0; margin-bottom: 16px;">New Website Subscriber</h2>
                <p style="font-size: 15px; margin-bottom: 8px;"><strong>Subscriber:</strong> <a href="mailto:${input.email}" style="color: #2563eb; text-decoration: none;">${input.email}</a></p>
                <p style="font-size: 15px; margin-bottom: 8px;"><strong>Space / Source:</strong> ${input.source}</p>
                <p style="font-size: 13px; color: #6b7280; margin-top: 16px; margin-bottom: 0;">Received at: ${new Date().toUTCString()}</p>
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
};
