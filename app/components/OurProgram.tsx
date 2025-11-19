"use client";
import Image from "next/image";
import { ourProgram } from "../utility/ourprogram";

const OurProgram = () => {
  return (
    <section className="bg-[#cfa9f1] px-6 md:px-16 py-20 text-center text-[#2e026d]">
      <p className="text-sm font-medium mb-3">Learn</p>
      <h2 className="text-2xl md:text-4xl font-semibold mb-3">
        Our comprehensive tech training programs
      </h2>
      <p className="text-gray-800 max-w-2xl mx-auto mb-14">
        Discover industry-leading courses tailored for aspiring tech professionals
      </p>
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {ourProgram.map((ourProgram) => (
          <div
            key={ourProgram.id}
            className="bg-[#efe6fa]"
          >
            <Image
              src={ourProgram.image}
              alt={ourProgram.title}
              width={500}
              height={300}
              className="object-cover w-full h-56"
            />
            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{ourProgram.category}</p>
                <h3 className="text-lg font-semibold mb-2 text-[#3a0162]">
                  {ourProgram.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {ourProgram.description}
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-[#5b02a2] hover:text-[#3b006d]"
              >
                View Syllabus →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-[#3b006d] text-white px-6 py-3 rounded-md font-medium hover:bg-[#520094] transition">
          All Cohorts
        </button>
        <button className="bg-white text-[#3b006d] px-6 py-3 rounded-md font-medium border border-[#3b006d] hover:bg-[#f3eaff] transition">
          Talk to an Academy Advisor
        </button>
      </div>
    </section>
  );
};

export default OurProgram;
