import React from 'react';
import Image from "next/image";

const Projects = () => {
  // Projects data array
  const projects = [
    {
      title: "Modern Nextjs Website",
      text: "An Animated website with the latest tech",
      src: "/mywebsite.webp",
      height: 350,
    },
    {
      title: "Joke Generator",
      text: "An Animated website with the latest tech",
      src: "/jokegenerator.webp",
      height: 350,
    },
    {
      title: "Adventure Game",
      text: "An Animated website with the latest tech",
      src: "/Advanturegame.jpg",
      height: 350,
    },
    {
      title: "To-Do List",
      text: "An Animated website with the latest tech",
      src: "/todolist.png",
      height: 200,
    },
    {
      title: "Student Management System",
      text: "An Animated website with the latest tech",
      src: "/studentmanagementsystem.jpg",
      height: 400,
    },
    {
      title: "Currency Converter",
      text: "An Animated website with the latest tech",
      src: "/currencyconvertor.jpg",
      height: 350,
    },
  ];

  return (
    <main className="w-screen min-h-screen relative">
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(/about3.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center w-full h-full p-6">
          <h4 className="text-4xl md:text-5xl text-white font-semibold drop-shadow-lg mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              My Projects
            </span>
          </h4>

          <p className='w-4/5 text-center text-lg md:text-xl text-white bg-opacity-60 p-4 rounded-md bg-gray-800 drop-shadow-md'>
            Here are some of my projects using HTML, CSS, and TypeScript
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className='relative overflow-hidden rounded-lg shadow-lg w-full group'
              >
                <div className='relative h-full transform transition-transform duration-300 ease-in-out group-hover:scale-105'>
                  <Image 
                    src={project.src}
                    alt={project.title}
                    layout='responsive'
                    width={700}
                    height={project.height}
                    className='object-cover'
                  />
                  <div className='absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out group-hover:bg-opacity-80'>
                    <h5 className='text-md md:text-lg font-semibold mb-1'>{project.title}</h5>
                    <p className='text-xs md:text-sm'>{project.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;