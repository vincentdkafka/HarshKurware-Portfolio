import React from "react";
import { Code2, Palette, PenTool } from "lucide-react";

const page = () => {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#ED1C24] tracking-wide">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-[#141414] border border-red-600 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <Code2 strokeWidth={1.5} className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text text-gray-300">
              I specialize in creating responsive, high-performance, and
              scalable websites using modern frameworks like React, Next.js, and
              Tailwind CSS. From single-page apps to full-scale platforms, I
              ensure clean code, optimized performance, and SEO-friendly
              architecture. My focus is on building websites that not only look
              great but also deliver exceptional user experiences across all
              devices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-[#141414] border border-red-600 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <Palette
              strokeWidth={1.5}
              className="w-12 h-12 text-red-600 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text text-gray-300">
              Design is more than just aesthetics — it’s about creating seamless
              journeys. I craft intuitive, user-centered interfaces that balance
              creativity with functionality. By combining research, wireframing,
              prototyping, and design systems, I deliver digital experiences
              that engage users and drive results. Every pixel has a purpose,
              and every interaction is thoughtfully designed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-[#141414] border border-red-600 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <PenTool
              strokeWidth={1.5}
              className="w-12 h-12 text-red-600 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text- text-gray-300">
              Visual storytelling is at the heart of my graphic design work.
              Whether it’s designing logos, social media creatives, or brand
              identity systems, I bring ideas to life with striking visuals that
              communicate effectively. I blend creativity with strategy to
              ensure every design aligns with the brand’s voice, leaving a
              lasting impact on its audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
