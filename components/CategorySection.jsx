// components/CategorySection.jsx
import Image from "next/image";

const categories = [
  {
    title: "AI-Enhanced Merchandising Suite",
    description:
      "Leverage AI to optimize visual merchandising, generate product imagery, and predict fashion trends.",
    image: "/AI_Enhanced_Merchandising_Suite.png",
  },
  {
    title: "AI-Automated Sales & Marketing",
    description:
      "Empower your marketing with autonomous AI agents that handle SEO, campaigns, and customer engagement.",
    image: "/AI_Automated_Sales_and_Marketing.png",
  },
  {
    title: "Ecommercification",
    description:
      "Transform your brand into a digital-first business with intelligent storefront automation.",
    image: "/Ecommercification.png",
  },
];

export default function CategorySection() {
  return (
   <section id="categories" className="py-20 bg-gradient-to-b from-gray-50 to-white w-full">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
      Explore Our AI-Powered Categories
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <Image
            src={category.image}
            alt={category.title}
            width={400}
            height={250}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition">
              {category.title}
            </h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
