import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <main className="w-screen h-auto min-h-screen relative">
      <div className="relative w-full h-auto bg-cover bg-center" style={{ backgroundImage: "url(/about3.jpg)" }}>
        <div className='absolute inset-0 bg-black opacity-50'></div> {/* Overlay for better text visibility */}
        <div className='relative flex flex-col justify-center items-center gap-6 p-6 text-center'>
          <h4 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Development
            </span>
          </h4>
          
          <p className='w-full md:w-4/5 lg:w-3/5 text-sm md:text-base lg:text-xl text-white bg-opacity-60 p-4 rounded-md bg-gray-800 drop-shadow-md'>
            Passionate web developer with expertise in building responsive, scalable, and secure web applications. Skilled in HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue. Proficient in server-side programming with languages like Java, Python, and Ruby. Proven ability to design and implement efficient databases and APIs.
          </p>
          
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-6'>
            <img 
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300' 
              src="https://i0.wp.com/leadwebpraxis.com/wp-content/uploads/2021/09/The-Difference-Between-Web-Designer-and-Web-Developer.jpg?resize=700%2C525&ssl=1" 
              alt="Web Development Image 1" 
            />
            <img 
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300' 
              src="https://www.hubspot.com/hs-fs/hubfs/Web%20Design%20vs%20Web%20Development%20(2)%20copy%202.webp?width=700&height=525&name=Web%20Design%20vs%20Web%20Development%20(2)%20copy%202.webp" 
              alt="Web Development Image 2" 
            />
            <img 
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300' 
              src="https://usa-pk-website.ams3.digitaloceanspaces.com/storage/LVdhWpiU7rtP6OU.jpg" 
              alt="Web Development Image 3" 
            />
          </div>
          
          <Link href="https://github.com/JAWERIA-SHEIKH9898">
  <button className='border-red-500 border-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 mt-4'>
    GitHub
  </button>
</Link>
        </div>
      </div>
     </main>
  );
};

export default About;