import React from "react";
import Section from "./Section";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Unique Custom-Made Outfits Delivered" },
  { value: "10+", label: "Years of Expertise in Fashion Design" },
  { value: "200+", label: "Brides Dressed in Stunning Bespoke Gowns" },
  { value: "5+", label: "Clients Across 5+ Countries and Counting" },
];

export default function About() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <figure className="h-full w-full bg-gray-400">
          <Image
            src="/flyer.jpg"
            alt="thessy"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </figure>

        {/* Text Content Section */}
        <div>
          <h2 className="text-3xl font-semibold text-[var(--primary)]">
            Crafting Elegance, Stitch by Stitch
          </h2>
          <p className="text-gray-600 mt-4">
            At <strong>Thessy&apos;s Fashion</strong>, we believe that fashion
            is more than just clothing— it&apos;s an art form, a statement, and
            a reflection of who you are. With a keen eye for detail and a deep
            passion for creativity, we specialize in designing timeless,
            custom-made outfits that exude confidence, class, and culture.
          </p>

          {/* Stats Section */}
          <ul className="grid grid-cols-1 gap-6 mt-12 text-left">
            <li>
              <h3 className="text-3xl font-semibold text-[var(--primary)]">Thessy In Numbers</h3>
            </li>
            {stats.map((stat, index) => (
              <li key={index} className="">
                <h3 className="text-3xl font-medium text-[var(--primary)]">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
