"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Section from "./Section";
import { models } from "./models";

export default function FeaturedProject() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Safe window access
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoized heights
  const cardCollapsedHeight = useMemo(() => {
    if (windowWidth < 420) return "max-h-44";
    if (windowWidth < 640) return "max-h-36";
    return "max-h-28";
  }, [windowWidth]);

  const cardFullHeight = useMemo(() => {
    return windowWidth < 1241.82 ? "max-h-auto" : "max-h-[2005px]";
  }, [windowWidth]);

  return (
    <Section id="project">
      <div className="max-w-[1054px] mx-auto">
        {/* Header */}
        <div className="text-left mb-14">
          <h2 className="font-semibold text-gray-600">
            Featured Project - The Premium Wedding Dress Collection
          </h2>
          <p className="text-gray-600 mt-4">
            A step-by-step showcase of the dress&apos;s transformation, from
            initial structure to the final masterpiece, highlighting
            craftsmanship and intricate details.
          </p>
        </div>

        {/* Models */}
        <div className="space-y-8">
          {models.map((model, modelIndex) => {
            const isOpen = selectedProjectIndex === modelIndex || windowWidth < 768;
            return (
              <div
                key={modelIndex}
                className={`border-b transition-all duration-300 overflow-hidden text-left space-y-12 ${
                  isOpen ? cardFullHeight : cardCollapsedHeight
                }`}
              >
                {/* Model Header */}
                <button
                  onClick={() =>
                    setSelectedProjectIndex((prev) =>
                      prev === modelIndex ? null : modelIndex
                    )
                  }
                  className="text-left w-full !mb-2"
                >
                  <div className="flex justify-between items-start gap-1">
                    <h3 className="font-semibold text-gray-600">{model.title}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className={`w-10 h-10 hidden md:block transition-transform duration-300 ${
                        selectedProjectIndex === modelIndex ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2 md:mb-6">{model.description}</p>
                </button>

                {/* Expanded Section */}
                {isOpen && (
                  <>
                    {/* Views */}
                    <div className="mt-8 space-y-8">
                      {model.views.map((view, viewIndex) => (
                        <div key={viewIndex}>
                          <h4 className="font-semibold text-gray-600">
                            {viewIndex + 1}. {view.title}
                          </h4>

                          <div className="mt-4 overflow-x-auto md:overflow-visible no-scrollbar">
                            <div className="flex md:grid md:grid-cols-3 gap-6 w-full">
                              {view.stages.map((stage) => (
                                <div
                                  key={stage.index}
                                  className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto"
                                >
                                  <figure className="relative bg-gray-100 rounded-2xl overflow-hidden mb-4 hover:shadow-lg transition">
                                    <Image
                                      src={stage.image}
                                      alt={stage.title}
                                      width={300}
                                      height={400}
                                      className="w-full h-auto"
                                    />
                                    <span className="absolute w-8 h-8 flex justify-center items-center bg-blue-600 text-white text-xs rounded-full top-3 left-3">
                                      {stage.index}
                                    </span>
                                  </figure>
                                  <div className="mt-2">
                                    <h5 className="font-semibold text-gray-600">
                                      {stage.title}
                                    </h5>
                                    <p className="text-gray-600 text-sm mt-1">
                                      {stage.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 w-full h-[1px] bg-[#d9d9d9]" />
                        </div>
                      ))}
                    </div>

                    {/* Final Result */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-600">
                        {model.views.length + 1}. {model.final.title}
                      </h4>
                      <p className="text-gray-600 mt-2">{model.final.desc}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                          <video controls className="w-full h-[298px] rounded-md">
                            <source src={model.final.video.front} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                          <video controls className="w-full h-[298px] rounded-md">
                            <source src={model.final.video.back} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
