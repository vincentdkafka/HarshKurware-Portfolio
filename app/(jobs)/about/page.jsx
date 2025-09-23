import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useForm } from "@formspree/react";


const page = () => {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-neutral-900 dark:to-neutral-950 text-center">
      {/* Profile Image */}
      <div className="relative mb-8">
        <div className="w-150 h-120 overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 mx-auto">
          <img
            src="/myphoto.jpg" // replace with your image path
            alt="My Photo"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name Floating between image and text */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
          You are with Harsh Kurware
        </h1>
      </div>

      {/* About Text */}
      <div className="max-w-3xl space-y-6 text-xl text-gray-700 dark:text-gray-300">
        <p>
          I’m a curious creator who blends{" "}
          <span className="font-semibold">design</span> and
          <span className="font-semibold"> development</span> into digital
          experiences that feel alive. My journey has taken me through the
          worlds of frontend sorcery, backend architecture, and the fine art of
          turning coffee into code.
        </p>
        <p>
          When I’m not busy debugging reality, you’ll find me sketching
          interfaces, experimenting with new frameworks, or pushing pixels until
          they behave. I believe good design isn’t just seen—it’s{" "}
          <span className="italic">felt</span>.
        </p>
        <p>
          This portfolio is more than a showcase—it’s a playground where
          creativity meets technology. Welcome to my corner of the internet.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
      {/* Black Button → Projects */}
      <Link href="/projects">
        <Button className="bg-black text-white text-xl hover:bg-neutral-800 transition rounded-lg px-10 py-4">
          View Projects
        </Button>
      </Link>

      {/* Netflix Red Button → Contact */}
      <Link href="/contact">
        <Button className="bg-red-600 text-white text-xl hover:bg-red-700 transition rounded-lg px-10 py-4">
          Contact Me
        </Button>
      </Link>
    </div>
    </div>
  );
};

export default page;
