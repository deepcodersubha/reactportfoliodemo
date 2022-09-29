import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Work from '../components/Work'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>

      {/* So the Navbar component will be imported to Home page, which will be again imported to App.js and finally be rendered */}
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
