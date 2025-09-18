import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#F5F1E9] py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold text-[#B2904C] mb-2">Foodie Delight</h3>
          <p className="text-sm">
            Your go-to spot for fresh recipes, cooking tips, and global flavors. Taste the joy every day!
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-bold mb-2 text-[#B2904C]">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:underline hover:text-[#B2904C] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-[#B2904C] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:underline hover:text-[#B2904C] transition-colors">
                Our Food
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:underline hover:text-[#B2904C] transition-colors">
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-bold mb-2 text-[#B2904C]">Stay Connected</h4>
          <p className="text-sm mb-2">Follow us on socials for daily meal inspo!</p>
          <div className="flex gap-6 text-[#F5F1E9]">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B2904C] transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B2904C] transition-colors"
            >
              TikTok
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B2904C] transition-colors"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Foodie Delight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

