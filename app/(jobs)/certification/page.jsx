"use client";
import Image from "next/image";
import React from "react";

const certifications = [
  {
    title: "Full-Stack Web Development",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-ab268a0d-b1f6-49bc-9466-585019b510cb/",
    logo: "/logos/udemy.jpg",
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/vincentdkafka/responsive-web-design",
    logo: "/logos/free.png",
  },
  {
    title: "Front End Development Libraries",
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/vincentdkafka/front-end-development-libraries",
    logo: "/logos/free.png",
  },
  {
    title: "Building LLM Applications With Prompt Engineering",
    provider: "Nvidia",
    link: "https://learn.nvidia.com/certificates?id=cpSxTQ1LTEyBstOAvVyBEw",
    logo: "/logos/final.png",
  },
  {
    title: "Deolitte - Cyber Job Simulation",
    provider: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_ZfoLDtcrZJa3WgEJY_1749108142889_completion_certificate.pdf",
    logo: "/logos/forage.jpg",
  },
  {
    title: "Deolitte - Data Analytics Job Simulation",
    provider: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_ZfoLDtcrZJa3WgEJY_1749111590256_completion_certificate.pdf",
    logo: "/logos/forage.jpg",
  },
  {
    title:
      "Build Real World AI Applications with Gemini and Imagen Skill Badge",
    provider: "Google Cloud",
    link: "https://www.credly.com/badges/70364bad-af3b-4c91-9f7b-169d8c8e14f7/linked_in_profile",
    logo: "/logos/google.png",
  },
  {
    title: "Explore Generative AI with the Vertex AI Gemini API",
    provider: "Google Cloud",
    link: "https://www.credly.com/badges/4e707226-c3db-43a2-83eb-1dba5a1dd391/linked_in_profile",
    logo: "/logos/google.png",
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl text-[#ED1C24] font-bold text-center mb-12">
        My Certifications
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
