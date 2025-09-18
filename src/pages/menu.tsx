import React from "react";
import Image from "next/image";

// Hero background image
import HeroBg from "../../public/eiliv-aceron-wNQoaYCFcsI-unsplash.jpg";

// Dessert images
import Cheesecake from "../../public/dessert1.jpg";
import Carrotcake from "../../public/dessert2.jpeg";
import TiramisuCake from "../../public/dessert3.jpeg";
import ChocolateLavaCake from "../../public/dessert4.jpeg";
import RedVelvetCake from "../../public/dessert5.jpeg";
import OperaCake from "../../public/desset6.jpeg";

// Salad images
import GreekSalad from "../../public/salad1.jpg";
import CaesarSalad from "../../public/salad2.jpeg";
import CapreseSalad from "../../public/salad3.jpeg";
import ColeslawSalad from "../../public/salad4.jpeg";
import ChickpeaSalad from "../../public/salad5.jpeg";
import FruitSalad from "../../public/salad6.jpeg";

// Drink images
import Drink1 from "../../public/drink1 (1).jpeg";
import Drink2 from "../../public/drink1 (2).jpeg";
import Drink3 from "../../public/drink1 (3).jpeg";
import Drink4 from "../../public/drink1 (4).jpeg";
import Drink5 from "../../public/drink1 (5).jpeg";
import Drink6 from "../../public/drink1 (6).jpeg";

import type { StaticImageData } from "next/image";

const renderMenuItems = (
  category: string,
  items: { img: StaticImageData; name: string }[],
  clipStyle: string
) => (
  <section className="py-12 px-6 bg-[#222] text-[#F5F1E9]">
    <h2 className="text-3xl font-bold text-[#B2904C] text-center mb-8">{category}</h2>
    <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-[#111] p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300"
        >
          <div className={`overflow-hidden w-full h-48 ${clipStyle}`}>
            <Image
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
              priority={i === 0}
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-center text-[#F5F1E9]">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  </section>
);

export default function Menu() {
  return (
    <div className="bg-black text-[#F5F1E9] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4">
        <Image
          src={HeroBg}
          alt="Kitchen background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-60"
        />
        <h1 className="relative text-5xl md:text-6xl font-bold text-[#B2904C] mb-4 drop-shadow-lg z-10">
          Our Full Menu
        </h1>
        <p className="relative max-w-3xl text-lg text-[#F5F1E9] z-10">
          Explore our delicious selection of dishes from sweet to savory, light to hearty.
        </p>
      </section>

      {/* Menu Sections */}
      {renderMenuItems("Desserts", [
        { img: Cheesecake, name: "Cheesecake" },
        { img: Carrotcake, name: "Carrot Cake" },
        { img: TiramisuCake, name: "Tiramisu Cake" },
        { img: ChocolateLavaCake, name: "Chocolate Lava Cake" },
        { img: RedVelvetCake, name: "Red Velvet Cake" },
        { img: OperaCake, name: "Opera Cake" },
      ], "clip-circle")}

      {renderMenuItems("Salads", [
        { img: GreekSalad, name: "Greek Salad" },
        { img: CaesarSalad, name: "Caesar Salad" },
        { img: CapreseSalad, name: "Caprese Salad" },
        { img: ColeslawSalad, name: "Coleslaw" },
        { img: ChickpeaSalad, name: "Chickpea Salad" },
        { img: FruitSalad, name: "Fruit Salad" },
      ], "clip-wave")}

      {renderMenuItems("Drinks", [
        { img: Drink1, name: "Mango Juice" },
        { img: Drink2, name: "Beetroot Juice" },
        { img: Drink3, name: "Carrot & Orange Juice" },
        { img: Drink4, name: "Pineapple Juice" },
        { img: Drink5, name: "Watermelon Juice" },
        { img: Drink6, name: "Baobab Juice" },
      ], "clip-triangle")}
    </div>
  );
}

