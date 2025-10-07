import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center justify-center gap-10 bg-black text-white 
        w-full min-h-screen px-6 sm:px-12 md:px-24 lg:px-36 
        pt-24 md:pt-0 overflow-hidden"
      >
        {/* Image */}
        <div className="relative shadow-2xl rounded-2xl overflow-hidden shrink-0 w-full md:w-auto">
          <img
            className="object-cover rounded-2xl w-full h-auto max-w-[600px]"
            src="myphoto.jpg"
            alt="Profile photo"
            width={600}
            height={300}
          />
        </div>

        {/* Text content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl text-[#ED1C24] py-6 uppercase font-bold">
            About Me
          </h1>

          <p className="text-sm sm:text-base leading-relaxed">
            I’m a curious creator who blends{" "}
            <span className="font-semibold">design</span> and{" "}
            <span className="font-semibold">development</span> into digital
            experiences that feel alive. My journey has taken me through the
            worlds of frontend sorcery, backend architecture, and the fine art
            of turning coffee into code.
          </p>

          <p className="py-4 text-sm sm:text-base leading-relaxed">
            When I’m not busy debugging reality, you’ll find me sketching
            interfaces, experimenting with new frameworks, or pushing pixels
            until they behave. I believe good design isn’t just seen—it’s{" "}
            <span className="italic">felt</span>.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            This portfolio is more than a showcase—it’s a playground where
            creativity meets technology. Welcome to my corner of the internet.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 mt-8 w-full">
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                className="flex items-center justify-center gap-2 w-full sm:w-auto 
                bg-gradient-to-r from-[#ff7d7d] to-[#ff1c1c] 
                py-3 sm:py-4 px-6 sm:px-8 
                rounded-full text-white 
                text-sm sm:text-base font-medium
                transition-transform hover:-translate-y-0.5"
              >
                <span>Contact me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>

            <Link href="/projects" className="w-full sm:w-auto">
              <button
                className="flex items-center justify-center gap-2 w-full sm:w-auto 
                bg-white text-black 
                py-3 sm:py-4 px-6 sm:px-8 
                rounded-full 
                text-sm sm:text-base font-medium
                transition-transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
