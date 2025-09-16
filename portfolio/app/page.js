import Image from "next/image";

export default function Home() {
  return (
    <>
     <section className="flex justify-center items-center mt-5 px-4 py-4 sm:px-6 lg:px-8" id="Home">
        <div className="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 shadow-lg shadow-black/50">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-4 md:mb-5">
            Hi, I am Raja Muhammad Ali
          </h1>
          <p className="text-base sm:text-lg mb-4 md:mb-5">I am a passionate web developer with a strong focus on building clean, modern, and 
            responsive websites. I enjoy turning ideas into functional digital experiences by 
            combining creativity with technical expertise. Skilled in technologies like HTML, CSS, 
            Tailwing CSS, JavaScript, React, and Next.js, I aim to create user-friendly and visually appealing 
            web applications. My goal is to write efficient code, deliver smooth performance 
            across all devices, and continuously learn new tools to stay up-to-date with the 
            ever-evolving web development world.</p>
        </div>
     </section>
    </>
  );
}
