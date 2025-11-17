const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    }
  }

  const { name, phone, email, message } = JSON.parse(event.body)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'info@arvienterprises.co.in',
    from: 'kaamshaikh07@gmail.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  }

  try {
    await sgMail.send(msg)
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    }
  } catch (error) {
    console.error('SendGrid Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    }
  }
}