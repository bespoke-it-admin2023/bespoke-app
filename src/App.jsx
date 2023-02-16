import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Hero from './components/Hero'
import styles from './style'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'

function App() {

  return (
    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
          <Navbar />
      </div>

      <div className={`${styles.flexStart}`}>
        <Hero />
      </div>
      <div>
        <AboutUs />
        <OurServices />
      </div>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  )
}

export default App
