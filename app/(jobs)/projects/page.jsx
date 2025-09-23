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
    desc: "AI-based Saas app for all your work done in one plce.",
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
    title: "Weather Dashboard",
    desc: "Real-time weather data using OpenWeather API.",
    img: "/images/weather.jpg",
    stack: ["React", "Chart.js", "API"],
    github: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    desc: "Full-stack e-commerce store with payment integration.",
    img: "/images/ecommerce.jpg",
    stack: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com/yourusername/project4",
  },
  {
    id: 5,
    title: "Chat Application",
    desc: "Real-time chat with WebSocket and authentication.",
    img: "/images/chat.jpg",
    stack: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/yourusername/project5",
  },
  {
    id: 6,
    title: "Task Manager",
    desc: "A Kanban-style task management system.",
    img: "/images/task.jpg",
    stack: ["React", "Redux", "Firebase"],
    github: "https://github.com/yourusername/project6",
  },
];

const Page = () => {
  return (
    <section className="py-8 px-5 md:px-20 bg-black min-h-screen">
      <h2 className="text-3xl text-white font-bold mb-10 text-center">My Projects</h2>
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
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
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
