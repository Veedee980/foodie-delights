import React from "react";
import Image from "next/image";
import HeroBg from "../../public/home-bg.jpg";

export default function Contact() {
  return (
    <div className="bg-black text-[#F5F1E9] font-sans selection:bg-[#B2904C] selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={HeroBg}
          alt="Kitchen background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 brightness-95"
        />
        <h1 className="relative z-10 max-w-4xl px-4 text-center text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Contact <span className="text-[#B2904C]">Foodie Delight</span> 📞
        </h1>
      </section>

      {/* Contact Intro Section */}
      <section className="py-20 text-center px-6 md:px-0 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#B2904C] mb-6 tracking-wide">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-[#F5F1E9] leading-relaxed mb-8">
          Have questions, feedback, or want to say hello? We love to hear from you! Fill out the form below and we will get back to you as soon as possible.
        </p>
        <form className="max-w-xl mx-auto flex flex-col gap-6 text-left">
          <label className="block">
            <span className="text-[#B2904C] font-semibold">Name</span>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-4 focus:ring-[#a58344]"
            />
          </label>
          <label className="block">
            <span className="text-[#B2904C] font-semibold">Email</span>
            <input
              type="email"
              placeholder="Your email address"
              className="mt-1 block w-full rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-4 focus:ring-[#a58344]"
            />
          </label>
          <label className="block">
            <span className="text-[#B2904C] font-semibold">Message</span>
            <textarea
              placeholder="Your message"
              rows={5}
              className="mt-1 block w-full rounded-lg px-4 py-3 text-black resize-none focus:outline-none focus:ring-4 focus:ring-[#a58344]"
            />
          </label>
          <button
            type="submit"
            className="bg-[#B2904C] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#a58344] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
