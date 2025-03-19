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

export const models: Model[] = [
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
