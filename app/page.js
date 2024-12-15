import React from 'react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import { AnimatedTestimonialsDemo } from './_components/Testimonials';
import ThreeDCardDemo from '/app/_components/card';
import { FocusCardsDemo } from './_components/Gridimg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <section className="text-6xl font-bold flex items-center justify-center my-8">
        <h2>Key Features</h2>
      </section>
      <ThreeDCardDemo />

      <section className="flex flex-col items-center justify-center my-8">
        <h2 className="text-6xl font-bold">Trending Gadgets</h2>
        <FocusCardsDemo />
      </section>

      <section className="text-6xl font-bold flex items-center justify-center my-8">
        <h2>Testimonials</h2>
      </section>
      <AnimatedTestimonialsDemo />
    </div>
  );
}

export default Home;
