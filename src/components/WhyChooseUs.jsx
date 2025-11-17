const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Why Choose Us ?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-6xl mb-4 text-orange-500">📋</div>
            <p className="text-xl font-semibold italic text-gray-800">Best Policy</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4 text-orange-500">⏰</div>
            <p className="text-xl font-semibold italic text-gray-800">On Time Delivery</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4 text-orange-500">🏆</div>
            <p className="text-xl font-semibold italic text-gray-800">Superior Quality</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4 text-orange-500">💰</div>
            <p className="text-xl font-semibold italic text-gray-800">Best Price</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
