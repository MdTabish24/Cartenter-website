import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfiniteSlider from '../components/InfiniteSlider'
import InteriorForm from '../components/InteriorForm'
import OurServices from '../components/OurServices'
import HowWeWork from '../components/HowWeWork'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/images/homebg.png',
    '/images/WhatsApp Image 2025-11-14 at 10.32.36 PM (1).jpeg',
    '/images/WhatsApp Image 2025-11-14 at 10.32.38 PM (1).jpeg',
    '/images/WhatsApp Image 2025-11-14 at 10.32.37 PM.jpeg',
    '/images/WhatsApp Image 2025-11-14 at 10.32.35 PM.jpeg',
    '/images/WhatsApp Image 2025-11-14 at 10.32.32 PM (1).jpeg',
    '/images/WhatsApp Image 2025-11-14 at 10.32.29 PM.jpeg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${img}')`,
                opacity: index === currentIndex ? 0.40 : 0
              }}
            />
          ))}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all text-2xl"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all text-2xl"
          >
            →
          </button>
        </div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <InteriorForm />
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">Why Choose Us ?</h2>
        </div>
      </section>
      <InfiniteSlider />
      <OurServices />
      <HowWeWork />
      <Footer />
    </div>
  )
}

export default HomePage
