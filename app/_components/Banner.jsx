import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <main className="relative w-full h-[75vh] md:h-[80vh] lg:h-[90vh] z-10">
      <Image
        src="/dustin.webp"
        alt="banner"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-8 sm:bottom-12 left-2 sm:left-4 text-left text-white px-2 sm:px-4 max-w-[95%] sm:max-w-[80%] md:max-w-[70%]">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-[40px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px]">
          Harsh Kurware - A Web
          <br className="hidden sm:block" /> Developer and Designer
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl drop-shadow-md">
          I’m a web developer and UI/UX designer who loves turning complex ideas
          into intuitive, user-friendly experiences. With a strong foundation in
          both development and design, I specialize in crafting responsive
          websites, building dynamic front-end applications, and bringing
          creative concepts to life visually. I’ve worked on everything from
          sleek React apps and TypeScript projects to AI/ML-based data
          visualization tools.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-4">
          
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="h-10 sm:h-12 w-28 sm:w-32 px-6 sm:px-8 text-sm sm:text-base bg-white text-black rounded-sm hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play-icon lucide-play mr-2"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
              Resume
            </Button>
          </Link>

          <Link href="https://www.linkedin.com/in/harshkurware22/" target="_blank" rel="noopener noreferrer">
            <Button className="h-10 sm:h-12 w-28 sm:w-32 px-6 sm:px-8 text-sm sm:text-base bg-gray-700 text-white rounded-sm hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-info-icon lucide-info mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Banner;
