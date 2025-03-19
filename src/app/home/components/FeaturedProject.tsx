"use client";

import React, { useState, useEffect } from "react";
import Section from "./Section";
import Image from "next/image";

interface Stage {
  index: number;
  title: string;
  description: string;
  image: string;
}

interface View {
  title: string;
  stages: Stage[];
}

interface Model {
  title: string;
  description: string;
  views: View[];
  final: {
    title: string;
    desc: string;
    video: {
      front: string;
      back: string;
    };
  };
}

const models: Model[] = [
  {
    title: "The Premium Wedding Dress - Model A",
    description:
      "A step-by-step showcase of the dress's transformation, from initial structure to the final masterpiece. Highlighting craftsmanship and intricate details.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The foundation of the dress takes shape with a structured base, setting the stage for further embellishments.",
            image: "/assets/wedding-dresses/model a/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-stitched lace patterns and sheer fabric overlays enhance the neckline, bringing a balance between structure and softness.",
            image: "/assets/wedding-dresses/model a/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Intricate embroidery extends from the bodice to the waist, leading to a stunning, mesmerizing transformation into a bridal designer masterpiece.",
            image: "/assets/wedding-dresses/model a/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The structured fit at the back takes shape with an angular silhouette, deep anchoring for fabric, and initial lacework.",
            image: "/assets/wedding-dresses/model a/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-crafted lace patterns and sheer fabric overlay enhance the bodice, adding texture and a refined silhouette.",
            image: "/assets/wedding-dresses/model a/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Meticulous embroidery extends from the lower back to the train, sculpting a dramatic, memorable style transformation into a breathtaking masterpiece.",
            image: "/assets/wedding-dresses/model a/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A stunning showcase of the dress's transformation from concept to reality, blending precision, fabric choice, and artistic vision into an exquisite final piece.",
      video: {
        front: "/assets/wedding-dresses/model a/final1.mp4",
        back: "/assets/wedding-dresses/model a/final2.mp4",
      },
    },
  },
  {
    title: "The Premium Wedding Dress - Model B",
    description:
      "A step-by-step showcase of the dress's transformation, from initial structure to the final masterpiece. Highlighting craftsmanship and intricate details.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The foundation of the dress takes shape with a structured base, setting the stage for further embellishments.",
            image: "/assets/wedding-dresses/model b/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-stitched lace patterns and sheer fabric overlays enhance the neckline, bringing a balance between structure and softness.",
            image: "/assets/wedding-dresses/model b/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Intricate embroidery extends from the bodice to the waist, leading to a stunning, mesmerizing transformation into a bridal designer masterpiece.",
            image: "/assets/wedding-dresses/model b/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The structured fit at the back takes shape with an angular silhouette, deep anchoring for fabric, and initial lacework.",
            image: "/assets/wedding-dresses/model b/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-crafted lace patterns and sheer fabric overlay enhance the bodice, adding texture and a refined silhouette.",
            image: "/assets/wedding-dresses/model b/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Meticulous embroidery extends from the lower back to the train, sculpting a dramatic, memorable style transformation into a breathtaking masterpiece.",
            image: "/assets/wedding-dresses/model b/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A stunning showcase of the dress's transformation from concept to reality, blending precision, fabric choice, and artistic vision into an exquisite final piece.",
      video: {
        front: "/assets/wedding-dresses/model b/final1.mp4",
        back: "/assets/wedding-dresses/model b/final2.mp4",
      },
    },
  },
  {
    title: "The Premium Wedding Dress - Model C",
    description:
      "A step-by-step showcase of the dress's transformation, from initial structure to the final masterpiece. Highlighting craftsmanship and intricate details.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The foundation of the dress takes shape with a structured base, setting the stage for further embellishments.",
            image: "/assets/wedding-dresses/model c/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-stitched lace patterns and sheer fabric overlays enhance the neckline, bringing a balance between structure and softness.",
            image: "/assets/wedding-dresses/model c/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Intricate embroidery extends from the bodice to the waist, leading to a stunning, mesmerizing transformation into a bridal designer masterpiece.",
            image: "/assets/wedding-dresses/model c/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The structured fit at the back takes shape with an angular silhouette, deep anchoring for fabric, and initial lacework.",
            image: "/assets/wedding-dresses/model c/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-crafted lace patterns and sheer fabric overlay enhance the bodice, adding texture and a refined silhouette.",
            image: "/assets/wedding-dresses/model c/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Meticulous embroidery extends from the lower back to the train, sculpting a dramatic, memorable style transformation into a breathtaking masterpiece.",
            image: "/assets/wedding-dresses/model c/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A stunning showcase of the dress's transformation from concept to reality, blending precision, fabric choice, and artistic vision into an exquisite final piece.",
      video: {
        front: "/assets/wedding-dresses/model c/final1.mp4",
        back: "/assets/wedding-dresses/model c/final2.mp4",
      },
    },
  },
  {
    title: "The Premium Wedding Dress - Model D",
    description:
      "A step-by-step showcase of the dress's transformation, from initial structure to the final masterpiece. Highlighting craftsmanship and intricate details.",
    views: [
      {
        title: "Front View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The foundation of the dress takes shape with a structured base, setting the stage for further embellishments.",
            image: "/assets/wedding-dresses/model d/1f.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-stitched lace patterns and sheer fabric overlays enhance the neckline, bringing a balance between structure and softness.",
            image: "/assets/wedding-dresses/model d/2f.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Intricate embroidery extends from the bodice to the waist, leading to a stunning, mesmerizing transformation into a bridal designer masterpiece.",
            image: "/assets/wedding-dresses/model d/3f.jpg",
          },
        ],
      },
      {
        title: "Back View",
        stages: [
          {
            index: 1,
            title: "First Stage",
            description:
              "The structured fit at the back takes shape with an angular silhouette, deep anchoring for fabric, and initial lacework.",
            image: "/assets/wedding-dresses/model d/1b.jpg",
          },
          {
            index: 2,
            title: "Second Stage",
            description:
              "Hand-crafted lace patterns and sheer fabric overlay enhance the bodice, adding texture and a refined silhouette.",
            image: "/assets/wedding-dresses/model d/2b.jpg",
          },
          {
            index: 3,
            title: "Third Stage",
            description:
              "Meticulous embroidery extends from the lower back to the train, sculpting a dramatic, memorable style transformation into a breathtaking masterpiece.",
            image: "/assets/wedding-dresses/model d/3b.jpg",
          },
        ],
      },
    ],
    final: {
      title: "From Sketch to Reality - The Final Masterpiece",
      desc: "A stunning showcase of the dress's transformation from concept to reality, blending precision, fabric choice, and artistic vision into an exquisite final piece.",
      video: {
        front: "/assets/wedding-dresses/model d/final1.mp4",
        back: "/assets/wedding-dresses/model d/final2.mp4",
      },
    },
  },
];

export default function FeaturedProject() {
  const [selectProjectIndex, setSelectedProjectIndex] = useState<number | null>(
    null
  );

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [cardHieght, setCardHieght] = useState<string>(`max-h-36`);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCardHieght(
      windowWidth < 420
        ? `max-h-44`
        : windowWidth < 640
        ? `max-h-36`
        : `max-h-28`
    );
  }, [windowWidth]);

  return (
    <Section id="project">
      <div className="max-w-[1054px] mx-auto">
        {/* Title and Intro */}
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

        <div className="space-y-8">
          {models.map((model, modelIndex) => (
            <button
              key={modelIndex}
              className={`text-left space-y-12 transition-all border-b duration-300 overflow-hidden ${
                selectProjectIndex === modelIndex ? `max-h-auto` : cardHieght
              }`}
              onClick={() =>
                setSelectedProjectIndex((prev) =>
                  prev === modelIndex ? null : modelIndex
                )
              }
            >
              {/* Model Title and Description */}
              <div className="text-left">
                <div className="flex justify-between items-start gap-1 ">
                  <h3 className="font-semibold text-gray-600">{model.title}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-10 h-10 transition ${
                      selectProjectIndex === modelIndex ? `rotate-180` : ``
                    }`}
                  >
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mt-2 mb-6">{model.description}</p>
              </div>

              <div className="mt-8 space-y-12">
                {/* Views (Front & Back) */}
                {model.views.map((view, viewIndex) => (
                  <div key={viewIndex}>
                    <h4 className="font-semibold text-gray-600">
                      {viewIndex + 1}. {view.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      {view.stages.map((stage) => (
                        <div key={stage.index} className="">
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
                            <h5 className="font-semibold text-gray-600 mt-2">
                              {stage.title}
                            </h5>
                            <p className="text-gray-600 text-sm mt-1">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 w-full h-[.1px] bg-[#d9d9d9]"></div>
                  </div>
                ))}
              </div>

              <div className="">
                <h4 className="text-xl font-semibold text-gray-600">
                  3. {model.final.title}
                </h4>
                <p className="text-gray-600 mt-2">{model.final.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Front View Video */}
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <video controls className="w-full h-[298px] rounded-md">
                      <source src={model.final.video.front} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Back View Video */}
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <video controls className="w-full h-[298px] rounded-md">
                      <source src={model.final.video.back} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
