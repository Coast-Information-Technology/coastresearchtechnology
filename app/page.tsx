import Link from "next/link";
import Image from "next/image";
import { ourProgram } from "./utility/ourprogram";

const Home = () => {
  return (
    <main className="tracking-widest">
      {/* <section className="bg-linear-to-r from-[#762da3] to-[#500480] px-10 md:px-20 pt-10 grid grid-cols-1 md:grid-cols-2 items-center text-white">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Build. Train. Scale.
          </h2>

          <p className="text-sm md:text-base text-[#bf8bdc] max-w-md">
            We design robust software and upskill teams—so your product ships
            faster and your people stay future-ready.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="#"
              className="bg-linear-to-r from-[#450a6e] to-[#702a9c] text-white px-6 py-2 font-medium border border-[#9f7db5] "
            >
              Talk to an Expert
            </Link>

            <Link
              href="#"
              className="border border-gray-300 text-white px-6 py-2 font-medium"
            >
              Explore Training
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            src="/images/Untitled design (1).png"
            alt="Visual representation of tech transformation"
            width={500}
            height={400}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </section> */}

      <section className="bg-[#d4a7ed] px-6 md:px-12 lg:px-20 py-16">
        <div className="text-center mb-14 space-y-3">
          <h3 className="text-sm text-gray-700 uppercase tracking-wide">
            Solutions
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a0162]">
            What We Do
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
            Transforming challenges into powerful digital solutions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-sm text-gray-600 mb-1">Development</h3>
                <h2 className="text-[#3a0162] font-semibold text-lg mb-2">
                  Custom Software Development
                </h2>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Ship scalable platforms, APIs, mobile apps, and integrations
                  with clean architecture, security, and CI/CD baked in.
                </p>
                <Link href="#" className="text-[#3a0162] font-medium text-sm ">
                  Explore &gt;
                </Link>
              </div>
              <Image
                src="/images/e74492bf1b1d30b6efaf9c90aa528379.jpg"
                alt="Custom software development"
                width={600}
                height={400}
                className="w-full h-60 md:h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-sm text-gray-600 mb-1">Training</h3>
                <h2 className="text-[#3a0162] font-semibold text-lg mb-2">
                  Tech Training Programs
                </h2>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Practical courses for engineers, analysts, and teams — with
                  capstone projects, code reviews, and career coaching.
                </p>
                <Link href="#" className="text-[#3a0162] font-medium text-sm ">
                  Learn &gt;
                </Link>
              </div>
              <Image
                src="/images/6a4a62a7e736be551ccf32761df26083.jpg"
                alt="Tech training programs"
                width={600}
                height={400}
                className="w-full h-60 md:h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white flex flex-col p-8 ">
              <h3 className="text-sm text-gray-600 mb-1">Support</h3>
              <h2 className="text-[#3a0162] font-semibold text-lg mb-2">
                Consulting & Support
              </h2>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Architecture reviews, DevOps, cloud migration, performance
                tuning, and on-call support for your growing business.
              </p>
              <div className="flex gap-4 mt-3">
                <Link
                  href="#"
                  className="bg-[#3a0162] text-white px-4 py-2 text-sm font-medium hover:bg-[#2b0145] transition"
                >
                  Consult
                </Link>
                <Link
                  href="#"
                  className="text-[#3a0162] text-sm font-medium flex items-center gap-1 "
                >
                  Connect <span>&gt;</span>
                </Link>
              </div>
            </div>
            <Image
              src="/images/186404a3f274a14c7073d4238a096c8d.jpg"
              alt="Consulting support"
              width={600}
              height={300}
              className="w-full h-full md:h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f2e8f9] text-black px-6 md:px-12 lg:px-20 py-16">
        <div className="text-center mb-14 space-y-3">
          <h3 className="text-sm text-gray-700 ">Our Process</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-[#500380]">
            Our Development Roadmap
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
            Four strategic phases that transform complex challenges into
            powerful solutions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div className="relative bg-[#f9f9f9] shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="absolute top-0 right-0 bg-[#d4a7ed] text-[#6959cd] font-bold px-3 py-1">
                1.
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-[#74379b] font-semibold text-lg">
                  Discovery and Strategic Alignment
                </h3>
                <p className="mt-3 text-[#59555b] text-sm md:text-base">
                  Scope, risks, and success metrics.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <Link
                    href="#"
                    className="bg-[#5c2ca4] px-4 py-2 text-white hover:bg-[#4b1e8c] transition"
                  >
                    Explore
                  </Link>
                  <Link
                    href="#"
                    className="text-[#716d75] font-medium hover:text-[#5c2ca4] transition"
                  >
                    Plan &gt;
                  </Link>
                </div>
              </div>
              <Image
                src="/images/443fc745a034c6720c2e44c34d50c42e.jpg"
                alt="Discovery and Strategic Alignment"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Image
                src="/images/cff5e1cba8964bcaeaee87cf0eaecb59.jpg"
                alt="Implementation"
                width={600}
                height={400}
                className="w-full h-64 object-cover shadow-md"
              />
              <div className="relative bg-[#f9f9f9] shadow-lg p-8 flex flex-col justify-center hover:shadow-xl transition">
                <div className="absolute top-0 right-0 bg-[#d4a7ed] text-[#6959cd] font-bold px-3 py-1 ">
                  3.
                </div>
                <h3 className="text-[#74379b] font-semibold text-lg">
                  Implementation
                </h3>
                <p className="mt-3 text-[#59555b] text-sm md:text-base">
                  Agile sprints, demos, CI/CD.
                </p>
                <Link href="#" className="mt-4 text-[#5c2ca4] font-medium">
                  Optimize &gt;
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Image
                src="/images/7429e2f1931d41e4abb8600cd684c5a2.jpg"
                alt="Solution Design"
                width={600}
                height={400}
                className="w-full h-64 object-cover shadow-md"
              />
              <div className="relative bg-[#f9f9f9] shadow-lg p-8 flex flex-col justify-center hover:shadow-xl transition">
                <div className="absolute top-0 right-0 bg-[#d4a7ed] text-[#6959cd] font-bold px-3 py-1 ">
                  2.
                </div>
                <h3 className="text-[#74379b] font-semibold text-lg">
                  Solution Design
                </h3>
                <p className="mt-3 text-[#59555b] text-sm md:text-base">
                  Architecture, backlog, and delivery plan.
                </p>
                <Link href="#" className="mt-4 text-[#5c2ca4] font-medium ">
                  Contact &gt;
                </Link>
              </div>
            </div>
            <div>
              <div className="relative bg-[#f9f9f9] p-8 ">
                <div className="absolute top-0 right-0 bg-[#d4a7ed] text-[#6959cd] font-bold px-3 py-1 ">
                  4.
                </div>
                <h3 className="text-[#74379b] font-semibold text-lg">
                  Handover & Support
                </h3>
                <p className="mt-3 text-[#59555b] text-sm md:text-base">
                  Documentation, training, SLAs.
                </p>
                <div className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-2">
                  <Link href="#" className="bg-[#520c87] p-3 text-white">
                    Get a Sprint Plan
                  </Link>
                  <Link href="#" className="text-[#5c2ca4] font-medium ">
                    Sustain &gt;
                  </Link>
                </div>
              </div>

              <Image
                src="/images/d76bb1211de3bbba8494958f0b11bd20.jpg"
                alt="Handover and Support"
                width={600}
                height={400}
                className="w-full h-72 object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2e8f9] text-black py-16 px-6 md:px-16">
        <div className="mb-14 space-y-3">
          <h3 className="text-sm text-[#88838b] uppercase tracking-wide">
            Case Studies
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#500380]">
            Real Solutions in Action
          </h2>
          <p className="text-[#7a767d] ">
            A snapshot of what we build across fintech, ed-tech, USSD, health,
            and cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <Image
            src="/images/f9b9e15f2472d8537495b82c343dac39.jpg"
            alt=""
            width={500}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="space-y-4 bg-white p-6">
            <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">
              Edtech
            </p>
            <h2 className="text-2xl font-semibold text-[#500380]">
              TechEdu Solution Limited
            </h2>
            <p className="text-[#5b5563] leading-relaxed">
              Training & career platform (programs, bookings, sessions,
              recruiting).
            </p>
            <ul className="space-y-2 text-sm text-[#555]">
              <li>
                <span className="font-semibold text-[#500380]">
                  Highlights:
                </span>{" "}
                role-based onboarding; ISO scheduling; Stripe webhooks.
              </li>
              <li>
                <span className="font-semibold text-[#500380]">Status:</span> In
                development.
              </li>
            </ul>
            <Link
              href="#"
              className="inline-block mt-4 text-[#500380] font-medium hover:underline"
            >
              Explore Case &gt;
            </Link>
          </div>
        </div>
        <ul className="flex flex-wrap gap-4 mt-12 mb-16 text-sm text-[#500380] font-medium">
          <li>
            <Link href="#" className="border border-[#500380] p-3">
              View All
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#7e569a]">
              Fintech
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#7e569a]">
              Edtech
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#7e569a]">
              USSD
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#7e569a]">
              Real Estate
            </Link>
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-sm">
            <Image
              src="/images/f9b9e15f2472d8537495b82c343dac39.jpg"
              alt=""
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex gap-4 text-sm text-[#500380]">
                <p className=" text-sm text-white font-medium bg-[#6959cd] p-3">Real Estate</p>
                <p className=" text-sm text-white font-medium bg-[#6959cd] p-3 tracking-widest">Blog</p>
              </div>
              <h3 className="text-xl font-semibold text-[#500380]">
                Noornest Properties
              </h3>
              <p className="text-[#5b5563]">
                UK-focused portal with investor plans and search.
              </p>
              <ul className="text-sm text-[#555] space-y-1">
                <li>
                  <span className="font-semibold text-[#500380]">
                    Highlights:
                  </span>{" "}
                  Equity/Yield/Secure/Opportunity plans; CMS ready; filters.
                </li>
                <li>
                  <span className="font-semibold text-[#500380]">Status:</span>{" "}
                  In Progress.
                </li>
              </ul>
              <Link
                href="#"
                className="text-[#500380] font-medium hover:underline"
              >
                View Case Study &gt;
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-sm">
            <Image
              src="/images/f9b9e15f2472d8537495b82c343dac39.jpg"
              alt=""
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex gap-4 text-sm text-[#500380]">
                <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">Fintech</p>
                <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">USSD</p>
              </div>
              <h3 className="text-xl font-semibold text-[#500380]">
                SharpCredit USSD
              </h3>
              <p className="text-[#5b5563]">
                Civil-service lending stack with secure Remita flows.
              </p>
              <ul className="text-sm text-[#555] space-y-1">
                <li>
                  <span className="font-semibold text-[#500380]">
                    Highlights:
                  </span>{" "}
                  Resilient error paths; analytics hooks; smoother admin ops.
                </li>
                <li>
                  <span className="font-semibold text-[#500380]">Status:</span>{" "}
                  Delivered.
                </li>
              </ul>
              <Link
                href="#"
                className="text-[#500380] font-medium hover:underline"
              >
                View Case Study &gt;
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-sm">
            <Image
              src="/images/f9b9e15f2472d8537495b82c343dac39.jpg"
              alt=""
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex gap-4 text-sm text-[#500380]">
                <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">Real Estate</p>
                <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">Corporate</p>
              </div>
              <h3 className="text-xl font-semibold text-[#500380]">Asancha</h3>
              <p className="text-[#5b5563]">
                Corporate site + foundations for back-office modules.
              </p>
              <ul className="text-sm text-[#555] space-y-1">
                <li>
                  <span className="font-semibold text-[#500380]">
                    Highlights:
                  </span>{" "}
                  Trustworthy service pages; lead capture; SEO groundwork.
                </li>
                <li>
                  <span className="font-semibold text-[#500380]">Status:</span>{" "}
                  Delivered.
                </li>
              </ul>
              <Link
                href="#"
                className="text-[#500380] font-medium hover:underline"
              >
                View Case Study &gt;
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-sm">
            <Image
              src="/images/f9b9e15f2472d8537495b82c343dac39.jpg"
              alt=""
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex gap-4 text-sm text-[#500380]">
                <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">Fintech</p>
                <p className="inline-block text-sm text-white font-medium bg-[#6959cd] p-3">USSD</p>
              </div>
              <h3 className="text-xl font-semibold text-[#500380]">
                Spark Wave Credit
              </h3>
              <p className="text-[#5b5563]">
                Next-gen lending backend + USSD, modelled after SharpCredit.
              </p>
              <ul className="text-sm text-[#555] space-y-1">
                <li>
                  <span className="font-semibold text-[#500380]">
                    Highlights:
                  </span>{" "}
                  Resilient error paths; analytics hooks; smoother admin ops.
                </li>
                <li>
                  <span className="font-semibold text-[#500380]">Status:</span>{" "}
                  In Progress.
                </li>
              </ul>
              <Link
                href="#"
                className="text-[#500380] font-medium hover:underline"
              >
                View Case Study &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d7b7f5] min-h-screen px-6 md:px-16 py-20 text-center text-[#2e026d]">
        <p className="text-sm font-medium mb-3">Learn</p>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Our comprehensive tech training programs
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto mb-14">
          Discover industry-leading courses tailored for aspiring tech
          professionals
        </p>

        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {ourProgram.map((ourProgram, i) => (
            <div key={i} className="bg-[#efe6fa] ">
              <Image
                src={ourProgram.image}
                alt={ourProgram.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    {ourProgram.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 text-[#40036d]">
                    {ourProgram.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {ourProgram.description}
                  </p>
                </div>
                <a href="#" className="text-sm font-medium text-[#5b02a2] ">
                  View Syllabus →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#3b006d] text-white px-6 py-3 font-medium hover:bg-[#520094] transition">
            All Cohorts
          </button>
          <button className="bg-white text-[#3b006d] px-6 py-3  font-medium border border-[#3b006d] hover:bg-[#f3eaff] transition">
            Talk to an Academy Advisor
          </button>
        </div>
      </section>
      <section className="bg-linear-to-b from-[#c79dea] to-[#6e5dce] py-16 px-6 md:px-16 flex flex-col items-center text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-[#390161]">
            Ready to transform your tech journey?
          </h2>
          <p className="text-m tracking-widest mb-8  text-[#655676]">
            Connect with our experts and unlock your potential in software
            development and technology training.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#6e5dce] font-semibold px-8 py-3 shadow-md">
              Get Started
            </button>
            <button className="border border-white px-8 py-3 ">Button</button>
          </div>
        </div>
        <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <Image
            src="/images/443fc745a034c6720c2e44c34d50c42e.jpg"
            alt="Visual representation of tech transformation"
            width={500}
            height={600}
            className="shadow-2xl object-cover w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
