import { useState } from 'react'

const InteriorForm = () => {
  const [selected, setSelected] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)

  const interiorTypes = [
    '1BHK', '2BHK', '3BHK', '4BHK', 
    'Office Space', 'Cafe/Restaurant', 
    'Clinic/Hospital', 'Salon', 
    'Retail Store', 'Other'
  ]

  const handleCheckbox = (type) => {
    setSelected(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const handleSubmit = () => {
    if (selected.length === 0) {
      alert('Please select at least one option')
      return
    }
    setShowModal(true)
  }

  const handleFinalSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const emailData = {
      to: 'info@arvienterprises.co.in',
      subject: 'Interior Inquiry',
      message: `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterior Type: ${selected.join(', ')}`
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
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nI need interiors for: ${selected.join(', ')}`
    )
    window.open(`https://wa.me/919004129180?text=${whatsappMessage}`, '_blank')
    
    setSelected([])
    setFormData({ name: '', phone: '', email: '' })
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          Get Premium Interiors At Best Prices
        </h2>
        
        <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12 inline-block">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">I Need Interiors For</h3>
          
          <div className="text-left space-y-3 mb-8">
            {interiorTypes.map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer text-lg">
                <input
                  type="checkbox"
                  checked={selected.includes(type)}
                  onChange={() => handleCheckbox(type)}
                  className="w-5 h-5 accent-red-600"
                />
                <span className="text-gray-800">{type}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-3 rounded-xl text-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Enter Your Details</h3>
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

export default InteriorForm
