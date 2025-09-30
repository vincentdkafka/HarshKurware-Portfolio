"use client";
import React from "react";
import { Film, Clock } from "lucide-react";

const Music = () => {
  return (
<div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-700 rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-700 rounded-full opacity-20 animate-pulse blur-3xl"></div>

      <div className="z-10 text-center px-6">
        <Film className="mx-auto w-16 h-16 text-[#ED1C24] animate-bounce mb-6" />
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider mb-4">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-6">
          Something exciting is brewing… 🎬
        </p>
        
        <div className="flex items-center justify-center gap-4 text-red-600 font-bold text-xl md:text-2xl">
          <Clock className="w-6 h-6" />
          <span>Launching Soon!</span>
        </div>
        
        <a
          href="/"
          className="mt-8 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold shadow-lg"
        >
          Stay Tuned
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
        <Film className="w-32 h-32 text-red-800 opacity-10 animate-spin-slow" />
      </div>
    </div>  )
}

export default Music