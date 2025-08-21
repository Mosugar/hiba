import { Phone, MapPin, User } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="pt-20 gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Créez des sourires{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-blue to-dental-teal">
                  éclatants
                </span>{' '}
                avec nous
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Votre dentiste de confiance à Kenitra. Dr. Hiba Guelida vous accompagne avec 
                professionnalisme et bienveillance pour tous vos soins dentaires.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="hero-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Prendre rendez-vous
              </button>
              <button className="btn-secondary text-lg">
                En savoir plus
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-dental-blue/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Appelez-nous</p>
                  <p className="font-semibold text-gray-900">0530-220071</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-dental-teal/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-dental-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="font-semibold text-gray-900">Kenitra, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-dental-blue/20 to-dental-teal/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <User className="w-16 h-16 text-dental-blue" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm font-medium">[Photo de Dr. Hiba]</p>
                    <p className="text-xs text-gray-500">Image placeholder - remplacer avec photo professionnelle</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-dental-rose/30 rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-dental-mint/40 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero