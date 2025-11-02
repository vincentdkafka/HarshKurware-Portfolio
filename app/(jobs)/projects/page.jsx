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
    desc: "An AI-powered SaaS app using the PERN stack with OpenAI and ClipDrop integrations, offering tools like image generation and resume review with a responsive React + Tailwind UI and secure Clerk authentication.",
    img: "/projImages/1.png",
    stack: ["React.js", "Node.js", "PostgreSQL", "Express.js", "Clerk"],
    github: "https://github.com/vincentdkafka/AI-Saas-App",
  },
  {
    id: 2,
    title: "CALC-AI",
    desc: "An intelligent AI-powered calculator built with Python and TypeScript that understands math problems in text or image form, solves them symbolically and numerically, and displays results beautifully with MathJax.",
    img: "/projImages/2.png",
    stack: ["Python", "React", "Typrscript", "Tailwind","Axios"],
    github: "https://github.com/vincentdkafka/CALC-AI",
  },
  {
    id: 3,
    title: "Jobfit-AI",
    alt: "Grow-bit photo",
    desc: "An AI-powered mock interview app built with Next.js, Tailwind CSS, Shadcn UI, and Google Auth, featuring AI-driven voice interviews, real-time grading, and performance feedback.",
    img: "/projImages/3.png",
    stack: ["Next.js", "Google Auth", "TailwindCSS", "Vapi"],
    github: "https://github.com/vincentdkafka/jobfit-AI",
  },
  {
    id: 4,
    title: "Stories App",
    desc: "A full-stack stories web app built with the MERN stack and Firebase authentication, allowing users to create, publish, and explore short stories with a secure, responsive, and modern UI.",
    img: "/projImages/stories-app.png",
    stack: ["React.js", "Firebase", "Typescript", "MongoDB"],
    github: "https://github.com/vincentdkafka/Stories-App-Mern",
  },
  {
    id: 5,
    title: "Outerstella - Google Drive Clone",
    desc: "OuterStella lets you upload, organize, and share files effortlessly, with a sleek, responsive interface powered by the latest web technologies with 100mb free storage and OTP verification",
    img: "/projImages/outerstella.png",
    stack: ["Next.js", "App-write", "TailwindCSS", "Nodejs"],
    github: "https://github.com/vincentdkafka/G-drive-clone",
  },
  {
    id: 6,
    title: "AI-Resume-Analyst",
    desc: "An AI-powered resume analysis tool built with Streamlit and OpenAI GPT-3.5 that provides personalized feedback on content, skills, and experience, tailored to specific job roles for improved opportunities.",
    img: "/projImages/resume.png",
    stack: ["Python", "OpenAI", "Streamlit"],
    github: "https://github.com/vincentdkafka/AI-Resume-Analyst.",
  },
  {
    id: 7,
    title: "Research Assistant with LangChain",
    desc: "An AI research assistant built with LangChain and OpenAI GPT-3.5 that generates structured research responses, sourcing information from tools like search engines and Wikipedia to provide summaries with references.",
    img: "/projImages/code.png.png",
    stack: ["Python", "Langchain", "OpenAI", "uv"],
    github: "https://github.com/vincentdkafka/AI-Research-App.",
  },
  {
    id: 8,
    title: "Better Website Clone",
    desc: "A fully responsive frontend replica of the BETTER website built with Next.js, Shadcn UI, Tailwind CSS, and Lucide React, accurately reproducing the design and functionality of the original site..",
    img: "/projImages/4.png",
    stack: ["Nextjs", "TailwindCSS", "Nodejs", "shadcn-ui"],
    github: "https://github.com/vincentdkafka/better-demo-assignment",
  },
];

const Page = () => {
  return (
    <section className="py-8 px-5 md:px-20 bg-black min-h-screen">
      <h2 className="text-3xl text-[#ED1C24] font-bold mb-10 text-center">
        My Projects
      </h2>
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
              <h3 className="text-[24px] font-semibold mb-2">
                {project.title}
              </h3>
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
