import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { createMimeMessage } from 'mimetext';

export const server = {
  subscribe: defineAction({
    input: z.object({
      email: z.string().email({ message: 'Invalid email address' }),
      source: z.string().optional().default('portal'),
      // Honeypot field: invisible to humans, filled by bots
      comments: z.string().optional(),
    }),
    handler: async (input, context) => {
      // Bot protection: if honeypot is filled, silently return success without sending email
      if (input.comments && input.comments.trim().length > 0) {
        console.warn('[subscribe action] Honeypot triggered, silently ignoring bot submission');
        return {
          success: true,
          botFiltered: true,
        };
      }

      const runtime = (context.locals as any)?.runtime;
      const sendEmailBinding = runtime?.env?.SEND_EMAIL;

      const targetRecipient = 'dj@dimaminka.com';
      const senderAddress = 'notifications@dimaminka.com';

      // If running locally without Cloudflare bindings, mock successfully
      if (!sendEmailBinding) {
        console.warn('[subscribe action] SEND_EMAIL binding not available (local dev or missing binding). Mocking notification for:', input.email);
        return {
          success: true,
          mocked: true,
        };
      }

      try {
        const msg = createMimeMessage();
        msg.setSender({ name: 'DJ Dima Minka Site', addr: senderAddress });
        msg.setRecipient(targetRecipient);
        msg.setSubject(`🎧 Новая подписка на сайте: ${input.email}`);
        msg.addMessage({
          contentType: 'text/plain',
          data: `Новый подписчик на сайте dj.dimaminka.com\n\nEmail: ${input.email}\nИсточник: ${input.source}\nДата: ${new Date().toISOString()}`,
        });
        msg.addMessage({
          contentType: 'text/html',
          data: `
            <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #111;">
              <h2 style="color: #b78a48;">🎧 Новая подписка на сайте</h2>
              <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
              <p><strong>Источник:</strong> ${input.source}</p>
              <p><strong>Время:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `,
        });

        // Cloudflare send_email requires a raw message object with to, from, and raw stream/string
        await sendEmailBinding.send({
          from: senderAddress,
          to: targetRecipient,
          raw: msg.asRaw(),
        });

        return {
          success: true,
        };
      } catch (err: any) {
        console.error('[subscribe action] Error sending email via Cloudflare Send Email:', err);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send notification email. Please try again later.',
        });
      }
    },
  }),
};
