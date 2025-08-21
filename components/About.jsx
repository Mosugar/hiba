import { UserCheck, Award, Heart, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/images/work.png"
                alt="Dr. Hiba Guelida au travail - Pristine Dental Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Découvrez le Dr. Hiba - votre experte en soins dentaires personnalisés
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Dr. Hiba Guelida</strong> est une dentiste passionnée qui place 
                  le bien-être de ses patients au cœur de sa pratique. Avec son approche bienveillante et son 
                  expertise reconnue, elle vous accompagne dans tous vos soins dentaires.
                </p>
                <p>
                  Active sur les réseaux sociaux, Dr. Hiba partage régulièrement des conseils de santé 
                  dentaire et crée une relation de confiance avec ses patients en dehors du cabinet.
                </p>
              </div>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Patients satisfaits</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Urgences</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About