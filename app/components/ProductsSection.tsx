"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";


const ProductSection = () => {
  return (
    <section className="bg-[#F4E9FB]">
      {/* ===== Top Section ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* ==== Left Side ==== */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#2e2e2e] uppercase mb-2">
            Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a0263] leading-tight max-w-md">
            Innovative solutions that power digital transformation
          </h2>
        </div>

        {/* ==== Right Side ==== */}
        <div className="flex-1 space-y-6">
          <p className="text-gray-700 text-sm md:text-base max-w-md">
            We build technology that cuts through complexity. Our products solve
            real-world challenges with precision and reliability.
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-3">
                <Image
                src="/logos/coastlink24.png"
                alt="Coastlink24 Logo"
                width={56}
                height={56}
                className="object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold text-[#3a0263] mb-1">
                Coastlink24
            </h3>
            <p className="text-sm text-gray-600">
                Financial services infrastructure for seamless digital onboarding.
            </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-3">
                <Image
                  src="/logos/Asset logo.png"
                  alt="LendAsset API Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#3a0263] mb-1">
                LendAsset API
              </h3>
              <p className="text-sm text-gray-600">
                Asset-backed lending rails for fintechs and lenders.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-[#6B21A8] to-[#dc49ef44] text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              View Portfolio
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-purple-700 font-medium hover:underline underline-offset-4"
            >
              Connect<ChevronRight strokeWidth={1} className="pe-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Bottom Image ===== */}
      <div className="relative w-full h-[200px] md:h-[450px] lg:h-[550px]">
        <Image
          src="/images/productimg.jpg"
          alt="Team Presentation"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ProductSection;
