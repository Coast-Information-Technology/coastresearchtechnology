"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

const WhyCoastResearch: React.FC = () => {
  return (
    <section className="bg-[#f2e8fa] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* --- Top Section --- */}
        <div className="text-center mb-10">
          <h4 className="text-[#2e2e2e] font-semibold uppercase tracking-wide">
            Impact
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-[#3a0263] mb-4">
            Why Coast Research Technology
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mb-6">
            We deliver results that matter. Our work transforms businesses and
            careers through precise, targeted solutions.
          </p>

          {/* --- CTA Buttons --- */}
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-[#6B21A8] to-[#330c6ea0] hover:opacity-90 text-white px-5 py-2.5 font-medium transition"
            >
              Learn
            </Link>
            <Link
              href="#"
              className="flex text-[#2e2e2e] hover:bg-purple-700 hover:text-white px-6 py-3 rounded-md font-medium transition"
            >
              Explore<ChevronRight strokeWidth={1} className="pe-1" />
            </Link>
          </div>

          {/* --- Delivery | Training | Support --- */}
          <div className="mt-8 flex justify-center flex-wrap gap-6 text-sm md:text-base text-gray-600 font-medium">
            <span className="text-purple-800 underline underline-offset-[1rem] decoration-2 decoration-purple-800 cursor-pointer">
              Delivery
            </span>
            <span className="hover:text-purple-800 cursor-pointer transition">
              Training
            </span>
            <span className="hover:text-purple-800 cursor-pointer transition">
              Support
            </span>
          </div>
        </div>

        {/* --- Content Box --- */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-[#f2e8fa]  shadow-lg overflow-hidden p-6 md:p-10">
          {/* --- Image --- */}
          <div className="flex-1">
            <Image
              src="/images/whycoast.jpg" 
              alt="Developer at work"
              width={600}
              height={400}
              className=" object-cover"
            />
          </div>

          {/* --- Text Content --- */}
          <div className="flex-1">
            <h5 className="uppercase text-sm text-[#2e2e2e] font-semibold mb-2">
              Precision
            </h5>

            <h3 className="text-2xl md:text-3xl font-bold text-[#3a0263] mb-4">
              Outcome-driven technology solutions
            </h3>

            <p className="text-gray-600 mb-6">
              We build software that works hard. Our solutions adapt and grow
              with your business needs.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-[#6B21A8] to-[#330c6ea0] hover:opacity-90 text-white px-5 py-2.5 font-medium transition"
>
                Dive
              </Link>
              <Link
                href="#"
                className=" flex text-[#3a0263]  hover:bg-purple-700 hover:text-white px-5 py-2.5 rounded-md font-medium transition"
              >
                Discover<ChevronRight strokeWidth={1} className="pe-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoastResearch;

