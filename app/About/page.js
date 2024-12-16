import React from 'react';
import Navbar from '../_components/Navbar';
// import Heroabout from '../_components/Heroabout';
import { TextHoverEffectDemo } from '../_components/greattext';
import Procard from '../_components/Procard';
// import Newcard from '../_components/Newcard';

// import Music from '../_components/Music'

function About() {
  return (
    <div className="">
      
      <Navbar/>      
       <TextHoverEffectDemo />
      {/* New Card Component */}
      {/* <Newcard /> */}
      
      {/* <div className="flex items-center justify-center min-h-screen bg-[#111827]">
      </div> */}
      <Procard />


   
    </div>
  );
}

export default About;
