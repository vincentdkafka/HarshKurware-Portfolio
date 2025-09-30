"use client";
import React, { useRef } from "react";
import Link from "next/link";

const items1 = [
  {
    id: 1,
    img: "https://careerkarma.com/blog/wp-content/uploads/2021/11/top-coding-projects.png",
    title: "Projects",
    link: "/projects",
  },
  {
    id: 2,
    img: "https://www.flexjobs.com/blog/wp-content/uploads/2021/05/20073053/learn-skills.png",
    title: "Skills",
    link: "/skills",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/62/97/98/62979886252184dfdede090c5558022d.jpg",
    title: "About Me",
    link: "/about",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrZy-nUs9--WLEw4gTPKiGa6p2MZjfHF6xg&s",
    title: "Certification",
    link: "/certification",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/1200x/82/7f/8c/827f8c8170a5842d2560da75249117af.jpg",
    title: "UI/UX design",
    link: "/uiux",
  },
];

const items2 = [
  {
    id: 6,
    img: "https://i.pinimg.com/736x/5b/02/fa/5b02fa8529237ce3487f8aaa15bf2d10.jpg",
    title: "Blogs",
    link: "/blog",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/736x/31/e2/7a/31e27ae0044aff4bd797ea307b1c8abe.jpg",
    title: "Reads",
    link: "/reads",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/736x/59/a3/c3/59a3c331e0f479a784a2cd8405ab5292.jpg",
    title: "Contact",
    link: "/contact",
  },
  {
    id: 9,
    img: "https://i.pinimg.com/1200x/ea/13/d5/ea13d5eb1042f3eb9bc42515f6f95152.jpg",
    title: "Music",
    link: "/music",
  },
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
          className=" mx-4 absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
              <div className="relative min-w-[350px] h-[200px] bg-gray-800 text-white rounded-xl snap-center shrink-0 overflow-hidden cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
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
          className="mx-4 absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
