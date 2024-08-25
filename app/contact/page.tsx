
"use client";

import React, { FormEvent } from 'react';

const Contact: React.FC = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Example with Formspree (Replace with your formspree endpoint)
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('There was a problem sending your message.');
    }
  };

  return (
    <main className="w-screen h-screen bg-gray-100">
      <div
        className="relative flex items-center justify-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/about3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
        <div className="relative max-w-lg w-full mx-auto bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg drop-shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Contact Me</h1>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full p-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;