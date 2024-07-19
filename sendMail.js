const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
// import '../../.env'
dotenv.config()
// dotenv.config({ path: '../../.env' })
console.log(process.env.EMAIL_USER)

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
console.log(emailUser)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const sendEmailSearchedBreed=(email,subject,html)=>{
    transporter.sendMail({
      from: 'urjastudies@gmail.com',
      to: email,
      subject: subject,
      html: html
    }, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  const sendEmailSubscribedUsers=(email,subject,html)=>{
    transporter.sendMail({
      from: 'urjastudies@gmail.com',
      to: email,
      subject: subject,
      html: html
      // text:text
    }, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }


  module.exports={sendEmailSearchedBreed,sendEmailSubscribedUsers}