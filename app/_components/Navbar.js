import React from 'react';
import Button from './Button';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Gadgets", href: "/Gadgets" },
  { label: "Contact", href: "#Contact" },
  { label: "About", href: "/About" },
];

function Navbar() {
  return (
    <section className="py-4 flex items-center justify-center lg:py-8">
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
        rel="stylesheet"
      />
     
      <div className="container max-w-5xl">
        <div
          className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 
          rounded-full p-2 px-4 md:pr-2 items-center"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 md:h-auto w-auto"
            >
              <path d="M13.2778 22.3182C14.1 19.2499 17.2539 16.096 20.3222 15.2737L39.4512 10.1474C42.5194 9.3251 44.3402 11.1459 43.5179 14.2141L38.3916 33.3431C37.5693 36.4114 34.4154 39.5653 31.3471 40.3875L12.2181 45.5139C9.14988 46.3362 7.32913 44.5154 8.15139 41.4471L13.2778 22.3182Z" fill="#A3E635" fillOpacity="0.5"/>
              <path d="M5.60882 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7822 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7425 26.7465 31.8964 23.6782 32.7187L4.5492 37.8451C1.48093 38.6673 -0.339816 36.8466 0.482448 33.7783L5.60882 14.6493Z" fill="#A3E635"/>
            </svg>
            <h1 className="font-bold text-3xl">QuickRent</h1>
          </div>

          {/* Navigation Links */}
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label} className="text-white hover:text-green-500">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Icon and Buttons */}
          <div className="flex justify-end items-center gap-4">
            {/* Menu Icon (visible on smaller screens) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>

            {/* Buttons */}
            <Button variant="secondary" className="hidden md:block"><a href="/Gadgets">Log In</a></Button>
            <Button variant="primary" className="hidden md:block"><a href="/sign-up">Sign Up</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
