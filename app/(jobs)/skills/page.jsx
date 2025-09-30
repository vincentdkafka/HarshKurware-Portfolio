"use client";
import { SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiMysql, SiPostgresql, SiDocker, SiVercel, SiFigma, SiAdobephotoshop, SiNextdotjs } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-10 h-10 text-sky-400" /> },
    { name: "Next.Js", icon: <SiNextdotjs className="w-10 h-10 " /> },
    { name: "Python", icon: <SiPython className="w-10 h-10 text-blue-400" /> },
    
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="w-10 h-10 text-gray-300" /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-sky-600" /> },
  ],
  Deployment: [
    { name: "Docker", icon: <SiDocker className="w-10 h-10 text-sky-400" /> },
    { name: "Vercel", icon: <SiVercel className="w-10 h-10 text-white" /> },
  ],
  "UI / UX": [
    { name: "Figma", icon: <SiFigma className="w-10 h-10 text-pink-500" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="w-10 h-10 text-blue-500" /> },
  ],
};

const Skills = () => {
  return (
        <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#ED1C24]">
        My Skills
      </h1>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-[#ED1C24] pl-3">
            {category}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {items.map((skill) => (
              <div
                key={skill.name}
                className="bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col items-center justify-center gap-3 py-6 px-4 shadow-md hover:shadow-red-900/40 hover:scale-105 transition"
              >
                {skill.icon}
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
