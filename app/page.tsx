"use client"; // Ensure this is at the top

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const roles: string[] = ["Programmer", "Frontend Developer", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center text-white relative" style={{ backgroundImage: "url('/bg-5.jpg')" }}>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col lg:flex-row items-center lg:justify-between w-full px-8 lg:px-20">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 mt-8 sm:mt-12 md:mt-16 lg:mt-0 space-y-4 lg:space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse">
            Jaweria Talib
          </h1>

          {/* Animated Text */}
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white animate-bounce">
            {roles[textIndex]}
          </p>

          {/* Description Paragraph */}
          <p className="text-base md:text-lg lg:text-xl mb-4 p-4 bg-gray-800 bg-opacity-60 rounded-lg drop-shadow-md">
            Passionate about creating visually stunning and highly functional web applications. Experienced in HTML, CSS, JavaScript, and modern frameworks. Dedicated to continuous learning and pushing the boundaries of web development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="https://www.linkedin.com/in/jaweria-talib-87839b300/" className="border-red-500 border-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors duration-300">
              LinkedIn
            </Link>
            <Link href="/contact" className="border-blue-500 border-2 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-[-3rem] sm:mt-[-4rem] md:mt-[-5rem] lg:mt-0">
          <img
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-3/4 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-x-3 hover:scale-105 hover:shadow-xl hover:border-4 hover:border-white"
            src="/file(2).png"
            alt="Jaweria Talib"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // Subtle glow effect
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;