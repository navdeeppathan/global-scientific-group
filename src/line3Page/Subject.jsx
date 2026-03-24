import { Phone, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "lucide-react";
const Subject = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <CategoriesGrid />
    </div>
  );
};

export default Subject;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          Browse by <span className="text-[#01D4FF]">Subject</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Explore our comprehensive collection of peer-reviewed journals
          organized by academic disciplines.
        </p>
      </div>
    </div>
  );
}

function CategoriesGrid() {
  const categories = [
    {
      title: "Engineering",
      desc: "Mechanical, civil, electrical, chemical, and industrial engineering research",
      journals: 12,
      articles: 3450,
    },
    {
      title: "Medical Science",
      desc: "Clinical medicine, surgery, pharmacology, nursing, and public health",
      journals: 8,
      articles: 2890,
    },
    {
      title: "Life Sciences",
      desc: "Biology, biochemistry, genetics, ecology, and biotechnology",
      journals: 8,
      articles: 1980,
    },
    {
      title: "Medical Science",
      desc: "Clinical medicine, surgery, pharmacology, nursing, and public health",
      journals: 8,
      articles: 2890,
    },
    {
      title: "Life Sciences",
      desc: "Biology, biochemistry, genetics, ecology, and biotechnology",
      journals: 8,
      articles: 1980,
    },
    {
      title: "Engineering",
      desc: "Mechanical, civil, electrical, chemical, and industrial engineering research",
      journals: 12,
      articles: 3450,
    },
  ];

  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-[#CFE3EA] border border-[#BFD6DE] rounded-xl p-5 hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-[42px] h-[42px] bg-[#E6F3F7] rounded-lg flex items-center justify-center mb-3">
              <Link className="w-5 h-5 text-[#00AEEF]" />
            </div>

            {/* TITLE */}
            <h3 className="text-[16px] font-semibold text-[#133C49]">
              {cat.title}
            </h3>

            {/* DESC */}
            <p className="text-[12px] text-[#4A6B73] mt-1">{cat.desc}</p>

            {/* DIVIDER */}
            <div className="border-t border-[#BFD6DE] my-4"></div>

            {/* STATS */}
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <div>
                  <p className="text-[18px] font-semibold text-[#133C49]">
                    {cat.journals}
                  </p>
                  <p className="text-[11px] text-[#4A6B73]">Journals</p>
                </div>

                <div>
                  <p className="text-[18px] font-semibold text-[#133C49]">
                    {cat.articles.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-[#4A6B73]">Articles</p>
                </div>
              </div>

              {/* VIEW LINK */}
              <button className="text-[#00AEEF] text-[12px] font-medium hover:underline">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
