const Services = () => {
    const services = [
      {
        iconPath: '/icons/Asset 3.svg',
        title: "Orthodontie",
        description: "Correction et alignement des dents pour un sourire parfaitement harmonieux.",
        subtitle: "Appareils modernes",
        bgColor: "bg-pink-200",
        iconColor: "text-pink-600"
      },
      {
        iconPath: '/icons/Asset 6.svg',
        title: "Soins Dentaires",
        description: "Soins préventifs et curatifs pour maintenir votre santé bucco-dentaire optimale.",
        subtitle: "Enfants et Adultes",
        bgColor: "bg-blue-200",
        iconColor: "text-blue-600"
      },
      {
        iconPath: '/icons/Asset 4.svg',
        title: "Blanchiment Dentaire",
        description: "Techniques avancées pour retrouver la blancheur naturelle de vos dents.",
        subtitle: "Résultats immédiats",
        bgColor: "bg-yellow-200",
        iconColor: "text-yellow-600"
      },
      {
        iconPath: '/icons/Asset 11.svg',
        title: "Implantologie",
        description: "Remplacement permanent des dents manquantes avec des implants de qualité.",
        subtitle: "Solutions durables",
        bgColor: "bg-green-200",
        iconColor: "text-green-600"
      },
      {
        iconPath: '/icons/Asset 12.svg',
        title: "Parodontologie",
        description: "Traitement spécialisé des gencives et des structures de soutien des dents.",
        subtitle: "Santé des gencives",
        bgColor: "bg-purple-200",
        iconColor: "text-purple-600"
      },
      {
        iconPath: '/icons/Asset 9.svg',
        title: "Dentisterie Esthétique", 
        description: "Retrouvez un sourire éclatant avec nos traitements esthétiques personnalisés.",
        subtitle: "Blanchiment & Embellissement",
        bgColor: "bg-pink-200",
        iconColor: "text-pink-600"
      }
    ]
  
    return (
      <section id="services" className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Découvrez nos services dentaires pour un sourire éclatant et en santé
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de soins dentaires adaptés à tous vos besoins
            </p> */}
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 p-2`}>
                  <img 
                    src={service.iconPath} 
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <p className="text-sm font-medium text-gray-700">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
  
          {/* WhatsApp CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Besoin d'une consultation personnalisée ?
              </h3>
              <p className="text-gray-600 mb-6">
                Dr. Hiba vous accompagne pour choisir le traitement le mieux adapté à vos besoins
              </p>
              <a
                href="https://wa.me/212530220071?text=Bonjour%20Dr.%20Hiba,%20j'aimerais%20prendre%20rendez-vous%20pour%20une%20consultation%20dentaire."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-full font-medium hover:bg-green-600 transition-colors shadow-md"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                <span>Contacter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Services