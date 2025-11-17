import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Left Cards */}
          <div className="absolute left-0 top-20 w-48 hidden lg:block">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 mb-6 hover:scale-105 transition-transform">
              <img 
                src="/images/WhatsApp Image 2025-11-14 at 10.32.31 PM (1).jpeg" 
                alt="Gate Design" 
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-4 text-center w-36 hover:scale-105 transition-transform">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-2 py-1 rounded-lg inline-block mb-2 text-xs font-bold">
                ⭐ Premium
              </div>
              <div className="text-2xl font-bold mb-1 text-gray-900">Quality</div>
              <p className="text-xs text-gray-600">Guaranteed</p>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Crafting Dreams<br />Into Reality
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Expert carpentry and interior work that transforms your space with precision, quality, and timeless craftsmanship.
            </p>
            <Link to="/contact" className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Now
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Free consultation. Expert advice guaranteed.
            </p>
          </div>

          {/* Right Cards */}
          <div className="absolute right-0 top-8 w-52 hidden lg:block">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 relative mb-6 w-44 ml-auto hover:scale-105 transition-transform">
              <div className="absolute top-2 right-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-bold z-10">
                ✨ Custom Furniture
              </div>
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
                <div className="text-6xl">🪑</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border-2 border-orange-100 relative hover:scale-105 transition-transform">
              <img 
                src="/images/WhatsApp Image 2025-11-14 at 10.32.27 PM (2).jpeg" 
                alt="Expert Craftsman Work" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
