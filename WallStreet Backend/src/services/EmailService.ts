import nodemailer from 'nodemailer';
import { Booking } from '../entities/Booking';

export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendBookingConfirmation(booking: Booking, transactionId?: string) {
    const emailHtml = this.generateConfirmationEmail(booking);

    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_FROM || 'WallStreet Sport <noreply@wallstreetsport.com>',
        to: booking.email,
        subject: 'Booking Confirmation - WallStreet Sport',
        html: emailHtml,
      });

      console.log('✅ Email sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error: any) {
      console.error('❌ Email sending failed:', error.message);
      throw new Error('Failed to send confirmation email');
    }
  }

  private generateConfirmationEmail(booking: Booking): string {
    // bookingDate is now a string '2025-11-22'
    const bookingDateStr = String(booking.bookingDate);
    const [year, month, day] = bookingDateStr.split('-').map(Number);
    const dateForFormatting = new Date(year, month - 1, day);

    const formattedDate = dateForFormatting.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .email-container {
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px;
      text-align: center;
      color: white;
    }
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo img {
      max-width: 800px;
      height: auto;
    }
    p {
      margin: 10px 0;
    }
    .content {
      padding: 30px;
    }
    .booking-details {
      background-color: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 15px;
      margin: 20px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #e9ecef;
    }
    .detail-label {
      font-weight: bold;
      color: #495057;
    }
    .detail-value {
      color: #212529;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #6c757d;
    }
    .button {
      display: inline-block;
      padding: 12px 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
    }
    .tagline {
      color: #ffd700;
      font-style: italic;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="logo">
      <img src="https://i.imgur.com/nAbwdb0.png" alt="WallStreet Sport Logo">
    </div>
    
    <div class="content">
      <h2 style="color: #667eea;">Good day, ${booking.customerName}!</h2>
      
      <p>Thank you for booking with <strong>WallStreet Sport</strong>! This email is sent for your booking confirmation.</p>
      
      <div class="booking-details">
        <h3 style="margin-top: 0; color: #667eea;">Booking Details:</h3>
        
        <div class="detail-row">
          <span class="detail-label">Booking Reference:</span>
          <span class="detail-value">${booking.bookingReference}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Date:</span>
          <span class="detail-value">${formattedDate}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Time:</span>
          <span class="detail-value">${booking.displayTime}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Payment:</span>
          <span class="detail-value">GCash</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Amount:</span>
          <span class="detail-value">PHP ${booking.rate}</span>
        </div>
      </div>
      
      <p><strong>Important Reminders:</strong></p>
      <ul>
        <li>Please arrive at least <strong>10-15 minutes</strong> before your scheduled time to check in.</li>
        <li>Bring this email confirmation or your booking reference number.</li>
        <li>If you need to reschedule or cancel, kindly contact us at <a href="mailto:srhjncmb@gmail.com">srhjncmb@gmail.com</a> at least <strong>3 days</strong> before your booking.</li>
      </ul>
      
      <p style="text-align: center; margin-top: 30px;">
        <strong>We look forward to seeing you!</strong>
      </p>
    </div>
    
    <div class="footer">
      <p><strong>Best regards,</strong><br>
      WallStreet Sport Team</p>
      
      <p style="margin-top: 20px; font-size: 11px; color: #999;">
        Please do not reply to this message as this is auto-generated.
      </p>
    </div>
  </div>
</body>
</html>
    `;
  }

  async testConnection() {
    try {
      await this.transporter.verify();
      return true;
    } catch (error: any) {
      return false;
    }
  }
}