'use client';
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  // 🔹 Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_121jcwb", // 🔹 tumhara service ID
        "template_gtglyfq", // 🔹 tumhara template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PgeF_GKrvULUUqsLm" // 🔹 tumhara public key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send ❌ Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
      {/* Hero Section */} 
      <section className="flex justify-center items-center mt-5 px-4 py-4 sm:px-6 lg:px-8" id="Home">
        <div className="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 border-l-2 border-gray-500 rounded-l-lg"> 
          <h1 className="text-xl sm:text-2xl md:text-3xl text-balance font-bold mb-4 md:mb-5"> 
            Hi, I am Raja Muhammad Ali 
          </h1> 
          <p className="text-base sm:text-lg mb-4 md:mb-5 text-justify"> I’m a passionate web developer 
            skilled in HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js. I focus on building 
            clean, responsive, and user-friendly websites while continuously learning new tools to create 
            modern digital experiences. </p> 
        </div> 
      </section> 
      
      {/* About Section */} 
      <section className="flex justify-center items-center mt-5 px-4 py-4 sm:px-6 lg:px-8" id="About"> 
        <div className="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 border-l-2 border-gray-500 rounded-l-lg"> 
          {/* Section Title */} 
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide"> 
            About Me 
          </h2> 
          {/* Grid Layout */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"> 
            {/* Image */} 
            <div className="flex justify-center"> 
              <Image 
              src="/Hacker.png" 
              alt="Picture" 
              width={300} 
              height={250} 
              className="rounded-lg object-contain" 
              /> 
            </div> 
            {/* Text */} 
            <div> 
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3"> 
                Developer & Designer 
              </h3> 
              <p className="text-base text-justify sm:text-lg mb-4"> With over 5 years of experience 
                in web development, I specialize in creating dark-themed, minimalist interfaces that 
                prioritize user experience and performance. My approach combines technical expertise 
                with artistic vision, resulting in digital products that are both functional and 
                visually striking. </p> 
              </div> 
            </div> 
          </div> 
        </section> 

        
  {/* Skills Section */} 
      <section className="flex justify-center items-center mt-5 px-4 py-4 sm:px-6 lg:px-8" id="Skills"> 
        <div className="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 border-l-2 border-gray-500 rounded-l-lg"> 
          {/* Section Title */} 
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide"> 
            My Skills 
          </h2> 
          {/* Grid Layout */} 
          <div className="w-full md:w-full sm:w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"> 
             <ul>
              <li className="px-4 mb-4 text-center bg-gradient-to-tl from-gray-100 to-gray-400  py-2 rounded-lg shadow-md shadow-black/60 text-sm text-gray-700 font-bold sm:text-base">
              HTML
              </li>
              <li className="px-4 mb-4 text-center bg-gradient-to-tl from-gray-100 to-gray-400  py-2 rounded-lg shadow-md shadow-black/60 text-sm text-gray-700 font-bold sm:text-base">
              CSS/Tailwind CSS
              </li>
              <li className="px-4 mb-4 text-center bg-gradient-to-tl from-gray-100 to-gray-400  py-2 rounded-lg shadow-md shadow-black/60 text-sm text-gray-700 font-bold sm:text-base">
              Bootstrap
              </li>
             </ul>
             <ul>
              <li className="px-4 mb-4 text-center bg-gradient-to-tl from-gray-100 to-gray-400  py-2 rounded-lg shadow-md shadow-black/60 text-sm text-gray-700 font-bold sm:text-base">
              JavaScript
              </li>
              <li className="px-4 mb-4 text-center bg-gradient-to-tl from-gray-100 to-gray-400  py-2 rounded-lg shadow-md shadow-black/60 text-sm text-gray-700 font-bold sm:text-base">
              Python
              </li>
              <li className="px-4 mb-4 text-center bg-gradient-to-tl from-gray-100 to-gray-400  py-2 rounded-lg shadow-md shadow-black/60 text-sm text-gray-700 font-bold sm:text-base">
              Next.js
              </li>
             </ul>
          </div> 
        </div> 
      </section> 
        
        {/* Projects Section */} 
        <section id="Projects" className="flex justify-center items-center mt-10 px-4 sm:px-6 lg:px-8" > 
          <div className="w-full md:w-5/6 lg:w-3/4 backdrop-blur-sm p-6 sm:p-8 md:p-10 border-l-2 border-gray-500 rounded-lg"> 
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide"> 
            My Projects 
          </h2> 
          {/* Grid for project cards */} 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> 
            {/* Project Card 1 */} 
            <div className="group rounded-xl shadow-lg shadow-black/40 overflow-hidden"> 
            <div className="overflow-hidden"> 
              <Image 
              src="/TheCarClub.png" 
              alt="Project 1" 
              width={600} 
              height={400} 
              className="object-cover w-full h-56 sm:h-64 md:h-72 transition-transform duration-300 group-hover:scale-110" 
              /> 
            </div> 
            <div className="p-4 sm:p-6"> 
              <h3 className="text-lg sm:text-xl font-bold mb-2"> 
                The Car Club 
              </h3> 
              <p className="text-sm sm:text-base mb-4"> 
                A modern car enthusiast platform where users can explore car details, compare 
                models, and join a community of auto lovers. 
              </p> 
              <div className="flex gap-4"> 
                <a href="https://github.com/Coding-Raja/The-Car-Club" target="_blank" className="text-blue-800 font-medium hover:underline" > 
                  GitHub 
                </a> 
                <a href="https://the-car-club.vercel.app/" target="_blank" className="text-blue-800 font-medium hover:underline" > 
                  Live Demo 
                </a>  
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section>

      {/* Contact Section */}
      <section
        id="Contact"
        className="flex justify-center items-center mt-10 mb-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full md:w-5/6 lg:w-3/4 backdrop-blur-sm p-6 sm:p-8 md:p-10 border-l-2 border-gray-500 rounded-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
            Get In Touch
          </h2>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-red-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40 text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-red-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40 text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write Your Message Here"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-red-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40 text-sm sm:text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 md:w-1/3 bg-black/90 text-white cursor-pointer font-medium py-2 px-4 rounded-lg shadow-lg shadow-black/70 hover:shadow-xl hover:shadow-black/90 duration-500"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Status Message */}
            {status && (
              <p className="mt-4 text-center font-medium text-gray-700">
                {status}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
