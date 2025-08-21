import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mostapha La",
      rating: 5,
      text: "Je tiens à remercier sincèrement Dr. Hiba GUELIDA pour son professionnalisme et sa gentillesse. Le service est impeccable, l'accueil chaleureux et les explications toujours claires.",
      service: "Soins dentaires généraux"
    },
    {
      name: "Manal Graoui",
      rating: 5,
      text: "Le Dr Hiba est non seulement très professionnelle, mais aussi incroyablement gentille et patiente. Je me sens toujours parfaitement à l'aise lors de mes rendez-vous.",
      service: "Consultation de routine"
    },
    {
      name: "Kawtar Chaddou",
      rating: 5,
      text: "J'ai consulté le Dr Guelida en urgence. Elle m'a prise en charge rapidement, avec beaucoup d'écoute et de bienveillance. Je recommande vivement ce praticien.",
      service: "Urgence dentaire"
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-pink-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ce que disent nos patients satisfaits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La confiance de nos patients est notre plus belle récompense
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-pink-500">500+</div>
                <div className="text-sm text-gray-600">Patients satisfaits</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-pink-500">98%</div>
                <div className="text-sm text-gray-600">Taux de satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-pink-500">10+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-pink-500">24/7</div>
                <div className="text-sm text-gray-600">Support urgences</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez nos patients satisfaits
          </h3>
          <p className="text-gray-600 mb-6">
            Prenez rendez-vous dès aujourd'hui
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials