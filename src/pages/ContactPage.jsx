import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Send email via SendGrid API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        // Email sent successfully, now open WhatsApp
        const whatsappMessage = `Hello! I'm interested in your services.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Message:* ${formData.message}

Please get back to me. Thank you!`
        
        const whatsappNumber = '919004129180'
        const whatsappAppLink = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`
        const whatsappWebLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
        
        // Try to open WhatsApp app first
        const whatsappWindow = window.open(whatsappAppLink, '_blank')
        
        // Fallback to WhatsApp Web
        setTimeout(() => {
          if (!whatsappWindow || whatsappWindow.closed) {
            window.open(whatsappWebLink, '_blank')
          }
        }, 1000)
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        })
        
        alert('Email sent successfully! WhatsApp is opening...')
      } else {
        alert('Failed to send email. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50">
      <Navbar />

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get in touch with us for your interior design and carpentry needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors bg-white/80"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors bg-white/80"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors bg-white/80"
                    placeholder="Enter your email address"
                  />
                </div>



                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:outline-none transition-colors bg-white/80 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl mt-1">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Siveneri Hill Colony, Old Pipeline,<br />
                        IIT Market, Powai,<br />
                        Mumbai - 400076
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl mt-1">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone & WhatsApp</h4>
                      <p className="text-gray-600">+91 9004129180</p>
                      <a 
                        href="tel:+919004129180" 
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl mt-1">📧</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">info@arvienterprises.co.in</p>
                      <a 
                        href="mailto:info@arvienterprises.co.in" 
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919004129180?text=Hello! I'm interested in your interior design and carpentry services. Please provide more information."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
                  >
                    <span className="text-xl">💬</span>
                    WhatsApp Us
                  </a>
                  
                  <a
                    href="tel:+919004129180"
                    className="flex items-center justify-center gap-3 w-full bg-blue-500 text-white py-4 rounded-2xl font-semibold hover:bg-blue-600 transition-colors"
                  >
                    <span className="text-xl">📞</span>
                    Call Now
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage