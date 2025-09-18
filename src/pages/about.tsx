import React from "react";
import Image from "next/image";
import HeroBg from "../../public/home-bg.jpg";
import Link from "next/link";

export default function About() {
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
          About <span className="text-[#B2904C]">Foodie Delight</span> 🍴
        </h1>
      </section>

      {/* Our Story Section */}
      <section className="py-20 text-center px-6 md:px-0 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#B2904C] mb-6 tracking-wide">
          Our Story
        </h2>
        <p className="text-lg md:text-xl text-[#F5F1E9] leading-relaxed mb-8">
          At Foodie Delight, we believe that great food brings people together. Founded with a passion for culinary excellence, our cafe offers a warm, inviting space where you can enjoy fresh, flavorful dishes inspired by global cuisines. From hearty breakfasts to decadent desserts, every meal is crafted with love and the finest ingredients.
        </p>
        <p className="text-lg md:text-xl text-[#F5F1E9] leading-relaxed">
          Whether you are grabbing a quick bite or savoring a leisurely meal, our team is dedicated to making every visit memorable. Join us in celebrating the joy of good food and great company.
        </p>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-6 bg-[#111]">
        <h2 className="text-4xl font-extrabold text-center text-[#B2904C] mb-14 tracking-wide">
          Our Mission & Values
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            ["Fresh & Quality Ingredients", "We source the best local produce and ingredients to ensure every dish is nutritious and delicious."],
            ["Community & Connection", "Building a welcoming community where food lovers can connect, share, and enjoy together."],
            ["Innovation & Flavor", "Constantly exploring new flavors and techniques to keep our menu exciting and fresh."]
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-[#222] p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <h3 className="text-2xl font-bold text-[#B2904C] mb-4">{title}</h3>
              <p className="text-lg leading-relaxed text-[#ddd]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#B2904C] py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-6 tracking-wide">
          Visit Us Today
        </h2>
        <p className="mb-10 max-w-xl mx-auto text-lg">
          Experience the magic of Foodie Delight. Come taste the joy for yourself!
        </p>
        <Link
          href="/contact"
          className="bg-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
