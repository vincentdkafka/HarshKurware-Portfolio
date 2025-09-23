"use client";
import { useForm } from "@formspree/react";
import React from "react";
import { Mail, Phone, User, Github, Linkedin, Twitter, Code, PencilLine } from "lucide-react";

const Page = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mzzaqarb"); // replace with your real Formspree ID

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        ✅ Thank you for reaching out! I’ll get back to you soon.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 bg-gray-50 dark:bg-neutral-950">
      <h1 className="text-3xl font-bold mb-6">
        Let’s Connect and sip a Cup of Coffee 🍵
      </h1>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
        
        {/* Left: Photo */}
        <div className="flex items-center justify-center">
          <img
            src="/myphoto.jpg" 
            alt="My Photo"
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-neutral-800 p-3 rounded-lg">
              <User className="text-gray-600 dark:text-gray-300" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-neutral-800 p-3 rounded-lg">
              <Mail className="text-gray-600 dark:text-gray-300" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-neutral-800 p-3 rounded-lg">
              <Phone className="text-gray-600 dark:text-gray-300" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full bg-gray-100 dark:bg-neutral-800 p-3 rounded-lg outline-none text-sm"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom: Social Links */}
      <div className="flex gap-16 mt-10">
        <a
          href="https://github.com/vincentdkafka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/harshkurware22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://x.com/HarshKurware"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://medium.com/@harshkurware03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PencilLine className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://leetcode.com/u/vincentdkakfka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
      </div>
    </div>
  );
};

export default Page;
