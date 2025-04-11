import React from "react";
import Section from "./Section";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="!pt-24 text-center space-y-4 relative bg-[url('/assets/grid.svg')] bg-cover bg-center">
      {/* Hero Text Content */}
      <div className="">
        <h1 className="inline-block text-4xl bg-white py-2 px-8 rounded-full font-semibold text-gray-700 leading-tight">
          Hi, My Name is Theresah Asamoah
        </h1>
        <br />
        <h1 className="bg-white py-2 px-8 inline-block rounded-full text-4xl font-semibold text-gray-700 leading-tight">
          A <span className="text-[var(--primary)]">Fashion Designer</span> &{" "}
          <span className="text-[var(--primary)]">Creative Visionary</span>
        </h1>
      </div>

      {/* Buttons */}
      <div className="grid md:flex gap-4 justify-center items-center">
        <Link
          href={"/#project"}
          className="py-4 flex gap-1 items-center group text-[20px] px-8 font-medium rounded-full bg-[var(--primary)] text-[var(--background)] hover:bg-opacity-80 transition"
        >
          Go To Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </Link>
        <Link
          href={"/#contact"}
          className="py-3 bg-white text-[20px] px-8 font-medium rounded-full hover:underline transition text-[var(--primary)] hover:bg-[#fafafa]"
        >
          Contact Me
        </Link>
      </div>
    </Section>
  );
}
