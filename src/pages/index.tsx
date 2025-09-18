import React from "react";
import Image from "next/image";
import Image1 from "../../public/chicken.png";
import Image2 from "../../public/pasta (1).png";
import Image3 from "../../public/salad4.jpeg";
import HeroBg from "../../public/home-bg.jpg";

export default function Home() {
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
          Taste the <span className="text-[#B2904C]">Joy</span> of Every Bite 🍲
        </h1>
      </section>

      {/* Intro Section */}
      <section className="py-20 text-center px-6 md:px-0 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#B2904C] mb-6 tracking-wide">
          Welcome to Foodie Delight
        </h2>
        <p className="text-lg md:text-xl text-[#F5F1E9] leading-relaxed">
          Discover flavors from around the world. Fresh recipes, hearty meals, and dishes that bring people together. Whether you're a pro or a beginner, there's something delicious here for you.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#111]">
        <h2 className="text-4xl font-extrabold text-center text-[#B2904C] mb-14 tracking-wide">
          What Our Users Say
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            ["“This site helped me start cooking for my family. The steps are so easy to follow!”", "Thando M."],
            ["“Absolutely love the photography and layout. Makes me hungry every time!”", "Rue M."],
            ["“I found healthy recipes that don’t taste boring. 10/10!”", "Brian T."]
          ].map(([quote, name], i) => (
            <div
              key={i}
              className="bg-[#222] p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <p className="italic text-lg leading-relaxed text-[#ddd]">{quote}</p>
              <p className="mt-6 font-semibold text-[#B2904C] text-right text-lg">– {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#B2904C] mb-14 tracking-wide">
          Featured Recipes
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[Image1, Image2, Image3].map((img, i) => (
            <div
              key={i}
              className="bg-[#111] shadow-xl rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Recipe ${i + 1}`}
                className="w-full h-48 object-cover group-hover:brightness-90 transition duration-300"
                style={{ width: "100%", height: "192px", objectFit: "cover" }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#F5F1E9] mb-2">
                  {["Spicy Chicken Curry", "Classic Pasta Alfredo", "Fresh Garden Salad"][i]}
                </h3>
                <p className="text-sm text-gray-400">
                  {["Perfectly seasoned and served hot.", "Creamy, cheesy, and irresistible.", "Crisp veggies and light dressing."][i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / Call to Action */}
      <section className="bg-[#B2904C] py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-6 tracking-wide">
          Join Our Foodie Newsletter
        </h2>
        <p className="mb-10 max-w-xl mx-auto text-lg">
          Get fresh recipes and cooking tips every week, straight to your inbox!
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-6">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-lg text-black placeholder-gray-700 focus:outline-none focus:ring-4 focus:ring-[#a58344]"
          />
          <button className="bg-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}





