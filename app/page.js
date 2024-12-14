import React from 'react'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import Contentwithimage from './_components/Contentwithimage'
import Testimonials from './_components/Testimonials'
import Form from './_components/Form'
import Newsletter from './_components/Newsletter'
import Footer from './_components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Contentwithimage/>
      <Testimonials/>
      <Form/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home


