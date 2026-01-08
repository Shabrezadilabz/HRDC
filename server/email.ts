import nodemailer from 'nodemailer';

// Email configuration
const ADMIN_EMAIL = 'ardc.ceo.ap@gmail.com';

// Create transporter
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPass) {
    console.warn('⚠️ Email credentials not configured. Emails will not be sent.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

// Send scholarship registration notification
export async function sendScholarshipNotification(data: {
  name: string;
  stream: string;
  city: string;
  phone: string;
}) {
  const transporter = createTransporter();
  if (!transporter) {
    console.log('📧 Email disabled - scholarship notification skipped');
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ADMIN_EMAIL,
    subject: '🎓 New Scholarship Registration - Aviation Academy',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background: linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f5f5f5;
              border-left: 4px solid #FCD34D;
            }
            .label {
              font-weight: bold;
              color: #F59E0B;
              display: inline-block;
              width: 120px;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 2px solid #FCD34D;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎓 New Scholarship Registration</h1>
              <p>Aviation Research & Development Center</p>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 20px;">
                A new student has registered for the National Aviation Scholarship Exam.
              </p>
              
              <div class="field">
                <span class="label">👤 Name:</span>
                <span class="value">${data.name}</span>
              </div>
              
              <div class="field">
                <span class="label">📚 Stream:</span>
                <span class="value">${data.stream}</span>
              </div>
              
              <div class="field">
                <span class="label">📍 City:</span>
                <span class="value">${data.city}</span>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone:</span>
                <span class="value">${data.phone}</span>
              </div>
              
              <div class="footer">
                <p>This email was sent from your Aviation Academy website.</p>
                <p>Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Scholarship notification email sent to:', ADMIN_EMAIL);
  } catch (error) {
    console.error('❌ Failed to send scholarship notification email:', error);
    throw error;
  }
}

// Send enquiry notification
export async function sendEnquiryNotification(data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message?: string;
}) {
  const transporter = createTransporter();
  if (!transporter) {
    console.log('📧 Email disabled - enquiry notification skipped');
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ADMIN_EMAIL,
    subject: '📩 New Enquiry - Aviation Academy',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f5f5f5;
              border-left: 4px solid #3B82F6;
            }
            .label {
              font-weight: bold;
              color: #1E40AF;
              display: inline-block;
              width: 140px;
            }
            .value {
              color: #333;
            }
            .message-box {
              margin-top: 20px;
              padding: 15px;
              background-color: #EFF6FF;
              border-radius: 5px;
              border-left: 4px solid #3B82F6;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 2px solid #3B82F6;
              color: #666;
              font-size: 12px;
            }
            .action-button {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 30px;
              background: linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📩 New Enquiry Received</h1>
              <p>Aviation Research & Development Center</p>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 20px;">
                A potential student has submitted an enquiry through your website.
              </p>
              
              <div class="field">
                <span class="label">👤 Name:</span>
                <span class="value">${data.name}</span>
              </div>
              
              <div class="field">
                <span class="label">📧 Email:</span>
                <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone:</span>
                <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
              </div>
              
              <div class="field">
                <span class="label">🎓 Interested In:</span>
                <span class="value">${data.service}</span>
              </div>
              
              ${data.message ? `
                <div class="message-box">
                  <p style="margin: 0; font-weight: bold; color: #1E40AF;">💬 Message:</p>
                  <p style="margin: 10px 0 0 0;">${data.message}</p>
                </div>
              ` : ''}
              
              <div style="text-align: center;">
                <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" class="action-button">
                  💬 Contact via WhatsApp
                </a>
              </div>
              
              <div class="footer">
                <p>This email was sent from your Aviation Academy website.</p>
                <p>Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Enquiry notification email sent to:', ADMIN_EMAIL);
  } catch (error) {
    console.error('❌ Failed to send enquiry notification email:', error);
    throw error;
  }
}

// Send student exam registration notification
export async function sendExamRegistrationNotification(data: {
  name: string;
  email: string;
  phone: string;
  course: string;
  educationLevel: string;
  city: string;
  state: string;
  examDate: Date;
  preferredTime: string;
}) {
  const transporter = createTransporter();
  if (!transporter) {
    console.log('📧 Email disabled - exam registration notification skipped');
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ADMIN_EMAIL,
    subject: '📝 New Exam Registration - Aviation Academy',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background: linear-gradient(135deg, #10B981 0%, #059669 100%);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f5f5f5;
              border-left: 4px solid #10B981;
            }
            .label {
              font-weight: bold;
              color: #059669;
              display: inline-block;
              width: 150px;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 2px solid #10B981;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📝 New Exam Registration</h1>
              <p>Aviation Research & Development Center</p>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 20px;">
                A student has registered for an entrance exam.
              </p>
              
              <div class="field">
                <span class="label">👤 Name:</span>
                <span class="value">${data.name}</span>
              </div>
              
              <div class="field">
                <span class="label">📧 Email:</span>
                <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone:</span>
                <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
              </div>
              
              <div class="field">
                <span class="label">🎓 Course:</span>
                <span class="value">${data.course}</span>
              </div>
              
              <div class="field">
                <span class="label">📚 Education Level:</span>
                <span class="value">${data.educationLevel}</span>
              </div>
              
              <div class="field">
                <span class="label">📍 Location:</span>
                <span class="value">${data.city}, ${data.state}</span>
              </div>
              
              <div class="field">
                <span class="label">📅 Exam Date:</span>
                <span class="value">${new Date(data.examDate).toLocaleDateString('en-IN')}</span>
              </div>
              
              <div class="field">
                <span class="label">⏰ Preferred Time:</span>
                <span class="value">${data.preferredTime}</span>
              </div>
              
              <div class="footer">
                <p>This email was sent from your Aviation Academy website.</p>
                <p>Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Exam registration notification email sent to:', ADMIN_EMAIL);
  } catch (error) {
    console.error('❌ Failed to send exam registration notification email:', error);
    throw error;
  }
}



