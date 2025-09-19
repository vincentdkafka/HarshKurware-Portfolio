"use client";
import React, { useRef } from "react";
import Link from "next/link";


const items1 = [
  { id: 1, img: "/images/job1.png", title: "Projects", desc: "React, TypeScript, Tailwind", link: "/projects" },
  { id: 2, img: "/images/job2.png", title: "Skills", desc: "Figma, Wireframes, Prototypes", link: "/skills" },
  { id: 3, img: "/images/job3.png", title: "About Me", desc: "Node.js, Express, MongoDB", link: "/about" },
  { id: 4, img: "/images/job3.png", title: "Certification", desc: "Node.js, Express, MongoDB", link: "/certification" },
  { id: 5, img: "/images/job3.png", title: "UI/UX design", desc: "Node.js, Express, MongoDB", link: "/uiux" },
];

const items2 = [
  { id: 6, img: "/images/job4.png", title: "Blogs", desc: "Python, Pandas, ML", link: "/" },
  { id: 7, img: "/images/job5.png", title: "Reads", desc: "Docker, Kubernetes, AWS", link: "/reads" },
  { id: 8, img: "/images/job6.png", title: "Contact", desc: "React Native, Expo", link: "/contact" },
  { id: 9, img: "/images/job7.png", title: "Music", desc: "Unity, C#", link: "/music" },
];

// Carousel component
const Carousel = ({ title, items }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-6">
      <h1 className="text-white text-xl font-semi-bold py-4 px-6">{title}</h1>
      <div className="relative">

        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Cards */}
        <div
          ref={containerRef}
          className="flex gap-4 px-6 mb-6 snap-x snap-mandatory overflow-hidden"
        >
          {items.map((item) => (
            <Link key={item.id} href={item.link}> 
              <div
                className="relative min-w-[350px] h-[200px] bg-gray-800 text-white rounded-xl snap-center shrink-0 overflow-hidden cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main wrapper with two carousels
const FirstCarousel = () => {
  return (
    <div className="flex flex-col -mt-4">
      <Carousel title="Today's Top Picks for Recruiter" items={items1} />
      <Carousel title="Other Things for Recruiter" items={items2} />
    </div>
  );
};

export default FirstCarousel;
