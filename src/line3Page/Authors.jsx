import { Phone, Mail, MessageCircle, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <AuthorGuidelinesPage />
    </div>
  );
};

export default Authors;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          Author <span className="text-[#01D4FF]">Guidelines</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Complete instructions for preparing and submitting your manuscript to
          our journals.
        </p>
      </div>
    </div>
  );
}

function AuthorGuidelinesPage() {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* ================= LEFT SIDEBAR ================= */}
        <div className="bg-[#123F47] text-white rounded-xl p-5 w-full md:w-[240px] h-fit sticky top-20">
          <h3 className="text-[14px] font-semibold mb-4">Contents</h3>

          <ul className="space-y-2 text-[13px] text-[#CFE6EC]">
            {[
              "Manuscript Types",
              "Manuscript Preparation",
              "Article Structure",
              "References",
              "Figures & Tables",
              "Ethical Guidelines",
              "Submission Process",
              "Templates",
            ].map((item, i) => (
              <li key={i} className="hover:text-[#00D4FF] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 space-y-10">
          {/* ================= Manuscript Types ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Manuscript Types
            </h2>

            {[
              "Original Research Articles",
              "Review Articles",
              "Short Communications",
              "Case Studies",
            ].map((title, i) => (
              <div key={i} className="bg-[#CFE3EA] rounded-xl p-5 mb-4">
                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  {title}
                </h3>
                <p className="text-[12px] text-[#4A6B73] mt-1">
                  Lorem ipsum description of the manuscript type goes here.
                </p>
              </div>
            ))}
          </section>

          {/* ================= Manuscript Preparation ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Manuscript Preparation
            </h2>

            <div className="bg-[#CFE3EA] rounded-xl p-6 space-y-6">
              {/* File Format */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49] mb-2">
                  File Format
                </h3>
                <ul className="space-y-2 text-[13px] text-[#4A6B73]">
                  {[
                    "Submit manuscripts in Microsoft Word (.doc/.docx)",
                    "A4 page size with 2.5 cm margins",
                    "12pt Times New Roman",
                    "1.5 line spacing",
                    "Continuous line numbering",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-500">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Title Page */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49] mb-2">
                  Title Page
                </h3>
                <ul className="text-[13px] text-[#4A6B73] space-y-1 list-disc pl-4">
                  <li>Full title of manuscript</li>
                  <li>Running title</li>
                  <li>Author details</li>
                  <li>Email of corresponding author</li>
                </ul>
              </div>

              {/* Abstract */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49] mb-2">
                  Abstract
                </h3>
                <ul className="text-[13px] text-[#4A6B73] space-y-1 list-disc pl-4">
                  <li>250–300 words structured abstract</li>
                  <li>Include Background, Methods, Results, Conclusion</li>
                  <li>No citations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ================= Article Structure ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Article Structure
            </h2>

            <div className="bg-[#CFE3EA] rounded-xl p-6 space-y-4">
              {["Introduction", "Methods", "Results", "Discussion"].map(
                (item, i) => (
                  <div key={i} className="border-l-2 border-[#00D4FF] pl-3">
                    <h4 className="text-[14px] font-semibold text-[#133C49]">
                      {item}
                    </h4>
                    <p className="text-[12px] text-[#4A6B73]">
                      Description for {item}.
                    </p>
                  </div>
                ),
              )}
            </div>
          </section>

          {/* ================= References ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              References
            </h2>

            <div className="bg-[#CFE3EA] rounded-xl p-6">
              <p className="text-[13px] text-[#4A6B73] mb-4">
                Use APA 7th edition citation style.
              </p>

              <div className="bg-[#E6F3F7] p-4 rounded-lg text-[12px] text-[#4A6B73] space-y-2">
                <p>
                  <b>Journal Article:</b> Author, A. (Year)...
                </p>
                <p>
                  <b>Book:</b> Author, A. (Year)...
                </p>
                <p>
                  <b>Conference:</b> Author, A. (Year)...
                </p>
              </div>
            </div>
          </section>

          {/* ================= Submission Process ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Submission Process
            </h2>

            <div className="bg-[#CFE3EA] rounded-xl p-6 space-y-4">
              {[
                "Create Account",
                "Prepare Manuscript",
                "Submit Online",
                "Track Progress",
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-[#00D4FF] text-black rounded-full flex items-center justify-center text-[12px] font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-[13px] text-[#4A6B73]">{step}</p>
                </div>
              ))}

              <button className="mt-4 bg-[#00D4FF] text-black px-5 py-2 rounded-full text-[13px]">
                Submit Manuscript Now
              </button>
            </div>
          </section>

          {/* ================= Templates ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Downloadable Templates
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Manuscript Template",
                "Cover Letter",
                "Figure Guidelines",
                "Ethics Form",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#CFE3EA] rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-[13px] font-medium text-[#133C49]">
                      {item}
                    </p>
                    <p className="text-[11px] text-[#4A6B73]">Document</p>
                  </div>

                  <button className="flex items-center gap-1 bg-[#00D4FF] px-3 py-1 rounded-full text-[12px]">
                    <Download size={14} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
