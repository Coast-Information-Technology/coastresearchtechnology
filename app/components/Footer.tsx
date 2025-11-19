import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-[#3a0162] px-16 py-10 text-white mt-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-12 gap:10 md:gap-18 lg:gap-10">
        <div>
          <div>
            <Image
              src="/images/COAST RESEARCH TECHNOLOGY (1).png"
              alt="Coast Research Technology Logo"
              width={200}
              height={50}
              className="mb-4"
            />
          </div>
          <p className="mb-4">
            Stay updated on our latest innovations and technology insights
          </p>
          <form className="gap-2 w-full flex mb-2">
            <input
              type="text"
              placeholder="tech insights"
              className="border p-3 w-48 md:w-80 lg:w-96"
            />
            <button
              type="submit"
              className="bg-linear-to-r from-[#5c4fb3] to-[#4c4194] p-4 lg:px-8 lg:py-4 border-[#6758cc]"
            >
              Connect
            </button>
          </form>
          <p className="text-[0.9rem]">
            By subscribing, you agree to our privacy policy and consent to
            receive updates.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Training</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>Guides</li>
              <li>Case studies</li>
              <li>Webinars</li>
              <li>Documentation</li>
              <li>Tech skills</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Connect with us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 ">
                <Facebook size={18} />
                Facebook
              </li>
              <li className="flex items-center gap-2 ">
                <Instagram size={18} />
                Instagram
              </li>
              <li className="flex items-center gap-2 ">
                <Twitter size={18} />X
              </li>
              <li className="flex items-center gap-2 ">
                <Linkedin size={18} />
                LinkedIn
              </li>
              <li className="flex items-center gap-2 ">
                <Youtube size={18} />
                YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-col justify-between items-center border-t border-white mt-10 pt-6 gap-4 text-sm md:text-base">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Coast Research Technology. All
          rights reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 underline underline-offset-2">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </footer>
  );
};
