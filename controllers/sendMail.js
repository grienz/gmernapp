const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
  MAILING_SERVICE_ACCESS_TOKEN,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND,
  MAILING_SERVICE_ACCESS_TOKEN
);

//send_mail

const sendMail = (to, url, txt) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: MAILING_SERVICE_ACCESS_TOKEN,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "Grienz Dev",
    html: `
        <div>
        <tr style="vertical-align:top;padding:0">
                <td style="vertical-align:top;padding:0 40px" valign="top" align="center">
                  <table style="border-spacing:0;border-collapse:collapse;font-family:proxima-nova,'helvetica neue',helvetica,arial,geneva,sans-serif;width:100%;background:#ffffff;margin:0;padding:0;border:0">
                    <div><tr style="vertical-align:top;padding:0">
                      <td valign="top" align="left" style="vertical-align:top;text-align:left;padding:0">
                        <h1 align="left" style="color:#00d9ff;display:block;font-family:hybrea,proxima-nova,'helvetica neue',helvetica,arial,geneva,sans-serif;font-size:32px;font-weight:200;text-align:left;margin:0 0 40px"><img src="https://res.cloudinary.com/gmernapp/image/upload/v1647019406/gmernapp/grienzy_fjqmoi_odi8k1.png" style="outline:none;text-decoration:none;border:0" height="90" width="90" alt="grienz" class="CToWUd"></h1>
                        <p style="margin:20px 0">Herkese Merhaba Ben Güray!</p>

                        <a href=${url} style="background: aqua; text-decoration: none; color: white; display: inline-block;">${txt}</a>
                        

                        <p style="margin:20px 0">If the button doesn't work for any reason, you can also click on the link below:</p>
                        <div>${url}</div>
                        
                      </td>
                    </tr>
                  </div></table>
                </td>
              </tr>
                <tr style="vertical-align:top;padding:0">
                  <td style="vertical-align:top;padding:0 40px" valign="top" align="center">
                    <table style="border-spacing:0;border-collapse:collapse;font-family:proxima-nova,'helvetica neue',helvetica,arial,geneva,sans-serif;width:100%;border-top-style:solid;border-top-color:#ebeaef;color:#999999;font-size:12px;background:#ffffff;margin:0;padding:0;border-width:1px 0 0" id="m_-6939436960517352407footerContent">
                      <div><tr style="vertical-align:top;padding:0">
                        <td align="left" style="vertical-align:top;text-align:left;padding:0" valign="top">
                          <p style="margin:20px 0">
                            Testing My Apps
                          </p>

                          <p style="margin:20px 0">
                            To learn more about Grienz and all its features, check out the GitHub: <a style="color:#00d9ff" href="https://github.com/grienz" rel="noreferrer nofollow noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://github.com/grienz&amp;source=gmail&amp;ust=1647102452407000&amp;usg=AOvVaw34dJjTIeatLesKODoDK42H">grienz<wbr> :)</a>
                          </p>
                          <p style="margin:20px 0">
                            App: <a style="color:#00d9ff" href="https://github.com/grienz" rel="noreferrer nofollow noopener" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://github.com/grienz&amp;source=gmail&amp;ust=1647102452407000&amp;usg=AOvVaw34dJjTIeatLesKODoDK42H">gmernapp</a>
                          </p>
                        </td>
                      </tr>
                    </div></table>
                  </td>
                </tr>
            </div>
        `,
  };
  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendMail;
