import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      icon: '🪑',
      title: 'Custom Furniture',
      description: 'Bespoke furniture designed and crafted to perfectly fit your space and style',
      features: ['Beds & Wardrobes', 'Sofas & Chairs', 'Tables & Cabinets']
    },
    {
      id: 2,
      icon: '🚪',
      title: 'Door & Gate Design',
      description: 'Elegant entrance solutions with modern and traditional designs',
      features: ['Main Doors', 'Interior Doors', 'Safety Gates']
    },
    {
      id: 3,
      icon: '📺',
      title: 'TV Units & Entertainment',
      description: 'Stylish TV units and entertainment centers for your living space',
      features: ['Wall Mounted Units', 'Floor Standing', 'Custom Designs']
    },
    {
      id: 4,
      icon: '🍳',
      title: 'Modular Kitchen',
      description: 'Complete kitchen solutions with modern fittings and storage',
      features: ['Cabinets & Drawers', 'Countertops', 'Kitchen Islands']
    },
    {
      id: 5,
      icon: '🛏️',
      title: 'Bedroom Interiors',
      description: 'Complete bedroom makeovers with wardrobes, beds, and decor',
      features: ['Wardrobe Design', 'Bed Frames', 'Dressing Tables']
    },
    {
      id: 6,
      icon: '🏢',
      title: 'Office Interiors',
      description: 'Professional workspace design for productivity and comfort',
      features: ['Workstations', 'Meeting Rooms', 'Reception Areas']
    },
    {
      id: 7,
      icon: '🎨',
      title: 'False Ceiling',
      description: 'Modern ceiling designs with lighting and acoustic solutions',
      features: ['POP Ceiling', 'Gypsum Board', 'Wooden Ceiling']
    },
    {
      id: 8,
      icon: '🪟',
      title: 'Wall Paneling',
      description: 'Decorative wall treatments and paneling for elegant interiors',
      features: ['Wood Paneling', 'PVC Panels', 'Textured Walls']
    },
    {
      id: 9,
      icon: '🙏',
      title: 'Pooja Room',
      description: 'Sacred spaces designed with traditional and modern elements',
      features: ['Mandir Design', 'Storage Solutions', 'Lighting']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert carpentry and interior solutions tailored to transform your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className={`space-y-2 transition-all duration-500 ${hoveredService === service.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-indigo-600 mb-2">Features:</p>
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  

                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">Get a free consultation and quote for your project</p>
            <Link to="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-shadow">
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ServicesPage
