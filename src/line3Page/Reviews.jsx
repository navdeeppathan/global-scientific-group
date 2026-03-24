import { Phone, Mail, MessageCircle, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <ReviewerSection />
    </div>
  );
};

export default Reviews;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          For <span className="text-[#01D4FF]">Reviewers</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Join our global community of peer reviewers and contribute to
          advancing scientific knowledge.
        </p>
      </div>
    </div>
  );
}

function ReviewerSection() {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-12 space-y-12">
      {/* ================= WHY REVIEW ================= */}
      <section className="text-center">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-[#133C49] mb-6">
          Why Review for Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {["Recognition", "Networking", "Stay Current", "Impact"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#CFE3EA] border border-[#BFD6DE] rounded-xl p-5 text-center"
              >
                <div className="w-[42px] h-[42px] bg-[#E6F3F7] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Link className="w-5 h-5 text-[#00AEEF]" />
                </div>

                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4A6B73] mt-2">
                  Short description about {title.toLowerCase()} benefits.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ================= REVIEW PROCESS ================= */}
      <section className="bg-[#123F47] text-white rounded-2xl p-6 md:p-10">
        <h2 className="text-[20px] font-semibold mb-8">The Review Process</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Invitation", "Review", "Submit Report", "Decision"].map(
            (step, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-[#00D4FF] text-black rounded-full flex items-center justify-center mx-auto mb-3 font-semibold">
                  {i + 1}
                </div>

                <h4 className="text-[13px] font-semibold">{step}</h4>

                <p className="text-[12px] text-[#A9C7CE] mt-1">
                  Step description goes here.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ================= REVIEWER GUIDELINES ================= */}
      <section>
        <h2 className="text-[22px] font-semibold text-[#133C49] mb-6 text-center">
          Reviewer Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="bg-[#CFE3EA] rounded-xl p-5">
            <h3 className="text-[14px] font-semibold text-[#133C49] mb-3">
              What to Evaluate
            </h3>

            <ul className="text-[13px] text-[#4A6B73] space-y-2">
              {[
                "Originality and significance",
                "Scientific rigor",
                "Clarity of writing",
                "Data adequacy",
                "Relevance to scope",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#00D4FF]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-[#CFE3EA] rounded-xl p-5">
            <h3 className="text-[14px] font-semibold text-[#133C49] mb-3">
              Providing Feedback
            </h3>

            <ul className="text-[13px] text-[#4A6B73] space-y-2">
              {[
                "Be constructive and objective",
                "Support with evidence",
                "Differentiate issues",
                "Suggest improvements",
                "Maintain confidentiality",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#00D4FF]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#123F47] text-white rounded-xl p-5 text-center">
        <h3 className="text-[16px] font-semibold mb-3">Review Timeline</h3>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-[13px] text-[#A9C7CE]">
          <span>Accept invitation: 3 days</span>
          <span>Complete review: 14–21 days</span>
          <span>Revision review: 7–14 days</span>
        </div>
      </section>

      {/* ================= ETHICAL ================= */}
      <section>
        <h2 className="text-[22px] font-semibold text-[#133C49] mb-6 text-center">
          Ethical Standards
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {["Confidentiality", "Objectivity", "Conflict of Interest"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#CFE3EA] border border-[#BFD6DE] rounded-xl p-5"
              >
                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4A6B73] mt-2">
                  Description for {title.toLowerCase()}.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#123F47] text-center text-white rounded-2xl p-8">
        <h2 className="text-[20px] font-semibold mb-3">Become a Reviewer</h2>

        <p className="text-[13px] text-[#A9C7CE] mb-5 max-w-xl mx-auto">
          If you are an experienced researcher, apply to become a reviewer.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#00D4FF] text-black px-5 py-2 rounded-full text-[13px]">
            Register as Reviewer
          </button>

          <button className="border border-[#2E5C66] px-5 py-2 rounded-full text-[13px] hover:bg-[#2E5C66]">
            View Editorial Board
          </button>
        </div>
      </section>
    </div>
  );
}
