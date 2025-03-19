import Section from "./Section";

const services = [
  {
    name: "Wedding Gowns",
    description:
      "Every gown is customized to meet your unique needs, ensuring a focused and effective bridal experience.",
    icon: "👗",
  },
  {
    name: "Bridal Robe",
    description:
      "Luxurious robes designed for comfort and elegance on your special day.",
    icon: "💍",
  },
  {
    name: "Traditional Marriage Outfits",
    description:
      "Our qualified designers provide safe, top-professional space to help you explore rich traditions.",
    icon: "🎎",
  },
  {
    name: "Ladies Office Wear",
    description: "Workwear designed for confidence and professionalism.",
    icon: "👩‍💼",
  },
  {
    name: "Slit & Kaba",
    description:
      "Custom-tailored African wear to complement your beauty and culture.",
    icon: "🌍",
  },
  {
    name: "Jump Suits",
    description:
      "Trendy, stylish, and comfortable jumpsuits for every occasion.",
    icon: "🕺",
  },
  {
    name: "Children's Outfit",
    description:
      "Adorable and comfortable outfits for kids to shine in everyday life.",
    icon: "🧒",
  },
];

export default function Services() {
  return (
    <Section sectionClassName="bg-[var(--primary)]">
      <div className="text-center">
        <h2 className="text-3xl max-w-3xl mx-auto font-semibold text-[var(--background)]">
          Our Services - Crafted for Style, Designed for You Crafting Elegance,
          Stitch by Stitch
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white/10 hover:bg-white/20 p-6 rounded-xl border border-[#eaeaff50]"
          >
            <div className="text-2xl">{service.icon}</div>
            <h3 className="text-xl font-medium text-white mt-4">
              {service.name}
            </h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
