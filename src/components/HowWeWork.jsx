import { useState } from 'react'
import { Link } from 'react-router-dom'

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: 'Consultation & Design',
      description: 'We meet to understand your vision and create custom carpentry designs tailored to your space.'
    },
    {
      title: 'Material Selection',
      description: 'Choose from premium quality materials and finishes that match your style and budget.'
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Our skilled carpenters bring your design to life with precision and attention to detail.'
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">How Do We Work ?</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/p1.jpg"
              alt="Interior Work"
              className="rounded-3xl shadow-2xl w-full h-80 object-cover"
            />
          </div>

          <div>
            <div className="flex gap-4 mb-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    activeStep === index
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-4 text-gray-900">{steps[activeStep].title}</h3>
            <p className="text-gray-600 text-lg">{steps[activeStep].description}</p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 font-bold mb-2">Happy Customers</p>
            <h3 className="text-4xl font-bold mb-6 text-gray-900">Delighted by Our Service</h3>
            <p className="text-gray-600 mb-4">
              Discover the stories of our satisfied clients who have experienced the remarkable journey of transformation with us. From dream concepts to stunning reality, our interior design and carpentry expertise has put smiles on the faces of those we've had the pleasure to serve.
            </p>
            <p className="text-gray-600 mb-6">
              Read on to learn how we've turned visions into vibrant, livable spaces that our customers now call home.
            </p>
            <Link to="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all">
              Book Free Consultation
            </Link>
          </div>

          <div>
            <img
              src="/images/p2.jpg"
              alt="Happy Customers"
              className="rounded-3xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
