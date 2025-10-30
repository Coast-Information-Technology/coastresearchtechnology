import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-[#500480] text-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src="/images/coast tech logo.png"
            alt="Coast Research Technology Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center space-x-8" role="list">
          <li role="listitem">
            <Link href="/" className="active">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-gray-200 transition"
            >
              <span>Services</span>
              <ChevronDown strokeWidth={1} className="w-4 h-4" />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-56">
              <li>
                <Link
                  href="/services/delivery"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/support"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Support
                </Link>
              </li>
              
              <li>
                <Link
                  href="/services/training"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Training
                </Link>
              </li>
              
            </ul>
          </li>

          <li>
            <Link href="/" className="hover:text-gray-200 transition">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/" className="hover:text-gray-200 transition">
              Training
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-gray-200 transition"
            >
              <span>Company</span>
              <ChevronDown strokeWidth={1} className="w-4 h-4" />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-48">
              <li>
                <Link
                  href="/company/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </Link>
              </li>
          
              <li>
                <Link
                  href="/company/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Right: Buttons */}
      <div className="hidden items-center space-x-4 md:flex">
        <Link
          href="/contact"
          className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#3C0E78] transition"
        >
          Talk to an Expert
        </Link>

        <Link
          href="/training"
          className="bg-[#7C3AED] px-4 py-2 rounded-md hover:bg-[#9F67FF] transition"
        >
          Browse Training
        </Link>
      </div>

      <button id="hamburger-menu" className="lg:hidden">
        &#9776;
      </button>
    </header>
  );
};

export default Header;
