const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'serhiybilouss@gmail.com',
    subject: 'Thank for joining in!',
    text: `Welcome to the app ${name}. Let me know some information about you.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'serhiybilouss@gmail.com',
    subject: 'You are lost Us :(',
    text: `Dear ${name}, let us know why you canceled your account?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}