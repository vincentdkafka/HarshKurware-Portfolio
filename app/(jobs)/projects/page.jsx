"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Saas App",
    desc: "AI-based Saas app for all your AI work done in one place.",
    img: "/projImages/1.png",
    stack: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
    github: "https://github.com/vincentdkafka/AI-Saas-App",
  },
  {
    id: 2,
    title: "CALC-AI",
    desc: "AI Calculator – Apple-Inspired Smart Math Assistant",
    img: "/projImages/2.png",
    stack: ["Python", "React", "Typrscript"],
    github: "https://github.com/vincentdkafka/CALC-AI",
  },
  {
    id: 3,
    title: "Grow-bit AI",
    alt: "Grow-bit photo",
    desc: "AI based platform to take, grade your interview and make you ready for placements",
    img: "/images/weather.jpg",
    stack: ["Next.js", "Google Auth", "TailwindCSS", "Vapi"],
    github: "https://github.com/vincentdkafka/Growbit-AI",
  },
  {
    id: 4,
    title: "Stories App",
    desc: "A full-stack web application where users can create, view, and manage short stories",
    img: "/projImages/stories-app.png",
      stack: ["React.js", "Firebase","Typescript", "MongoDB"],
    github: "https://github.com/vincentdkafka/Stories-App-Mern",
  },
  {
    id: 5,
    title: "Google drive clone",
    desc: "Realtime Gdrive clone with 5gb storage and OTP verification",
    img: "/projImages/outerstella.png",
    stack: ["Next.js", "App-write", "TailwindCSS", "Nodejs"],
    github: "https://github.com/vincentdkafka/G-drive-clone",
  },
  {
    id: 6,
    title: "AI-Resume-Analyst",
    desc: "Your free ATS checker, Analysis and grade your resume",
    img: "/projImages/resume.png",
    stack: ["Python", "OpenAI", "Streamlit"],
    github: "https://github.com/vincentdkafka/AI-Resume-Analyst.",
  },
    {
    id: 7,
    title: "Research Assistant with LangChain",
    desc: "A research assistant application to help you generate  and help for your research papers.",
    img: "/projImages/code.png.png",
    stack: ["Python", "Langchain", "OpenAI"],
    github: "https://github.com/vincentdkafka/AI-Research-App.",
  },
];

const Page = () => {
  return (
    <section className="py-8 px-5 md:px-20 bg-black min-h-screen">
      <h2 className="text-3xl text-[#ED1C24] font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border rounded-xl shadow-md overflow-hidden ease-in-out 
             transform hover:scale-105 hover:shadow-red-500/50 hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-[24px] font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto">
              <Button asChild variant="default" className="w-full gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
