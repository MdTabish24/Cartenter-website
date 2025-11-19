import { useState } from 'react'

const OurServices = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)

  const services = [
    { name: 'Modular Kitchen', icon: '🏠' },
    { name: 'Wardrobes', icon: '🚪' },
    { name: 'False Ceiling', icon: '💡' },
    { name: 'Crockery Unit', icon: '📚' },
    { name: 'TV Unit', icon: '📺' },
    { name: 'Painting', icon: '🎨' },
    { name: 'Study Table', icon: '📝' },
    { name: 'Furniture & More', icon: '🛋️' },
    { name: 'Exterior', icon: '🏗️' },
    { name: 'Electrical', icon: '⚡' },
    { name: 'Water Proofing', icon: '💧' },
    { name: 'Renovation', icon: '🔨' }
  ]

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName)
    setShowModal(true)
  }

  const handleFinalSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const emailData = {
      to: 'info@arvienterprises.co.in',
      subject: `Service Inquiry - ${selectedService}`,
      message: `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${selectedService}`
    }

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      })
    } catch (error) {
      console.error('Email error:', error)
    }

    setLoading(false)
    setShowModal(false)

    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nI need service for: ${selectedService}`
    )
    window.open(`https://wa.me/919004129180?text=${whatsappMessage}`, '_blank')
    
    setFormData({ name: '', phone: '', email: '' })
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => handleServiceClick(service.name)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105 flex flex-col items-center gap-4"
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Enter Your Details</h3>
            <p className="text-gray-600 mb-6">Service: {selectedService}</p>
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default OurServices
