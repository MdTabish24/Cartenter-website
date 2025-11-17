import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfiniteSlider from '../components/InfiniteSlider'
import HowWeWork from '../components/HowWeWork'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50">
      <div className="relative">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/homebg.png')" }}
        />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">Why Choose Us ?</h2>
        </div>
      </section>
      <InfiniteSlider />
      <HowWeWork />
      <Footer />
    </div>
  )
}

export default HomePage
