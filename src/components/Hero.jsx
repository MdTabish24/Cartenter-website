import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Left Cards */}
          <div className="absolute left-0 top-20 w-48 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 mb-6 hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-6 h-44 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-2">🪑</div>
                  <p className="text-xs font-semibold">Custom Furniture</p>
                </div>
              </div>
              <div className="p-2 bg-white">
                <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                  Starting $299
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-xl p-4 text-center text-white w-36 hover:scale-105 transition-transform">
              <div className="bg-white text-green-600 px-2 py-1 rounded-lg inline-block mb-2 text-xs font-bold">
                ⭐ Premium
              </div>
              <div className="text-2xl font-bold mb-1">Quality</div>
              <p className="text-xs">Guaranteed</p>
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
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 relative mb-6 w-44 ml-auto hover:scale-105 transition-transform">
              <div className="absolute top-2 right-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-bold z-10">
                ✨ 3D Design
              </div>
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
                <div className="text-6xl">🛋️</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-100 relative hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-2">🔨</div>
                  <p className="text-sm font-bold">Expert Craftsman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
