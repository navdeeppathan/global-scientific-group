import { Phone, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Editorial = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <EditorialBoardPage />
    </div>
  );
};

export default Editorial;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          Editorial <span className="text-[#01D4FF]">Board</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Our editorial board comprises distinguished scholars and researchers
          from leading institutions worldwide, ensuring the highest standards of
          academic excellence and peer review quality.
        </p>
      </div>
    </div>
  );
}

function EditorialBoardPage() {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10 space-y-10">
      {/* ================= EDITOR IN CHIEF ================= */}
      <section>
        <h2 className="text-[18px] font-semibold text-[#133C49] mb-4 border-l-2 border-[#00D4FF] pl-3">
          Editor-in-Chief
        </h2>

        <div className="bg-[#123F47] text-white rounded-xl p-6">
          <h3 className="text-[18px] font-semibold">
            Prof. Dr. James Mitchell
          </h3>

          <p className="text-[#00D4FF] text-[13px] mt-1">
            Prof. Dr. James Mitchell
          </p>

          <p className="text-[12px] text-[#CFE6EC] mt-1">
            Department of Mechanical Engineering <br />
            Massachusetts Institute of Technology, USA
          </p>

          <p className="text-[12px] text-[#CFE6EC] mt-3 max-w-3xl">
            Professor Mitchell is a distinguished researcher with over 30 years
            of experience in engineering sciences...
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {[
              "Mechanical Engineering",
              "Material Science",
              "Manufacturing",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-[3px] border border-[#00D4FF] text-[#00D4FF] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[12px] mt-3 text-[#00D4FF]">
            editor@publications.org
          </p>
        </div>
      </section>

      {/* ================= ASSOCIATE EDITORS ================= */}
      <section>
        <h2 className="text-[18px] font-semibold text-[#133C49] mb-4 border-l-2 border-[#00D4FF] pl-3">
          Associate Editors
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {["DS", "PM", "DE", "DS"].map((init, i) => (
            <div
              key={i}
              className="bg-[#CFE3EA] rounded-xl p-5 flex gap-4 items-center"
            >
              {/* AVATAR */}
              <div className="w-[50px] h-[50px] bg-[#1F6F82] text-white rounded-full flex items-center justify-center font-semibold">
                {init}
              </div>

              {/* INFO */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  Dr. Example Name
                </h3>

                <p className="text-[12px] text-[#00AEEF]">Associate Editor</p>

                <p className="text-[12px] text-[#4A6B73]">University Name</p>

                <div className="flex gap-2 mt-1 flex-wrap">
                  <span className="text-[10px] bg-[#E6F3F7] px-2 py-[2px] rounded">
                    AI/ML
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION EDITORS ================= */}
      <section>
        <h2 className="text-[18px] font-semibold text-[#133C49] mb-4 border-l-2 border-[#00D4FF] pl-3">
          Section Editors
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["DP", "PE", "DA", "DP", "PE", "DA"].map((init, i) => (
            <div
              key={i}
              className="bg-[#CFE3EA] rounded-xl p-5 flex gap-4 items-center"
            >
              <div className="w-[60px] h-[60px] bg-[#1F6F82] text-white rounded-full flex items-center justify-center text-[18px] font-semibold">
                {init}
              </div>

              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  Dr. Name
                </h3>

                <p className="text-[12px] text-[#4A6B73]">
                  University / Country
                </p>

                <p className="text-[12px] text-[#00AEEF] mt-1">
                  Specialization
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REVIEW BOARD ================= */}
      <section>
        <h2 className="text-[18px] font-semibold text-[#133C49] mb-4 border-l-2 border-[#00D4FF] pl-3">
          Review Board
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-[#CFE3EA] rounded-xl p-4">
              <h3 className="text-[13px] font-semibold text-[#133C49]">
                Dr. Name
              </h3>

              <p className="text-[12px] text-[#4A6B73] mt-1">University</p>

              <p className="text-[12px] text-[#4A6B73]">Country</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#123F47] text-white text-center rounded-2xl p-8">
        <h2 className="text-[18px] font-semibold mb-3">
          Join Our Editorial Team
        </h2>

        <p className="text-[13px] text-[#A9C7CE] max-w-xl mx-auto mb-5">
          We are always looking for qualified reviewers and editors to join our
          team.
        </p>

        <button className="bg-[#00D4FF] text-black px-5 py-2 rounded-full text-[13px]">
          Contact Editorial Office
        </button>
      </section>
    </div>
  );
}
