export default function ImpactSection() {
  return (
    <section className="bg-purple-300 py-16 px-6 md:px-20 text-purple-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="md:flex md:justify-between md:items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
            Our impact in numbers
          </h2>
          <p className="text-base md:w-1/2 text-[#2e2e2e] leading-relaxed">
            We measure our success through tangible results and the growth of
            our clients and students. Our commitment to excellence is reflected
            in our key achievements.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left mb-10">
          {/* Card 1 */}
          <div className="border-l-2 border-purple-700 pl-4">
            <h3 className="text-5xl font-extrabold text-purple-800">95%</h3>
            <p className="text-sm mt-1 tracking-wide text-[#2e2e2e]">
              Client satisfaction rate
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-l-2 border-purple-700 pl-4">
            <h3 className="text-5xl font-extrabold text-purple-800">85%</h3>
            <p className="text-sm mt-1 tracking-wide text-[#2e2e2e]">
              Successful project completion
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-l-2 border-purple-700 pl-4">
            <h3 className="text-5xl font-extrabold text-purple-800">100+</h3>
            <p className="text-sm mt-1 tracking-wide text-[#2e2e2e]">
              Trained professionals
            </p>
          </div>
        </div>

        {/* Standalone Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-gradient-to-r from-[#6B21A8] to-[#580463b6] text-white text-sm px-6 py-2  hover:bg-purple-800 transition">
            Read Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}