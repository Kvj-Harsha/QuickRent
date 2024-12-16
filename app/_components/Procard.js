"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import GitHub, LinkedIn, and Mail icons
import dynamic from 'next/dynamic';

// Dynamically import Framer Motion with ssr: false to disable server-side rendering
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

function Procard() {
  const profileData = [
    {
      name: "K V Jaya Harsha",
      description: "A passionate tech enthusiast and Graphic Designer. Exploring the world and learning every day.",
      imageUrl: "/harsha.png", // Replace with actual image URL
      socialLinks: {
        github: "https://github.com/Kvj-Harsha",
        linkedin: "https://linkedin.com/in/kvjharsha",
        mail: "mailto:cs23b1034@iiitr.ac.in",
      },
      tags: ["Project Lead", "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "UI/UX", "React Native", "Firebase", "Python"], // Example tags
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-center text-white hover:neon-text mb-8">
        Contributor
      </h1>

      {/* Profile Cards */}
      <div className="p-10 flex flex-col items-center justify-center gap-8">
        {profileData.map((profile, index) => (
          <MotionDiv
            key={index}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm p-6 relative h-[30rem] rounded-lg"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: {
                scale: 1,
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', // No shadow initially
              },
              hover: {
                scale: 1.05,
                boxShadow: '0px 0px 20px 4px rgba(0, 120, 255, 1)', // Blue neon glow on hover
                transition: {
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 150,
                },
              },
            }}
          >
            {/* Profile Image */}
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="rounded-full w-40 h-40 object-cover border-2 border-black dark:border-white mb-4"
            />

            {/* Profile Name */}
            <h2 className="text-xl text-white font-semibold mb-2">{profile.name}</h2>

            {/* Profile Description */}
            <p className="text-center text-sm text-gray-400 mb-4">
              {profile.description}
            </p>

            {/* Tags */}
            <div className="flex justify-center items-center flex-wrap gap-2 mb-4">
              {profile.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`border px-3 py-1 text-xs font-semibold rounded-md ${
                    tag === "Project Lead"
                      ? "bg-blue-500 text-white"
                      : "border-white text-white"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {Object.keys(profile.socialLinks).map((key, i) => (
                <a
                  key={i}
                  href={profile.socialLinks[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  {key === "github" && <FaGithub className="h-6 w-6" />}
                  {key === "linkedin" && <FaLinkedin className="h-6 w-6" />}
                  {key === "mail" && <FaEnvelope className="h-6 w-6" />}
                </a>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}

export default Procard;
