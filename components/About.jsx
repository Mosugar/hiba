import { UserCheck, Award, Heart, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-dental-pink px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-dental-blue" />
                <span className="text-sm font-medium text-dental-blue">À Propos de Dr. Hiba</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Découvrez le Dr. Hiba - votre experte en soins dentaires personnalisés
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
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

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-dental-blue" />
                </div>
                <div className="text-2xl font-bold text-dental-blue">500+</div>
                <div className="text-sm text-gray-600">Patients satisfaits</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-dental-teal/10 rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-dental-teal" />
                </div>
                <div className="text-2xl font-bold text-dental-teal">10+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-dental-rose/20 rounded-xl flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Urgences</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="btn-primary">
                Prendre rendez-vous
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-dental-pink rounded-3xl p-8 shadow-xl">
              <div className="aspect-[4/5] bg-white/70 rounded-2xl flex items-center justify-center border-2 border-dashed border-dental-blue/30">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-dental-blue/10 rounded-full mx-auto flex items-center justify-center">
                    <UserCheck className="w-16 h-16 text-dental-blue" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">[Photo professionnelle de Dr. Hiba]</p>
                    <p className="text-sm text-gray-500">Remplacer avec une photo en blouse blanche</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dental-teal/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-dental-blue/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About