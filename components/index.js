import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppSticky from '../components/WhatsAppSticky'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Hiba Guelida - Pristine Dental Center Kenitra</title>
        <meta name="description" content="Votre dentiste de confiance à Kenitra. Dr. Hiba Guelida vous accompagne avec professionnalisme pour tous vos soins dentaires." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppSticky />
    </>
  )
}