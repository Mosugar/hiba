import { Smile, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-pink-50 to-blue-50 border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Pristine Dental Center</h3>
                <p className="text-gray-600 text-sm">Dr. Hiba Guelida</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Votre dentiste de confiance à Kenitra. Nous vous accompagnons avec 
              professionnalisme et bienveillance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">0530-220071</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">Kenitra, Maroc</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">contact@pristinedental.ma</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Horaires</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Lun - Ven: 9h00-13h00, 15h00-19h00</div>
              <div>Samedi: 9h00-13h00</div>
              <div>Dimanche: Fermé</div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Facebook className="w-4 h-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Instagram className="w-4 h-4 text-blue-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                <Youtube className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-pink-200 pt-6">
          <div className="text-center text-gray-600 text-sm">
            © {currentYear} Pristine Dental Center - Dr. Hiba Guelida. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer