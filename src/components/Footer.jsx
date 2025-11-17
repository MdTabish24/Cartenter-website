const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Arvi Enterprises
            </h3>
            <p className="text-gray-400 text-sm">
              Expert carpentry and interior work with precision and perfection by Ravi Yadav.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-400 hover:text-indigo-400 text-sm transition-colors">Services</a>
              <a href="/projects" className="block text-gray-400 hover:text-indigo-400 text-sm transition-colors">Projects</a>
              <a href="/about" className="block text-gray-400 hover:text-indigo-400 text-sm transition-colors">About Us</a>
              <a href="/contact" className="block text-gray-400 hover:text-indigo-400 text-sm transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 info@arvienterprises.co.in</p>
              <p>📞 +91 9004129180</p>
              <p>📍 Powai, Mumbai - 400076</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Arvi Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
