/**
 * Resend Email API Server for Go Green Mowing
 * 
 * SETUP INSTRUCTIONS:
 * 1. Install Resend: npm install resend express cors
 * 2. Get your API key from https://resend.com
 * 3. Set your environment variable: RESEND_API_KEY=re_xxxxxxxxxxxxx
 * 4. Update the 'to' email address below to your business email
 * 5. Run: node server/api.js
 * 
 * For production, deploy this as a serverless function (Vercel, Netlify, etc.)
 * or run it alongside your Vite app.
 */

import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
    const { name, phone, email, address, service, message } = req.body;

    // Basic validation
    if (!name || !phone || !email || !service) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Go Green Mowing <onboarding@resend.dev>', // Update with your verified domain
            to: ['your-email@gogreenmowing.ca'],              // Update with your business email
            replyTo: email,
            subject: `New Quote Request: ${service} — ${name}`,
            html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1C3A1C; padding: 24px 32px;">
            <h1 style="color: white; font-size: 20px; margin: 0;">🌿 New Quote Request</h1>
          </div>
          <div style="padding: 32px; background-color: #FDFCFA; border: 1px solid #eee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1C3A1C; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1C3A1C;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1C3A1C;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1C3A1C;">Address:</td>
                <td style="padding: 8px 0; color: #333;">${address || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1C3A1C;">Service:</td>
                <td style="padding: 8px 0; color: #333;"><strong>${service}</strong></td>
              </tr>
            </table>
            ${message ? `
              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #eee;">
                <p style="font-weight: 600; color: #1C3A1C; margin-bottom: 8px;">Message:</p>
                <p style="color: #333; line-height: 1.6;">${message}</p>
              </div>
            ` : ''}
          </div>
          <div style="padding: 16px 32px; background-color: #f5f5f5; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">Sent from gogreenmowing.ca contact form</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.json({ success: true, id: data?.id });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ Go Green Mowing API running on port ${PORT}`);
    console.log(`📧 Resend API key: ${process.env.RESEND_API_KEY ? 'Set ✓' : 'NOT SET — set RESEND_API_KEY env var'}`);
});
