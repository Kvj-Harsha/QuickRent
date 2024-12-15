import React from 'react';
import Button from './Button';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

function Navbar() {
  return (
    <section className="py-4 flex items-center justify-center lg:py-8">
      <div className="container max-w-5xl">
        <div
          className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 
          rounded-full p-2 px-4 md:pr-2 items-center"
        >
          {/* Logo */}
          <div>
            <svg
              width="146"
              height="48"
              viewBox="0 0 146 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 md:h-auto w-auto"
            >
              <path d="M13.2778 22.3182C14.1 19.2499 17.2539 16.096 20.3222 15.2737L39.4512 10.1474C42.5194 9.3251 44.3402 11.1459 43.5179 14.2141L38.3916 33.3431C37.5693 36.4114 34.4154 39.5653 31.3471 40.3875L12.2181 45.5139C9.14988 46.3362 7.32913 44.5154 8.15139 41.4471L13.2778 22.3182Z" fill="#A3E635" fillOpacity="0.5"/>
              <path d="M5.60882 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7822 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7425 26.7465 31.8964 23.6782 32.7187L4.5492 37.8451C1.48093 38.6673 -0.339816 36.8466 0.482448 33.7783L5.60882 14.6493Z" fill="#A3E635"/>
              <path d="M61.5243 30.2132H67.7963V33.9092H56.7363V14.2532H61.5243V30.2132Z" fill="white"/>
              <path d="M68.5681 26.0692C68.5681 24.4638 68.8667 23.0545 69.4641 21.8412C70.0801 20.6278 70.9107 19.6945 71.9561 19.0412C73.0014 18.3878 74.1681 18.0612 75.4561 18.0612C76.5574 18.0612 77.5187 18.2852 78.3401 18.7332C79.1801 19.1812 79.8241 19.7692 80.2721 20.4972V18.2852H85.0601V33.9092H80.2721V31.6972C79.8054 32.4252 79.1521 33.0132 78.3121 33.4612C77.4907 33.9092 76.5294 34.1332 75.4281 34.1332C74.1587 34.1332 73.0014 33.8065 71.9561 33.1532C70.9107 32.4812 70.0801 31.5385 69.4641 30.3252C68.8667 29.0932 68.5681 27.6745 68.5681 26.0692ZM80.2721 26.0972C80.2721 24.9025 79.9361 23.9598 79.2641 23.2692C78.6107 22.5785 77.8081 22.2332 76.8561 22.2332C75.9041 22.2332 75.0921 22.5785 74.4201 23.2692C73.7667 23.9412 73.4401 24.8745 73.4401 26.0692C73.4401 27.2638 73.7667 28.2158 74.4201 28.9252C75.0921 29.6158 75.9041 29.9612 76.8561 29.9612C77.8081 29.9612 78.6107 29.6158 79.2641 28.9252C79.9361 28.2345 80.2721 27.2918 80.2721 26.0972Z" fill="white"/>
              <path d="M103.924 18.2852L94.124 41.3292H88.972L92.556 33.3772L86.2 18.2852H91.548L95.16 28.0572L98.744 18.2852H103.924Z" fill="white"/>
              <path d="M119.823 25.8452C119.823 26.2932 119.795 26.7598 119.739 27.2452H108.903C108.978 28.2158 109.286 28.9625 109.827 29.4852C110.387 29.9892 111.069 30.2412 111.871 30.2412C113.066 30.2412 113.897 29.7372 114.363 28.7292H119.459C119.198 29.7558 118.722 30.6798 118.031 31.5012C117.359 32.3225 116.51 32.9665 115.483 33.4332C114.457 33.8998 113.309 34.1332 112.039 34.1332C110.509 34.1332 109.146 33.8065 107.951 33.1532C106.757 32.4998 105.823 31.5665 105.151 30.3532C104.479 29.1398 104.143 27.7212 104.143 26.0972C104.143 24.4732 104.47 23.0545 105.123 21.8412C105.795 20.6278 106.729 19.6945 107.923 19.0412C109.118 18.3878 110.49 18.0612 112.039 18.0612C113.551 18.0612 114.895 18.3785 116.071 19.0132C117.247 19.6478 118.162 20.5532 118.815 21.7292C119.487 22.9052 119.823 24.2772 119.823 25.8452ZM114.923 24.5852C114.923 23.7638 114.643 23.1105 114.083 22.6252C113.523 22.1398 112.823 21.8972 111.983 21.8972C111.181 21.8972 110.499 22.1305 109.939 22.5972C109.398 23.0638 109.062 23.7265 108.931 24.5852H114.923Z" fill="white"/>
              <path d="M126.577 20.8892C127.137 20.0305 127.837 19.3585 128.677 18.8732C129.517 18.3692 130.451 18.1172 131.477 18.1172V23.1852H130.161C128.967 23.1852 128.071 23.4465 127.473 23.9692C126.876 24.4732 126.577 25.3692 126.577 26.6572V33.9092H121.789V18.2852H126.577V20.8892Z" fill="white"/>
              <path d="M139.562 34.1332C138.199 34.1332 136.986 33.8998 135.922 33.4332C134.858 32.9665 134.018 32.3318 133.402 31.5292C132.786 30.7078 132.441 29.7932 132.366 28.7852H137.098C137.154 29.3265 137.406 29.7652 137.854 30.1012C138.302 30.4372 138.853 30.6052 139.506 30.6052C140.103 30.6052 140.561 30.4932 140.878 30.2692C141.214 30.0265 141.382 29.7185 141.382 29.3452C141.382 28.8972 141.149 28.5705 140.682 28.3652C140.215 28.1412 139.459 27.8985 138.414 27.6372C137.294 27.3758 136.361 27.1052 135.614 26.8252C134.867 26.5265 134.223 26.0692 133.682 25.4532C133.141 24.8185 132.87 23.9692 132.87 22.9052C132.87 22.0092 133.113 21.1972 133.598 20.4692C134.102 19.7225 134.83 19.1345 135.782 18.7052C136.753 18.2758 137.901 18.0612 139.226 18.0612C141.186 18.0612 142.726 18.5465 143.846 19.5172C144.985 20.4878 145.638 21.7758 145.806 23.3812H141.382C141.307 22.8398 141.065 22.4105 140.654 22.0932C140.262 21.7758 139.739 21.6172 139.086 21.6172C138.526 21.6172 138.097 21.7292 137.798 21.9532C137.499 22.1585 137.35 22.4478 137.35 22.8212C137.35 23.2692 137.583 23.6052 138.05 23.8292C138.535 24.0532 139.282 24.2772 140.29 24.5012C141.447 24.7998 142.39 25.0985 143.118 25.3972C143.846 25.6772 144.481 26.1438 145.022 26.7972C145.582 27.4318 145.871 28.2905 145.89 29.3732C145.89 30.2878 145.629 31.1092 145.106 31.8372C144.602 32.5465 143.865 33.1065 142.894 33.5172C141.942 33.9278 140.831 34.1332 139.562 34.1332Z" fill="white"/>
            </svg>
          </div>

          {/* Navigation Links */}
          
          <div className="lg:flex justify-center items-center hidden">
          <nav className="flex gap-6 font-medium">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label} className=" ">
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
              width="24"
              height="24"
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
            <Button variant="secondary" className="hidden md:block"><a href="/Dashboard">Log In</a></Button>
            <Button variant="primary" className="hidden md:block">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
