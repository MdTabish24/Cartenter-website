import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50">
      <Navbar />

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
              About Arvi Enterprises
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Excellence in Interior Design & Carpentry with Over 15 Years of Experience
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Owner Info */}
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/30">
              <div className="text-center mb-6 lg:mb-8">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto mb-4 lg:mb-6 overflow-hidden border-4 border-indigo-600 shadow-xl">
                  <img 
                    src="/images/profilepic.jpeg" 
                    alt="Ravi Yadav" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Ravi Yadav</h2>
                <p className="text-indigo-600 font-semibold text-base lg:text-lg">Owner & Master Craftsman</p>
              </div>
              
              <div className="space-y-3 lg:space-y-4 text-gray-700">
                <p className="text-center text-sm lg:text-lg leading-relaxed">
                  With over <span className="font-bold text-indigo-600">15+ years of experience</span> in interior design and carpentry, 
                  Ravi Yadav has established Arvi Enterprises as a trusted name in the industry.
                </p>
                <p className="text-center text-sm lg:text-base">
                  His expertise spans across residential and commercial projects, delivering exceptional 
                  craftsmanship and innovative design solutions.
                </p>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/30">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 text-center">Our Expertise</h3>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">🏠</div>
                    <p className="font-semibold text-gray-800 text-xs lg:text-sm">Interior Design</p>
                  </div>
                  <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">🔨</div>
                    <p className="font-semibold text-gray-800 text-xs lg:text-sm">Carpentry Work</p>
                  </div>
                  <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">🪑</div>
                    <p className="font-semibold text-gray-800 text-xs lg:text-sm">Custom Furniture</p>
                  </div>
                  <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">🎨</div>
                    <p className="font-semibold text-gray-800 text-xs lg:text-sm">Design Solutions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/30">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 text-center">Contact Information</h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-xl lg:text-2xl mt-1">📍</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm lg:text-base">Address</p>
                      <p className="text-gray-600 text-xs lg:text-sm">Siveneri Hill Colony, Old Pipeline, IIT Market, Powai, Mumbai - 400076</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-xl lg:text-2xl mt-1">📞</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm lg:text-base">Phone & WhatsApp</p>
                      <p className="text-gray-600 text-sm lg:text-base">+91 9004129180</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                    <div className="text-xl lg:text-2xl mt-1">📧</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm lg:text-base">Email</p>
                      <p className="text-gray-600 text-sm lg:text-base">info@arvienterprises.co.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Arvi Enterprises?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  ⭐
                </div>
                <h4 className="font-bold text-gray-900 mb-2">15+ Years Experience</h4>
                <p className="text-gray-600 text-sm">Proven track record with hundreds of satisfied customers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  🎯
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Quality Craftsmanship</h4>
                <p className="text-gray-600 text-sm">Attention to detail and precision in every project</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  💡
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Innovative Designs</h4>
                <p className="text-gray-600 text-sm">Creative solutions tailored to your needs and space</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your interior design and carpentry needs. Contact us today for a free consultation.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage