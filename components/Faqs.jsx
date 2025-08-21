import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      question: "Les traitements sont-ils douloureux ?",
      answer: "Nous utilisons des techniques modernes d'anesthésie locale pour assurer votre confort. La plupart de nos patients ne ressentent aucune douleur pendant les soins. Dr. Hiba prend le temps d'expliquer chaque étape et s'assure que vous êtes parfaitement à l'aise."
    },
    {
      question: "Combien coûtent les appareils dentaires ?",
      answer: "Le coût varie selon le type d'appareil et la complexité du traitement. Nous proposons différentes options (métal, céramique, invisibles) adaptées à tous les budgets. Une consultation permettra d'établir un devis personnalisé avec un plan de paiement flexible."
    },
    {
      question: "À quelle fréquence faut-il consulter ?",
      answer: "Nous recommandons une visite de contrôle tous les 6 mois pour maintenir une bonne santé bucco-dentaire. Cette fréquence peut être ajustée selon vos besoins spécifiques et votre état de santé dentaire."
    },
    {
      question: "Acceptez-vous les urgences dentaires ?",
      answer: "Oui, Dr. Hiba prend en charge les urgences dentaires. Nous disposons de créneaux réservés pour les situations urgentes comme les douleurs intenses, traumatismes ou infections. Contactez-nous au 0530-220071 pour une prise en charge rapide."
    },
    {
      question: "Le blanchiment dentaire est-il sûr ?",
      answer: "Absolument. Nous utilisons des produits certifiés et des techniques éprouvées. Le blanchiment professionnel en cabinet est plus sûr et plus efficace que les solutions maison. Dr. Hiba évalue d'abord l'état de vos dents pour s'assurer que le traitement vous convient."
    },
    {
      question: "Combien de temps durent les implants dentaires ?",
      answer: "Avec une bonne hygiène bucco-dentaire et des visites régulières, les implants dentaires peuvent durer toute une vie. Le taux de succès est supérieur à 95%. Dr. Hiba vous expliquera les soins post-opératoires pour optimiser la durabilité de votre implant."
    },
    {
      question: "Prenez-vous en charge les enfants ?",
      answer: "Oui, nous accueillons les patients de tous âges. Dr. Hiba a une approche particulièrement douce avec les enfants pour leur donner confiance et créer une expérience positive. Nous recommandons la première visite vers 3-4 ans."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-dental-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-dental-pink px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4 text-dental-blue" />
            <span className="text-sm font-medium text-dental-blue">Questions Fréquentes</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Vos questions, nos réponses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur nos soins dentaires
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-dental-blue" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-dental-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-dental-blue" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Notre équipe est là pour répondre à toutes vos préoccupations. 
              N'hésitez pas à nous contacter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Nous contacter
              </button>
              <button className="btn-secondary">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Faqs