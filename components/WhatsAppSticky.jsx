import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const WhatsAppSticky = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Show button after user scrolls down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show tooltip after a delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "212530220071" // Format international pour le Maroc
  const defaultMessage = "Bonjour Dr. Hiba, j'aimerais prendre rendez-vous pour une consultation dentaire."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank')
  }

  const closeTooltip = () => {
    setShowTooltip(false)
  }

  // Custom WhatsApp Icon SVG
  const WhatsAppIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      width="28" 
      height="28" 
      fill="currentColor"
      className="text-white"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
    </svg>
  )

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 mr-2 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-100 relative">
            <button
              onClick={closeTooltip}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Besoin d'aide ?
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Contactez Dr. Hiba directement sur WhatsApp pour prendre rendez-vous ou poser vos questions.
                </p>
              </div>
            </div>
            
            {/* Speech bubble arrow */}
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-gentle"
        aria-label="Contacter sur WhatsApp"
      >
        <WhatsAppIcon />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Hover tooltip */}
        <div className="absolute bottom-20 right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
            Contactez-nous sur WhatsApp
            <div className="absolute top-full right-4 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default WhatsAppSticky