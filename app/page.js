import React from 'react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import { AnimatedTestimonialsDemo } from './_components/Testimonials';
import ThreeDCardDemo from '/app/_components/card';
import { FocusCardsDemo } from './_components/Gridimg';
import Plans from '/app/_components/Plans';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <section className="text-6xl font-bold flex items-center justify-center my-8">
        <h2>Key Features</h2>
      </section>
      <ThreeDCardDemo />

      <section className="bg-black flex flex-col items-center justify-center p-8 gap-8 ">
        <h2 className="text-6xl text-white font-bold">Trending Gadgets</h2>
        <FocusCardsDemo />
      </section>
    <br/>
    
    <section className="text-6xl font-bold flex items-center justify-center">
    <h2 className="hover:text-lime-500">Our Plans</h2>
    </section>

    <section className="flex items-center justify-center text-gray-500 pt-5">
    <p>Choose a plan that fits your needs!</p>
    </section>

    <Plans/>
    <br/>
      <section className="text-6xl font-bold flex items-center justify-center ">
        <h2 className="hover:text-lime-500">Testimonials</h2>
      </section>
      <AnimatedTestimonialsDemo />

    </div>
  );
}

export default Home;
