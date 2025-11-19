import { useState } from 'react'

const OurServices = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)

  const services = [
    { name: 'Modular Kitchen', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h18v14H3V7zm2 2v10h14V9H5zm2 2h10v2H7v-2zm0 4h10v2H7v-2z"/></svg> },
    { name: 'Wardrobes', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2h12v20H6V2zm2 2v16h3V4H8zm5 0v16h3V4h-3z"/></svg> },
    { name: 'False Ceiling', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l10 5v6h-2V8.5L12 4.5 4 8.5V13H2V7l10-5zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-7 4h14v2H5v-2zm0 4h14v2H5v-2z"/></svg> },
    { name: 'Crockery Unit', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z"/></svg> },
    { name: 'TV Unit', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2H7v2h10v-2h-1v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg> },
    { name: 'Painting', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/></svg> },
    { name: 'Study Table', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11h2v3h2v-3h12v3h2v-3h2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 13H4V8h3v2h2V8h6v2h2V8h3v9z"/></svg> },
    { name: 'Furniture & More', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v10h22V7h-4zm-6 7l2.5-3.21 1.79 2.15 2.5-3.22L23 13H13z"/></svg> },
    { name: 'Exterior', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v9h-2v-6h-8v6H6v-9l6-5.16z"/></svg> },
    { name: 'Electrical', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg> },
    { name: 'Water Proofing', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg> },
    { name: 'Renovation', icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M13.783 15.172l2.121-2.121 5.996 5.996-2.121 2.121zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"/></svg> }
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
              <div className="text-gray-700">{service.icon}</div>
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
