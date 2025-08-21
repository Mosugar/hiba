import { Phone, MapPin, User, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="pt-20 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200">
              <Star className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Dentiste de confiance à Kenitra</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Créez des 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600"> sourires éclatants </span>
                avec nous
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Dr. Hiba Guelida vous accompagne avec professionnalisme et bienveillance 
                pour tous vos soins dentaires à Kenitra.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-blue-300 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Nos services
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-full">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">0530-220071</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-full">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium">Kenitra, Maroc</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-40"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl overflow-hidden">
                <img
                  src="/images/hiba.jpg"
                  alt="Dr. Hiba Guelida - Dentiste à Kenitra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">500+</div>
                <div className="text-xs text-gray-600">Patients satisfaits</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                <div className="text-xs text-gray-600">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero