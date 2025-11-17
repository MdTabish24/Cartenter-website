import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProjectsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    { id: 1, img: '/images/WhatsApp Image 2025-11-14 at 10.32.25 PM (1).jpeg', title: 'Modern Kitchen Design' },
    { id: 2, img: '/images/WhatsApp Image 2025-11-14 at 10.32.25 PM (2).jpeg', title: 'Luxury Bedroom Interior' },
    { id: 4, img: '/images/WhatsApp Image 2025-11-14 at 10.32.26 PM (1).jpeg', title: 'Bed' },
    { id: 5, img: '/images/WhatsApp Image 2025-11-14 at 10.32.26 PM (2).jpeg', title: '' },
    { id: 7, img: '/images/WhatsApp Image 2025-11-14 at 10.32.27 PM (1).jpeg', title: 'Cupboard Design' },
    { id: 8, img: '/images/WhatsApp Image 2025-11-14 at 10.32.27 PM (2).jpeg', title: 'T.V Unit' },
    { id: 9, img: '/images/WhatsApp Image 2025-11-14 at 10.32.27 PM (3).jpeg', title: 'Sofa Design' },
    { id: 10, img: '/images/WhatsApp Image 2025-11-14 at 10.32.27 PM.jpeg', title: 'Pooja Space' },
    { id: 11, img: '/images/WhatsApp Image 2025-11-14 at 10.32.28 PM (1).jpeg', title: 'Gate Design' },
    { id: 12, img: '/images/WhatsApp Image 2025-11-14 at 10.32.28 PM (2).jpeg', title: 'Cupboard Design' },
    { id: 13, img: '/images/WhatsApp Image 2025-11-14 at 10.32.28 PM.jpeg', title: '' },
    { id: 14, img: '/images/WhatsApp Image 2025-11-14 at 10.32.29 PM (1).jpeg', title: 'Bed Design' },
    { id: 15, img: '/images/WhatsApp Image 2025-11-14 at 10.32.29 PM (2).jpeg', title: 'Cupboard Design' },
    { id: 16, img: '/images/WhatsApp Image 2025-11-14 at 10.32.29 PM.jpeg', title: 'Gate Design' },
    { id: 17, img: '/images/WhatsApp Image 2025-11-14 at 10.32.30 PM (1).jpeg', title: 'T.V Unit' },
    { id: 18, img: '/images/WhatsApp Image 2025-11-14 at 10.32.30 PM (2).jpeg', title: 'Gate Design' },
    { id: 19, img: '/images/WhatsApp Image 2025-11-14 at 10.32.30 PM (3).jpeg', title: '' },
    { id: 20, img: '/images/WhatsApp Image 2025-11-14 at 10.32.30 PM.jpeg', title: 'Bedroom Design' },
    { id: 21, img: '/images/WhatsApp Image 2025-11-14 at 10.32.31 PM (1).jpeg', title: 'Gate Design' },
    { id: 22, img: '/images/WhatsApp Image 2025-11-14 at 10.32.31 PM (2).jpeg', title: 'Gate Design' },
    { id: 23, img: '/images/WhatsApp Image 2025-11-14 at 10.32.31 PM.jpeg', title: 'T.V Unit' },
    { id: 24, img: '/images/WhatsApp Image 2025-11-14 at 10.32.32 PM (1).jpeg', title: '' },
    { id: 25, img: '/images/WhatsApp Image 2025-11-14 at 10.32.32 PM (2).jpeg', title: '' },
    { id: 26, img: '/images/WhatsApp Image 2025-11-14 at 10.32.32 PM.jpeg', title: 'Overhead Cabinate' },
    { id: 27, img: '/images/WhatsApp Image 2025-11-14 at 10.32.33 PM (1).jpeg', title: 'Gate Design' },
    { id: 28, img: '/images/WhatsApp Image 2025-11-14 at 10.32.33 PM (2).jpeg', title: '' },
    { id: 29, img: '/images/WhatsApp Image 2025-11-14 at 10.32.33 PM.jpeg', title: 'Sofa Design' },
    { id: 30, img: '/images/WhatsApp Image 2025-11-14 at 10.32.34 PM (1).jpeg', title: 'Sofa-Cum-Bed Design' },
    { id: 31, img: '/images/WhatsApp Image 2025-11-14 at 10.32.34 PM (2).jpeg', title: 'Bedroom Design' },
    { id: 32, img: '/images/WhatsApp Image 2025-11-14 at 10.32.34 PM.jpeg', title: 'Ceiling Design' },
    { id: 33, img: '/images/WhatsApp Image 2025-11-14 at 10.32.35 PM (1).jpeg', title: '' },
    { id: 34, img: '/images/WhatsApp Image 2025-11-14 at 10.32.35 PM (2).jpeg', title: '' },
    { id: 35, img: '/images/WhatsApp Image 2025-11-14 at 10.32.35 PM (3).jpeg', title: 'Computer Table' },
    { id: 36, img: '/images/WhatsApp Image 2025-11-14 at 10.32.35 PM.jpeg', title: 'Cupboard Design' },
    { id: 37, img: '/images/WhatsApp Image 2025-11-14 at 10.32.36 PM (1).jpeg', title: 'Cupboard Design' },
    { id: 38, img: '/images/WhatsApp Image 2025-11-14 at 10.32.36 PM (2).jpeg', title: 'Bedroom Design' },
    { id: 39, img: '/images/WhatsApp Image 2025-11-14 at 10.32.36 PM.jpeg', title: '' },
    { id: 40, img: '/images/WhatsApp Image 2025-11-14 at 10.32.37 PM (1).jpeg', title: 'Bed room' },
    { id: 41, img: '/images/WhatsApp Image 2025-11-14 at 10.32.37 PM (2).jpeg', title: 'Gate Design' },
    { id: 42, img: '/images/WhatsApp Image 2025-11-14 at 10.32.37 PM.jpeg', title: 'Restaurant Design' },
    { id: 43, img: '/images/WhatsApp Image 2025-11-14 at 10.32.38 PM (1).jpeg', title: 'T.V Unit' },
    { id: 44, img: '/images/WhatsApp Image 2025-11-14 at 10.32.38 PM (2).jpeg', title: 'Pooja Space' },
    { id: 45, img: '/images/WhatsApp Image 2025-11-14 at 10.32.38 PM (3).jpeg', title: '' },
    { id: 46, img: '/images/WhatsApp Image 2025-11-14 at 10.32.38 PM.jpeg', title: 'Sofa-Cum-Bed Design' },
    { id: 10, img: '/images/WhatsApp Image 2025-11-14 at 10.32.27 PM.jpeg', title: 'TV Unit Design' },
    { id: 11, img: '/images/WhatsApp Image 2025-11-14 at 10.32.28 PM (1).jpeg', title: 'Gate Design' },
    { id: 12, img: '/images/WhatsApp Image 2025-11-14 at 10.32.28 PM (2).jpeg', title: 'Pooja Room Design' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50">
      <Navbar />

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Projects Gallery
          </h1>
          <p className="text-gray-600 text-lg">Explore our stunning interior designs and craftsmanship</p>
        </div>
      </div>

      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer break-inside-avoid mb-4 sm:mb-6 transform transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="relative overflow-hidden bg-white shadow-xl border-2 border-gray-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-indigo-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    #{project.id}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
                      <h3 className="text-gray-900 font-bold text-sm sm:text-lg mb-1">{project.title}</h3>
                      <p className="text-indigo-600 text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Click to expand
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-indigo-500/50 rounded-3xl transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-5xl hover:text-indigo-400 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-indigo-500/50"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-indigo-300">Professional Interior Work by Arvi Enterprises</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage
