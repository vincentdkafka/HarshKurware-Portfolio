"use client";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { Mail, Phone, User, Github, Linkedin, Twitter, Code, PencilLine } from "lucide-react";

const Page = () => {
  const [state, handleSubmit] = useForm("mzzaqarb"); // Only Form ID

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold bg-black text-white px-4 text-center">
        ✅ Thank you for reaching out! I’ll get back to you soon.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6 text-[#ED1C24] text-center">
        Let’s connect and sip a cup of coffee 🍵
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full bg-neutral-900 rounded-2xl shadow-lg shadow-red-900/40 p-8 border border-neutral-800">
        
        {/* Left: Photo */}
        <div className="flex items-center justify-center">
          <img
            src="/myphoto.jpg"
            alt="My Photo"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div className="flex items-center gap-3 bg-neutral-800 p-3 rounded-lg">
              <User className="text-[#ED1C24]" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                aria-label="Name"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
              />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* Email */}
            <div className="flex items-center gap-3 bg-neutral-800 p-3 rounded-lg">
              <Mail className="text-[#ED1C24]" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                aria-label="Email"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
              />
            </div>
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            {/* Phone */}
            <div className="flex items-center gap-3 bg-neutral-800 p-3 rounded-lg">
              <Phone className="text-[#ED1C24]" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                aria-label="Phone"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
              />
            </div>
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                aria-label="Message"
                className="w-full bg-neutral-800 p-3 rounded-lg outline-none text-sm text-white placeholder-gray-400"
                rows="4"
              ></textarea>
            </div>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {/* Submit */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#ED1C24] text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-10 mt-10">
        {[{
          href: "https://github.com/vincentdkafka",
          icon: <Github />
        },{
          href: "https://www.linkedin.com/in/harshkurware22/",
          icon: <Linkedin />
        },{
          href: "https://x.com/HarshKurware",
          icon: <Twitter />
        },{
          href: "https://medium.com/@harshkurware03",
          icon: <PencilLine />
        },{
          href: "https://leetcode.com/u/vincentdkakfka/",
          icon: <Code />
        }].map(({ href, icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ED1C24] transition-transform transform hover:scale-110"
          >
            {React.cloneElement(icon, { className: "w-6 h-6" })}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
