const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const createOAuth2Client = () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return oauth2Client;
};

const buildHtmlEmail = (otp) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#f4f4f7;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
              <tr>
                <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:32px;text-align:center;">
                  <h1 style="color:#ffffff;margin:0;font-size:26px;font-weight:700;">PPOB Platform</h1>
                  <p style="color:#e0d4f7;margin:8px 0 0;font-size:14px;">Verifikasi Email Anda</p>
                </td>
              </tr>
              <tr>
                <td style="padding:40px 32px;">
                  <p style="color:#333333;font-size:16px;margin:0 0 16px;line-height:1.6;">Halo,</p>
                  <p style="color:#555555;font-size:15px;margin:0 0 28px;line-height:1.6;">Gunakan kode OTP berikut untuk menyelesaikan proses registrasi akun Anda:</p>
                  <div style="background-color:#f8f6ff;border:2px dashed #667eea;border-radius:10px;padding:24px;text-align:center;margin:0 0 28px;">
                    <span style="font-size:36px;font-weight:700;letter-spacing:10px;color:#667eea;">${otp}</span>
                  </div>
                  <p style="color:#888888;font-size:13px;margin:0 0 8px;line-height:1.6;">⏳ Kode ini berlaku selama <strong>5 menit</strong>.</p>
                  <p style="color:#888888;font-size:13px;margin:0;line-height:1.6;">Jika Anda tidak melakukan registrasi, abaikan email ini.</p>
                </td>
              </tr>
              <tr>
                <td style="background-color:#f9fafb;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
                  <p style="color:#aaaaaa;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} PPOB Platform. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

const sendOTP = async (email, otp) => {
  const oauth2Client = createOAuth2Client();
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const subject = 'Kode OTP Verifikasi - PPOB Platform';
  const htmlBody = buildHtmlEmail(otp);

  const messageParts = [
    `From: PPOB Platform <${process.env.GOOGLE_EMAIL}>`,
    `To: ${email}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    htmlBody,
  ];
  const message = messageParts.join('\n');

  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });
};

module.exports = { sendOTP };
