import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <main className="relative w-full h-[75vh] z-10">
      <Image
        src="/stgif.gif"
        alt="banner"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-12 left-4 text-left text-white px-4">
        <h1 className="text-5xl font-bold drop-shadow-lg leading-[50px]">
          Harsh Kurware - A Web<br /> Developer 
          and Designer
        </h1>
        <p className="mt-4 text-lg max-w-8/12 drop-shadow-md">
          I’m a web developer and UI/UX designer who loves turning complex ideas
          into intuitive, user-friendly experiences. With a strong foundation in
          both development and design, I specialize in crafting responsive
          websites, building dynamic front-end applications, and bringing
          creative concepts to life visually. I’ve worked on everything from
          sleek React apps and TypeScript projects to AI/ML-based data
          visualization tools.
        </p>

        <div className="flex gap-4 mt-4">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="h-12 w-32 px-8 text-base bg-white text-black rounded-sm hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play-icon lucide-play"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
              Resume
            </Button>
          </Link>

          <Link href="https://www.linkedin.com/in/harshkurware22/">
            <Button className=" h-12 w-32 px-8 text-base bg-gray-700 text-white rounded-sm hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-info-icon lucide-info"
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
