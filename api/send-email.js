const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, email, message } = req.body

  const msg = {
    to: 'info@arvienterprises.co.in',
    from: 'noreply@arvienterprises.co.in',
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
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: error.message })
  }
}