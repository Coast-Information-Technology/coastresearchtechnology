"use client";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="bg-[#d4a7ed] px-6 md:px-16 py-16 text-black">
      <div className="text-center mb-14 space-y-3">
        <h3 className="text-sm text-gray-700 uppercase tracking-wide">
          Solutions
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3a0162]">
          What We Do
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Transforming challenges into powerful digital solutions
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#f6f0fa] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="p-6 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-700 uppercase">
                Development
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#3a0162] mt-1 mb-2">
                Custom Software Development
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Ship scalable platforms, APIs, mobile apps, and integrations with clean
                architecture, security, and CI/CD baked in.
              </p>
              <Link
                href="#"
                className="text-sm font-semibold text-[#3a0162] flex items-center"
              >
                Explore <span className="ml-1">›</span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/e74492bf1b1d30b6efaf9c90aa528379.jpg"
              alt="Custom Software Development"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="bg-[#f6f0fa] rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <span className="text-xs font-semibold text-gray-700 uppercase">
              Support
            </span>
            <h3 className="text-lg md:text-xl font-bold text-[#3a0162] mt-1 mb-2">
              Consulting & Support
            </h3>
            <p className="text-sm text-gray-700 mb-5">
              Architecture reviews, DevOps, cloud migration, performance tuning, and on-call support.
            </p>
            <div className="flex gap-3">
              <button className="bg-[#3a0162] text-white text-sm px-4 py-2 rounded-md hover:bg-[#2b014a] transition">
                Consult
              </button>
              <Link
                href="#"
                className="text-sm font-semibold text-[#3a0162] flex items-center"
              >
                Connect <span className="ml-1">›</span>
              </Link>
            </div>
          </div>
          <Image
            src="/images/186404a3f274a14c7073d4238a096c8d.jpg"
            alt="Consulting & Support"
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#f6f0fa] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="p-6 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-700 uppercase">
                Training
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#3a0162] mt-1 mb-2">
                Tech Training Programs
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Practical courses for engineers, analysts, and teams—capstone projects, code reviews, and career coaching.
              </p>
              <Link
                href="#"
                className="text-sm font-semibold text-[#3a0162] flex items-center"
              >
                Learn <span className="ml-1">›</span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/training.jpg"
              alt="Tech Training Programs"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
