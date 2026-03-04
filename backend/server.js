import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.post('/api/book-session', async (req, res) => {
    const { name, mobile, email, session } = req.body;

    if (!name || !mobile || !email) {
        return res.status(400).json({ error: 'Name, Mobile, and Email are required.' });
    }

    try {
        const mailOptions = {
            from: `"ThriveNPs Web Registration" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: 'New Webinar Registration Request',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f9f9fc;">
                    <div style="max-width: 600px; background-color: white; border-radius: 8px; padding: 30px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <h2 style="color: #6B4CCF; margin-top: 0; text-align: center; border-bottom: 2px solid #f0f0f5; padding-bottom: 15px;">New Registration Request</h2>
                        <p style="font-size: 16px; line-height: 1.5;">A new user has submitted a request to join the upcoming webinar session.</p>
                        
                        <div style="background-color: #fdfdfd; border: 1px solid #eee; border-radius: 6px; padding: 20px; margin-top: 25px;">
                            <h3 style="margin-top: 0; color: #444; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Attendee Details</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 140px; color: #555;">Name:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Mobile Number:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${mobile}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email Address:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #222;">
                                        <a href="mailto:${email}" style="color: #E91E8C; text-decoration: none;">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; font-weight: bold; color: #555;">Session Intent:</td>
                                    <td style="padding: 12px 0; color: #222;">${session || '<span style="color:#aaa;font-style:italic;">Not Specified</span>'}</td>
                                </tr>
                            </table>
                        </div>
                        
                        <p style="margin-top: 35px; text-align: center; font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
                            This automated message was securely generated via the ThriveNPs platform.
                        </p>
                    </div>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Registration Message Handled: %s", info.messageId);
        return res.status(200).json({ message: 'Registration submitted successfully!' });

    } catch (error) {
        console.error("Failed executing mail transportation:", error);
        return res.status(500).json({ error: 'Failed to send registration due to an internal server error.' });
    }
});

app.listen(PORT, () => {
    console.log(`SMTP Mail Server active and listening on port ${PORT}`);
});
