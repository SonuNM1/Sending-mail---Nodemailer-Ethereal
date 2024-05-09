const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    // creating a test account with Ethereal

  let testAccount = await nodemailer.createTestAccount();

  // creating a transporter to connect with the SMTP server

  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "beaulah.rempel20@ethereal.email", // ethereal email address
      pass: "cjWY3Pprtr41eN31WP", // ethereal email password
    },
  });

  // send the mail using the transporter

  let info = await transporter.sendMail({
    from: '"Sonu NM" <snm@gmail.com>', // sender's email address
    to: "isonumahto362000@gmail.com", // recipient's email address
    subject: "Nodemailer fake SMTP Server", // email subject 
    html: "<b>Hello Sonu NM</b>" // html content of the email
  })

  // log the message ID to console 

  console.log("Message sent: %s", info.messageId) ; 

  // send the email information as JSON response

  res.json(info) ; 
};

module.exports = sendMail;
