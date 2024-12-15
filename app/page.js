import React from 'react'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import { AnimatedTestimonialsDemo } from './_components/Testimonials'
import ThreeDCardDemo from './_components/card'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="text-6xl font-bold flex items-center justify-center">Key Features</div>

      <ThreeDCardDemo />
      <AnimatedTestimonialsDemo />
    </div>
  )
}

export default Home
