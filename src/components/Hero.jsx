import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
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
        </div>
      </div>
    </section>
  )
}

export default Hero
