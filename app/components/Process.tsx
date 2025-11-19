"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProcessStep {
  id: number;
  title: string;
  desc: string;
  img: string;
  links: string[];
}

interface ProcessSectionProps {
  heading: string;
  paragraph: string;
  subText: string;
  steps: ProcessStep[];
}

const Process: React.FC<ProcessSectionProps> = ({heading,paragraph,subText,steps}) => {
  return (
    <section className="bg-[#f2e8f9] text-black px-6 md:px-16 py-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
        <p className="text-sm font-medium text-gray-800 mb-1">{paragraph}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-[#3a0162]">
          {heading}
        </h3>
        <p className="text-gray-700">{subText}</p>
      </div>

      {/* Roadmap Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="absolute top-3 right-4 text-4xl font-bold text-[#e2b6ff]">
              {step.id}.
            </div>

            {/* Image */}
            <Image
              src={step.img}
              alt={step.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-3 text-left">
              <h3 className="text-lg font-semibold text-[#3a0162]">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>

              <div className="flex flex-wrap gap-4 text-sm text-purple-700 font-medium mt-3">
                {step.links.map((link, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="hover:underline hover:text-[#3a0162]"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
