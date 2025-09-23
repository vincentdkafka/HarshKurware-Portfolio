
"use client"

import React from "react";
import {
  Code,
  Server,
  Boxes,
  PenTool,
  Database,
  Cloud,
  Monitor,
  Palette,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <Code className="w-10 h-10 text-sky-500" /> },
      {
        name: "Next.js",
        icon: <Monitor className="w-10 h-10 text-black dark:text-white" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <Server className="w-10 h-10 text-green-600" />,
      },
      {
        name: "MongoDB",
        icon: <Database className="w-10 h-10 text-green-700" />,
      },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: <Boxes className="w-10 h-10 text-blue-600" /> },
      { name: "Cloud", icon: <Cloud className="w-10 h-10 text-blue-500" /> },
    ],
  },
  {
    category: "UI/UX",
    items: [
      { name: "Figma", icon: <PenTool className="w-10 h-10 text-pink-500" /> },
      {
        name: "Photoshop",
        icon: <Palette className="w-10 h-10 text-blue-400" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="space-y-12 px-6 md:px-12 py-12">
      {skills.map((skillGroup) => (
        <div key={skillGroup.category}>
          {/* Heading */}
          <h2 className="text-2xl flex center text-white font-bold mb-4">{skillGroup.category}</h2>

          {/* Netflix-style horizontal scroll */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
            {skillGroup.items.map((item) => (
              <div
                key={item.name}
                className="min-w-[150px] bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
              >
                <div className="mb-2">{item.icon}</div>
                <p className="font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
