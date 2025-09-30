import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="flex flex-col px-36 md:flex-row h-screen w-screen items-center justify-center gap-10 max-md:px-4 bg-black">
        <div className="relative shadow-2xl rounded-2xl overflow-hidden shrink-0">
          <img
            className=" object-cover rounded-2xl"
            src="myphoto.jpg"
            alt=""
            width={600}
            height={300}
          />
        </div>
        <div className="text-white">
          <h1 className="text-4xl text-[#ED1C24] py-6 uppercase font-bold">About Me</h1>

          <p>
            I’m a curious creator who blends{" "}
            <span className="font-semibold">design</span> and
            <span className="font-semibold"> development</span> into digital
            experiences that feel alive. My journey has taken me through the
            worlds of frontend sorcery, backend architecture, and the fine art
            of turning coffee into code.
          </p>
          <p className="py-4">
            When I’m not busy debugging reality, you’ll find me sketching
            interfaces, experimenting with new frameworks, or pushing pixels
            until they behave. I believe good design isn’t just seen—it’s{" "}
            <span className="italic">felt</span>.
          </p>
          <p>
            This portfolio is more than a showcase—it’s a playground where
            creativity meets technology. Welcome to my corner of the internet.
          </p>

          <div className="flex gap-6">
            <Link href="contact">
              <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#ff7d7d] to-[#ff1c1c] py-3 px-8 rounded-full text-white">
                <span>Contact me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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

            <Link href="/projects">
              <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-white py-3 px-8 rounded-full text-black">
                <span>View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right-icon lucide-arrow-right"
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
