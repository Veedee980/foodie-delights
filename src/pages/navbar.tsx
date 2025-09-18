import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-md bg-black bg-opacity-90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold text-[#B2904C] select-none cursor-default">
          🍴 Foodie Delight
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-[#F5F1E9] font-semibold">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/team", label: "Our Team" },
            { href: "/menu", label: "Menu" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-[#B2904C] transition-colors duration-300">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

