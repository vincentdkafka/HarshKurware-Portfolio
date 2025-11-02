import React from "react";
import Image from "next/image";

const Experience = () => {
  const exCard = [
    {
      title: "Web Development Intern",
      company: "Bluestocks Fintech",
      duration: "August 2025 - September 2025",
      logo: "/logos/bluestocks.jpg",
      link: "https://www.linkedin.com/in/harshkurware22/overlay/1759847715516/single-media-viewer/?profileId=ACoAAFBueLsBL6oHbKna0-5HrYm0VCpcBgdj13I",
    },
    {
      title: "UI/UX Designer and Graphic Designer Intern",
      company: "Realseeds",
      duration: "May 2025 - August 2025",
      logo: "/logos/realseeds.jpg",
      link: "https://www.linkedin.com/in/harshkurware22/overlay/experience/2655392795/multiple-media-viewer/?profileId=ACoAAFBueLsBL6oHbKna0-5HrYm0VCpcBgdj13I&treasuryMediaId=1756476498411",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl text-[#ED1C24] font-bold text-center mb-12">
        My Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {exCard.map((exp, index) => (
          <a
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#111] rounded-2xl border border-[#222] overflow-hidden 
                       transform transition-transform duration-300 hover:scale-105
                       no-underline focus:outline-none"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden border border-[#ED1C24]">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                {exp.title}
              </h2>
              <p className="text-[#ED1C24] font-medium mb-1">{exp.company}</p>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
              <p className="font-medium group-hover:underline mt-2 hover:text-[#ED1C24]">View Certificate → </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
