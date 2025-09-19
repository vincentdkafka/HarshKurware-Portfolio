"use client"; 
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-4 transition-colors duration-300
        ${scrolled ? "bg-black" : "bg-gradient-to-b from-black/70 to-black/0"}
      `}
    >
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/logo3.png"
            alt="Logo"
            width={200}
            height={150}
            className="cursor-pointer"
          />
        </Link>

        <ul className="flex gap-8 font-medium text-white">
          <Link href="/"><li className="cursor-pointer hover:text-red-700">Home</li></Link>
          <Link href="/projects"><li className="cursor-pointer hover:text-red-700">Projects</li></Link>
          <Link href="/services"><li className="cursor-pointer hover:text-red-700">Services</li></Link>
          <Link href="/about"><li className="cursor-pointer hover:text-red-700">About</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:text-red-700">Hire me</li></Link>
        </ul>
      </div>

      <div>
        <Image
          src="/profile.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border-2 border-gray-200"
        />
      </div>
    </nav>
  );
};

export default Navbar;
