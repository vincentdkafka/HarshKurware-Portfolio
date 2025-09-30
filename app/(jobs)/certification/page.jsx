"use client";
import Image from "next/image";
import React from "react";

const certifications = [
  {
    title: "Full-Stack Web Development",
    provider: "Coursera",
    link: "https://coursera.org/verify/example1",
    logo: "/logos/google.png", // store in /public/logos/
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    provider: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/example2",
    logo: "/logos/free.png",
  },
  {
    title: "React - The Complete Guide",
    provider: "Udemy",
    link: "https://udemy.com/certificate/example3",
    logo: "/logos/udemy.jpeg",
  },
  {
    title: "Python for Everybody",
    provider: "Coursera",
    link: "https://coursera.org/verify/example4",
    logo: "/logos/google.png",
  },
  {
    title: "Database Design & SQL",
    provider: "Oracle Academy",
    link: "https://oracle.com/certification/example5",
    logo: "/logos/udemy.jpeg",
  },
  {
    title: "UI/UX Design Principles",
    provider: "Google",
    link: "https://google.com/certification/example6",
    logo: "/logos/google.png",
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl text-[#ED1C24] font-bold text-center mb-12">
        📜 My Certifications
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg p-6 w-full h-44 flex items-center gap-4 hover:scale-105 hover:shadow-red-600/30 transition"
          >
            {/* Logo */}
            <div className="w-16 h-16 bg-neutral-800 flex items-center justify-center rounded-md overflow-hidden">
              {cert.logo ? (
                <Image
                  src={cert.logo}
                  alt={`${cert.provider} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full bg-black" />
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between flex-1">
              <h2 className="text-lg font-semibold">{cert.title}</h2>
              <p className="text-sm text-neutral-400">{cert.provider}</p>
              <span className="text-[#E31C24] font-medium group-hover:underline mt-2">
                View Certificate →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certification;
