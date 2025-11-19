import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Why do I need an interior designer?',
      answer: 'An interior designer functions like a meticulous film director, overseeing every detail from conception to completion. They tailor your space to match your vision, sourcing and crafting bespoke elements. Explore our website for bedroom, living room, and kitchen design inspiration or connect with India\'s top interior designers at our Experience Centre or through our lead form.'
    },
    {
      question: 'Why is Arvi Enterprises perfect for your home interior design?',
      answer: 'Discover the ideal collaborator for crafting your home interiors to perfection. Our adept design professionals tailor solutions to your preferences, incorporating cutting-edge technology into modular designs. Secure your consultation with India\'s premier Home Interiors Brand today and discuss your project with our expert designers.'
    },
    {
      question: 'What services are included under interior design?',
      answer: 'Discover a comprehensive solution for your home design needs with our expert interior designers. We handle everything from design to delivery and installation for various spaces. Whether creating a new space or renovating an existing one, we\'ve got you covered. Explore the latest kitchen, living room, and bedroom designs to start your home interior journey.'
    },
    {
      question: 'How much does interiors cost?',
      answer: 'The cost of interior design services varies based on property size, chosen materials, and scope of work. Consider the following basic cost list for different home types to plan your budget effectively. Our team specializes in creating budget-friendly designs for bedrooms, TV units, modular kitchens, kids\' rooms, balconies, and living spaces. Book a consultation today for more information on crafting the space you\'ve always dreamed of.'
    },
    {
      question: 'What will be the timelines for my project completion?',
      answer: 'Typically, interior design projects take anywhere from 20 to 45 days for completion, depending on the work that needs to be executed.'
    },
    {
      question: 'What are the trending interior design styles?',
      answer: 'Explore the key interior design styles in India for your dream home: Bohemian, Modern, Colonial, Indian Traditional, Art Deco, Industrial, Minimalist, Scandinavian.'
    },
    {
      question: 'Do you provide Renovation Service or Civil Work?',
      answer: 'Yes, we provide Renovation and Civil Work as well. Just fill the form and book an appointment right now.'
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          FAQs About Home Interior Design
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900">
                  {index + 1}. {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
