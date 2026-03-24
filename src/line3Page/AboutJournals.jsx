import { Phone, Mail, MessageCircle, Download, Link } from "lucide-react";
import { useState } from "react";

const AboutJournals = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <JournalDetails />
    </div>
  );
};

export default AboutJournals;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] px-6 md:px-16 py-16 border-b border-[#2C5B63] pt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* LEFT IMAGE */}
        <div className="w-[200px] h-[286px] bg-[#D9D9D9] rounded-xl shrink-0"></div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* TAGS */}
          <div className="flex gap-2 mb-3">
            <span className="text-[12px] px-[12px] py-[8px] border border-[#01D4FF] text-[#01D4FF] rounded-[8px]">
              Medical Science
            </span>

            <span className="text-[12px] px-[12px] py-[8px] border border-[#0BD400] text-[#0BD400] rounded-[8px]">
              Open Access
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-[26px] md:text-[32px] font-semibold text-white leading-snug">
            International Journal of Advanced Engineering Research
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
            A peer-reviewed journal covering all aspects of engineering sciences
            including mechanical, civil, electrical, and chemical engineering.
          </p>

          {/* META INFO */}
          <div className="flex flex-wrap gap-6 mt-4 text-[14px] text-[#FFFFFF]/70">
            <span>
              <img src="/global.png" alt="" className="inline mr-1" />{" "}
              Publisher: Global Scientific Publications
            </span>
            <span>
              <img src="/bluecalendar.png" alt="" className="inline mr-1" />{" "}
              Frequency: Monthly
            </span>
          </div>

          {/* ISSN */}
          <div className="mt-2 text-[14px] text-[#FFFFFF]/70">
            ISSN (Online): 2456-7890 &nbsp; ISSN (Print): 2456-7889
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="bg-[#01D4FF]  text-[#072A41] text-[14px] px-[12px] py-[8px] rounded-[12px] font-medium hover:opacity-90">
              Submit Manuscript
            </button>

            <button className="border border-[#01D4FF] text-[#01D4FF] text-[14px] px-[12px] py-[8px] rounded-[12px] hover:bg-[#00D4FF] hover:text-black transition">
              Download Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JournalDetails() {
  return (
    <div className="">
      {/* ================= STATS BAR ================= */}
      <div className="bg-[#133C49] text-center py-6 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
          {[
            { value: "3.245", label: "Impact Factor" },
            { value: "42", label: "H-Index" },
            { value: "4.8", label: "Citation Score" },
            { value: "32%", label: "Acceptance Rate" },
            { value: "4-6 weeks", label: "Review Time" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[#01D4FF] text-[22px] md:text-[34px] font-semibold">
                {item.value}
              </p>
              <p className="text-[12px] md:text-[18px] text-[#FFFFFF] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}
      <JournalSection />
    </div>
  );
}

function JournalSection() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = [
    "About",
    "Aim & Scope",
    "Editorial Board",
    "Articles",
    "Author Guidelines",
    "Indexing & Metrics",
  ];

  return (
    <div className="px-6 md:px-16 py-10 ">
      <div className="max-w-7xl mx-auto">
        {/* ================= TABS ================= */}
        <div className="bg-[#133C49] border border-[#235262] inline-flex rounded-[16px] p-[16px] mb-8 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[16px] py-[8px] text-[14px] rounded-[12px] transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#072A41] text-[#01D4FF]"
                  : "text-[#FFFFFF] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        {activeTab === "About" && (
          <div>
            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#133C49] mb-4">
              About the Journal
            </h2>

            <p className="text-[14px] md:text-[18px] text-[#133C49] mb-4 ">
              A peer-reviewed journal covering all aspects of engineering
              sciences including mechanical, civil, electrical, and chemical
              engineering.
            </p>

            <p className="text-[14px] md:text-[18px] text-[#133C49]">
              The journal follows a rigorous double-blind peer review process to
              ensure the highest quality of published research. We are committed
              to rapid publication while maintaining academic integrity and
              ethical publishing standards.
            </p>
          </div>
        )}

        {activeTab === "Aim & Scope" && (
          <div>
            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#133C49] mb-4">
              Aims & Scope
            </h2>

            <p className="text-[14px] md:text-[18px] text-[#133C49] mb-4 ">
              The journal aims to provide a platform for researchers, engineers,
              and academicians to share their innovative findings.
            </p>

            <ul className="space-y-1 text-[#133C49] text-[14px] md:text-[18px]">
              {[
                "Mechanical Engineering",
                "Civil and Structural Engineering",
                "Electrical and Electronics Engineering",
                "Chemical and Process Engineering",
                "Materials Science",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Editorial Board" && <EditorialBoard />}
        {activeTab === "Articles" && <ArticlesSection />}
        {activeTab === "Author Guidelines" && <AuthorGuidelines />}
        {activeTab === "Indexing & Metrics" && <IndexingMetrics />}
      </div>
    </div>
  );
}

function EditorialBoard() {
  const members = [
    {
      name: "Prof. Dr. James Mitchell",
      role: "Editor-in-Chief",
      uni: "MIT",
      country: "USA",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Associate Editor",
      uni: "Tsinghua University",
      country: "China",
    },
    {
      name: "Prof. Michael Weber",
      role: "Associate Editor",
      uni: "TU Munich",
      country: "Germany",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Section Editor",
      uni: "IIT Delhi",
      country: "India",
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Section Editor",
      uni: "UC Barcelona",
      country: "Spain",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Reviewer",
      uni: "Cairo University",
      country: "Egypt",
    },
  ];

  return (
    <div>
      {/* TITLE */}
      <h2 className="text-[26px] md:text-[36px] font-semibold text-[#133C49] mb-6">
        Editorial Board
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-[#CFE3EA] rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-[44px] h-[44px] bg-[#E6F3F7] rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-[#00AEEF]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 14a4 4 0 10-8 0" />
                <circle cx="12" cy="7" r="3" />
              </svg>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[15px] font-semibold text-[#133C49]">
                {m.name}
              </h3>

              <p className="text-[12px] text-[#00AEEF] mt-1">{m.role}</p>

              <p className="text-[12px] text-[#4A6B73] mt-1">{m.uni}</p>

              <p className="text-[12px] text-[#4A6B73]">{m.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticlesSection() {
  const articles = [
    {
      title:
        "Machine Learning Approaches for Predictive Maintenance in Industrial Systems",
      authors: "J. Smith, M. Johnson, K. Lee",
    },
    {
      title: "Sustainable Construction Materials: A Comprehensive Review",
      authors: "A. Brown, L. Garcia",
    },
    {
      title: "Optimization of Renewable Energy Systems Using Deep Learning",
      authors: "R. Zhang, S. Kumar, T. Williams",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* ================= LEFT SIDEBAR ================= */}
      <div className="bg-[#123F47] text-white rounded-xl p-5 w-full md:w-[260px] h-fit">
        <h3 className="text-[15px] font-semibold mb-4">Browse by Volume</h3>

        {/* YEAR BLOCK */}
        {["2025", "2024", "2023"].map((year, i) => (
          <div key={i} className="mb-5 text-[13px]">
            <p className="text-[#9EC3CC] font-medium mb-2">{year}</p>

            <div className="space-y-1">
              <p className="hover:text-[#00D4FF] cursor-pointer">
                Vol 15, Issue 12
              </p>
              <p className="hover:text-[#00D4FF] cursor-pointer">
                Vol 15, Issue 11
              </p>
              <p className="hover:text-[#00D4FF] cursor-pointer">
                Vol 15, Issue 10
              </p>

              <p className="text-[#00D4FF] text-[12px] mt-1 cursor-pointer">
                View all issues...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex-1">
        <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
          Recent Articles
        </h2>

        {/* ARTICLES LIST */}
        <div className="space-y-4">
          {articles.map((a, i) => (
            <div
              key={i}
              className="bg-[#CFE3EA] rounded-xl p-5 hover:shadow-md transition"
            >
              {/* TITLE */}
              <h3 className="text-[15px] font-semibold text-[#133C49]">
                {a.title}
              </h3>

              {/* AUTHORS */}
              <p className="text-[12px] text-[#00AEEF] mt-1">{a.authors}</p>

              {/* META */}
              <p className="text-[12px] text-[#4A6B73] mt-2">
                December 2025 &nbsp; Vol 15, Issue 12 &nbsp; pp. 145-162 &nbsp;
                <span className="text-[#00AEEF] cursor-pointer">
                  DOI: 10.1234/ijaer.2025.12.145
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-6">
          <button className="border border-[#00AEEF] text-[#00AEEF] px-5 py-2 rounded-full text-[13px] hover:bg-[#00AEEF] hover:text-white transition">
            View all Articles
          </button>
        </div>
      </div>
    </div>
  );
}

function AuthorGuidelines() {
  return (
    <div>
      {/* CARD */}
      <div className="bg-[#CFE3EA] rounded-xl p-6 md:p-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-[22px] md:text-[26px] font-semibold text-[#133C49]">
            Author Guidelines
          </h2>

          <button className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-[#00D4FF] text-black px-4 py-2 rounded-full text-[13px] font-medium hover:opacity-90">
            <Download size={16} />
            Download Template
          </button>
        </div>

        {/* ================= SECTION 1 ================= */}
        <div className="mb-6">
          <h3 className="text-[16px] font-semibold text-[#133C49] mb-2">
            Manuscript Preparation
          </h3>

          <ul className="text-[13px] text-[#4A6B73] space-y-1 pl-4 list-disc">
            <li>
              Manuscripts should be prepared in Microsoft Word format (.doc or
              .docx)
            </li>
            <li>Use 12-point Times New Roman with 1.5 line spacing</li>
            <li>Include abstract (250–300 words) and 5–7 keywords</li>
            <li>Follow IMRaD structure for research articles</li>
          </ul>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="mb-6">
          <h3 className="text-[16px] font-semibold text-[#133C49] mb-2">
            Submission Requirements
          </h3>

          <ul className="text-[13px] text-[#4A6B73] space-y-1 pl-4 list-disc">
            <li>Cover letter addressed to the Editor-in-Chief</li>
            <li>Declaration of originality and ethics compliance</li>
            <li>Author contributions statement</li>
            <li>Conflict of interest disclosure</li>
          </ul>
        </div>

        {/* ================= SECTION 3 ================= */}
        <div>
          <h3 className="text-[16px] font-semibold text-[#133C49] mb-2">
            Reference Style
          </h3>

          <p className="text-[13px] text-[#4A6B73]">
            Use APA 7th edition citation style for all references.
          </p>
        </div>
      </div>
    </div>
  );
}

function IndexingMetrics() {
  const indexes = [
    "Scopus",
    "Web of Science",
    "DOAJ",
    "Google Scholar",
    "CrossRef",
  ];

  return (
    <div>
      {/* MAIN CARD */}
      <div className="bg-[#CFE3EA] rounded-xl p-6 md:p-8">
        {/* ================= INDEXING ================= */}
        <h2 className="text-[22px] md:text-[26px] font-semibold text-[#133C49] mb-6">
          Indexing & Abstracting
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {indexes.map((item, i) => (
            <div
              key={i}
              className="bg-[#DCECF1] rounded-xl p-5 flex flex-col items-center justify-center text-center hover:shadow-sm transition"
            >
              {/* ICON */}
              <div className="w-[40px] h-[40px] bg-[#CFE3EA] rounded-lg flex items-center justify-center mb-3">
                <Link className="w-5 h-5 text-[#00AEEF]" />
              </div>

              {/* TEXT */}
              <p className="text-[13px] font-medium text-[#133C49]">{item}</p>
            </div>
          ))}
        </div>

        {/* ================= METRICS ================= */}
        <h3 className="text-[18px] font-semibold text-[#133C49] mb-4">
          Journal Metrics
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {/* METRIC CARD */}
          <div className="bg-[#DCECF1] rounded-xl p-5">
            <p className="text-[13px] text-[#4A6B73] mb-2">
              Impact Factor (2024)
            </p>
            <p className="text-[20px] font-semibold text-[#00AEEF]">3.245</p>
          </div>

          {/* METRIC CARD */}
          <div className="bg-[#DCECF1] rounded-xl p-5">
            <p className="text-[13px] text-[#4A6B73] mb-2">H-Index</p>
            <p className="text-[20px] font-semibold text-[#00AEEF]">42</p>
          </div>
        </div>
      </div>
    </div>
  );
}
