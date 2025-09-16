import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex justify-center items-center mt-5 px-4 py-4 sm:px-6 lg:px-8"
        id="Home"
      >
        <div className="w-full bg-black/5 md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 shadow-lg shadow-black/50 rounded-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-4 md:mb-5">
            Hi, I am Raja Muhammad Ali
          </h1>
          <p className="text-base sm:text-lg mb-4 md:mb-5 text-center">
            I’m a passionate web developer skilled in HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js. 
            I focus on building clean, responsive, and user-friendly websites while continuously learning 
            new tools to create modern digital experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="flex justify-center items-center mt-5 px-4 py-4 sm:px-6 lg:px-8"
        id="About"
      >
        <div className="w-full bg-black/5 md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 shadow-lg shadow-black/50 rounded-lg">
          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
            About Me
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/Hacker.png"
                alt="Picture"
                width={400}
                height={300}
                className="rounded-lg object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                Developer & Designer
              </h3>
              <p className="text-base sm:text-lg mb-4">
                With over 5 years of experience in web development, I specialize in creating dark-themed, 
                minimalist interfaces that prioritize user experience and performance. My approach combines 
                technical expertise with artistic vision, resulting in digital products that are both 
                functional and visually striking.
              </p>

              {/* Skills as badges */}
              <ul className="flex flex-wrap gap-3">
                <li className="px-4 py-2 bg-black/10 rounded-lg shadow-md shadow-black/30 text-sm sm:text-base">
                  HTML/CSS
                </li>
                <li className="px-4 py-2 bg-black/10 rounded-lg shadow-md shadow-black/30 text-sm sm:text-base">
                  Tailwind CSS
                </li>
                <li className="px-4 py-2 bg-black/10 rounded-lg shadow-md shadow-black/30 text-sm sm:text-base">
                  JavaScript
                </li>
                <li className="px-4 py-2 bg-black/10 rounded-lg shadow-md shadow-black/30 text-sm sm:text-base">
                  React
                </li>
                <li className="px-4 py-2 bg-black/10 rounded-lg shadow-md shadow-black/30 text-sm sm:text-base">
                  Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
