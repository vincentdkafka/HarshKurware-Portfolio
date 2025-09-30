"use client";
import React from "react";

const blogs = [
  {
    title: "The AI Gold Rush Is Slowing Down",
    description: "Updates for developers, that AI is gonna be gut-wrenching and job killing",
    link: "https://medium.com/@harshkurware03/the-ai-gold-rush-is-slowing-down-heres-why-developers-aren-t-going-anywhere-548c0854845f",
  },
  {
    title: "Are Birthdays Still Worth Celebrating?",
    description: "My thoughts on celebrating birthday",
    link: "https://medium.com/@harshkurware03/are-birthdays-still-worth-celebrating-e707af721f7d",
  },
  {
    title: "The Knack of Sarcasm",
    description: "how sarcasm, a uniquely human trait, evolved as a subtle way to express complex emotions.",
    link: "https://medium.com/@harshkurware03/the-knack-of-sarcasm-ef61d2517871",
  },
  {
    title: "The Cancelled Deabate",
    description: "Just a debate which didnt happened, thus posted here",
    link: "https://medium.com/@harshkurware03/the-cancelled-deabate-767c0bbae1d5",
  },
  {
    title: "Why I Think Next.js is Basically React on Steroids",
    description: "My view afte using Nextjs after using react for while.",
    link: "https://medium.com/@harshkurware03/why-i-think-next-js-is-basically-react-on-steroids-620855980b18",
  },
];


const Blog = () => {
  return (
<div className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#ED1C24] mb-12">
         My Blogs
      </h1>
      <p className="text-center text-neutral-400 max-w-3xl mx-auto mb-12">
        Sharing insights, tutorials, and experiences from my journey as a Web Developer, Designer, and Tech Enthusiast.  
        Click a card to read the full article on Medium.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 hover:border-[#ED1C24] transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
            <p className="text-sm text-neutral-400 flex-1">{blog.description}</p>
            <span className="mt-4 text-red-600 font-semibold hover:underline">Read More →</span>
          </a>
        ))}
      </div>
    </div>  )
}

export default Blog