import { SES } from '@aws-sdk/client-ses';

const ses = new SES();

export const sendFormData = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const params = {
      Destination: {
        ToAddresses: [process.env.EMAIL_TO],
      },
      Message: {
        Body: {
          Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
        },
        Subject: { Data: 'New message from your website' },
      },
      Source: process.env.EMAIL_FROM,
    };

    const data = await ses.sendEmail(params);

    res.status(200).json({
      status: 'success',
      message: 'Email sent successfully',
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
