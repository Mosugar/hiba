'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import InstagramShowcase from '../components/InstagramShowcase'
import WhatsAppSticky from '../components/WhatsAppSticky'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <InstagramShowcase />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppSticky />
    </>
  )
}