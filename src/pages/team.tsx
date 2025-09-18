'use client';

import React from "react";
import Image from "next/image";

// Team images
import TeamImg1 from "../../public/chef1.jpg";
import TeamImg2 from "../../public/chef2.jpg";
import TeamImg3 from "../../public/Chef3.jpg";
import TeamImg4 from "../../public/chef4.jpg";
import TeamImg5 from "../../public/chef5.jpeg";
import TeamImg6 from "../../public/chef6.jpeg";
import TeamImg7 from "../../public/chef7.jpeg";
import TeamImg8 from "../../public/chef8.jpg";

// Hero background
import HeroBg from "../../public/team.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Chef Ryan",
      role: "Recipe Creator",
      image: TeamImg1,
      desc: "Loves African fusion cuisine and creates all our spice-rich dishes.",
    },
    {
      name: "Lord Zhang",
      role: "Food Photographer",
      image: TeamImg2,
      desc: "Captures every flavor in a frame. Makes food look as good as it tastes.",
    },
    {
      name: "Verna D",
      role: "Nutrition Guide",
      image: TeamImg3,
      desc: "Ensures our recipes are not just tasty, but balanced and nourishing.",
    },
    {
      name: "Chef Ling Xiao",
      role: "Pastry Specialist",
      image: TeamImg4,
      desc: "Creates the softest, sweetest pastries you’ll ever taste.",
    },
    {
      name: "Chef Nyasha",
      role: "Vegan Expert",
      image: TeamImg5,
      desc: "Brings creative plant-based dishes to life with bold flavors.",
    },
    {
      name: "Blessed A",
      role: "Content Writer",
      image: TeamImg6,
      desc: "Tells the story behind every dish and writes our recipe steps clearly.",
    },
    {
      name: "Kelvin Z.",
      role: "Plating Stylist",
      image: TeamImg7,
      desc: "Makes sure each plate looks like art. Presentation is everything!",
    },
    {
      name: "Chef Lisa",
      role: "Grill Master",
      image: TeamImg8,
      desc: "Rules the grill with her smoky marinades and charred perfection.",
    },
  ];

  return (
    <div className="bg-[#fdfcf9] text-[#261B6C] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh]">
        <Image
          src={HeroBg}
          alt="Team background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            Meet Our Culinary Crew 👨‍🍳
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700">
          Behind every recipe is a passionate person. Here’s the team that stirs the pots,
          fires the ovens, and serves up joy one dish at a time.
        </p>
      </section>

      {/* Team Grid */}
      <section className="pb-16 px-4 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={i === 0} // prioritize first image
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-lg font-bold text-[#B2904C]">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-700">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

