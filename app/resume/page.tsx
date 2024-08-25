import React from 'react';
import Image from 'next/image';

const Resume = () => {
  return (
    <main className="w-screen min-h-screen bg-gray-100 py-2 px-2 md:px-4"> {/* Top and bottom padding reduced */}
      <div
        className="relative flex flex-col items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/about3.jpg)" }}
      >
        <div className="relative max-w-lg w-full mx-auto bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg drop-shadow-md md:max-w-xl lg:max-w-2xl"> {/* Container color updated */}
          <div className="flex flex-col items-center mb-4"> {/* Bottom margin reduced */}
            <Image
              src="/about3.jpg"
              alt="Profile"
              width={80}
              height={80} // Image size reduced
              className="rounded-full"
            />
            <h1 className="text-xl font-bold mt-4 md:text-2xl text-white">Jaweria Talib</h1> {/* Font size reduced */}
            <p className="text-sm text-white md:text-base">Frontend Developer</p> {/* Font size reduced */}
          </div>

          <section className="mb-4"> {/* Bottom margin reduced */}
            <h2 className="text-md font-semibold mb-3 md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Contact Information</h2> {/* Gradient text color */}
            <ul className="list-disc ml-6 text-xs md:text-sm text-white"> {/* Font size reduced */}
              <li>Email: jaweriasheikh71@gmail.com</li>
              <li>Phone: +1234567890</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/jaweria-talib-87839b300/" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaweria</a></li>
              <li>Website: <a href="https://personal-portfolio-amber-kappa.vercel.app/" className="text-blue-500" target="_blank" rel="noopener noreferrer">www.jaweria.dev</a></li>
            </ul>
          </section>

          <section className="mb-4"> {/* Bottom margin reduced */}
            <h2 className="text-md font-semibold mb-3 md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Experience</h2> {/* Gradient text color */}
            <div className="space-y-3 text-xs md:text-sm text-white"> {/* Font size reduced */}
              <div>
                <h3 className="font-semibold text-pink-600">Frontend Developer - 1 Year Experience</h3> {/* Deep navy blue color */}
                <p className="text-gray-300">Start in Auguest-15 2023</p>
                <ul className="list-disc ml-6">
                  <li>Developed responsive web applications using React and Next.js.</li>
                  <li>Collaborated with designers and back-end developers to create seamless user experiences.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-pink-600">Web Developer Intern - Governor IT Initiative</h3>
                <p className="text-gray-300">Feb 2024 </p>
                <ul className="list-disc ml-6">
                  <li>Assisted in the development of user interfaces using HTML, CSS, and JavaScript.</li>
                  <li>Participated in code reviews and contributed to project documentation.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-4"> {/* Bottom margin reduced */}
            <h2 className="text-md font-semibold mb-3 md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Education</h2> {/* Gradient text color */}
            <div className="text-xs md:text-sm text-white"> {/* Font size reduced */}
              <h3 className="font-semibold text-pink-600">2nd Year Student Of Pre-Medical - Government Girls College</h3>
              <p className="text-gray-300">2023 - 2024</p>
            </div>
          </section>

          <section>
            <h2 className="text-md font-semibold mb-3 md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Skills</h2> {/* Gradient text color */}
            <ul className="list-disc ml-6 text-xs md:text-sm text-white"> {/* Font size reduced */}
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js</li>
              <li>Responsive Design</li>
              <li>Version Control (Git)</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;









