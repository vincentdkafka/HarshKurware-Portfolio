"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 transition-colors duration-300
        ${scrolled ? "bg-black" : "bg-gradient-to-b from-black/70 to-black/0"}
      `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4 sm:gap-8">
        <Link href="/">
          <Image
            src="/logo3.png"
            alt="Logo"
            width={160}
            height={100}
            className="cursor-pointer w-32 sm:w-40 md:w-52 h-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          <Link href="/"><li className="cursor-pointer hover:text-red-700">Home</li></Link>
          <Link href="/projects"><li className="cursor-pointer hover:text-red-700">Projects</li></Link>
          <Link href="/services"><li className="cursor-pointer hover:text-red-700">Services</li></Link>
          <Link href="/about"><li className="cursor-pointer hover:text-red-700">About</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:text-red-700">Hire me</li></Link>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <Image
          src="/profile.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border-2 border-gray-200"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-4 space-y-4 md:hidden text-white font-medium border-t border-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span className="hover:text-red-700">Home</span>
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            <span className="hover:text-red-700">Projects</span>
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            <span className="hover:text-red-700">Services</span>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <span className="hover:text-red-700">About</span>
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <span className="hover:text-red-700">Hire me</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
