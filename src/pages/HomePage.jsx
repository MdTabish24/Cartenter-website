import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50 relative">
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/homebg.png')" }}
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
