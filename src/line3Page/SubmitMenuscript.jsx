"use client";

import { useState } from "react";
import {
  User,
  FileText,
  Upload,
  AlertCircle,
  Check,
  CheckCircle,
  Send,
  UploadCloud,
} from "lucide-react";

export default function SubmitManuscript() {
  const [step, setStep] = useState(0);

  const steps = [
    { label: "Author Details", icon: User },
    { label: "Manuscript Info", icon: FileText },
    { label: "Upload Files", icon: Upload },
    { label: "Declarations", icon: AlertCircle },
    { label: "Review & Submit", icon: Send },
  ];

  return (
    <div>
      {/* ================= HERO + STEPPER ================= */}
      <div className="bg-[#0B2C36] px-6 md:px-16 py-16 text-center pt-40">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[28px] md:text-[36px] font-semibold text-white">
            Submit Your <span className="text-[#00D4FF]">Manuscript</span>
          </h1>

          <p className="mt-2 text-[#A9C7CE] text-[14px]">
            Complete all steps to submit your research for peer review.
          </p>

          {/* STEPPER */}
          <div className="relative mt-10">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#2C5B63]"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
              {steps.map((stepItem, i) => {
                const Icon = stepItem.icon;
                const isActive = i === step;
                const isCompleted = i < step;

                return (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                        isCompleted || isActive
                          ? "bg-[#00D4FF] text-black"
                          : "bg-[#123F47] text-[#A9C7CE]"
                      }`}
                    >
                      {isCompleted ? <Check size={16} /> : <Icon size={16} />}
                    </div>

                    <p
                      className={`mt-2 text-[12px] ${
                        isCompleted || isActive
                          ? "text-[#00D4FF]"
                          : "text-[#A9C7CE]"
                      }`}
                    >
                      {stepItem.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= STEP CONTENT ================= */}
      {step === 0 && <AuthorDetailsForm onNext={() => setStep(1)} />}
      {step === 1 && (
        <ManuscriptInfoForm
          onNext={() => setStep(2)}
          onPrev={() => setStep(0)}
        />
      )}
      {step === 2 && (
        <UploadFiles onNext={() => setStep(3)} onPrev={() => setStep(1)} />
      )}
      {step === 3 && (
        <Declarations onNext={() => setStep(4)} onPrev={() => setStep(2)} />
      )}
      {step === 4 && <ReviewSubmit onPrev={() => setStep(3)} />}
    </div>
  );
}

{
  /* ================= STEP 1 ================= */
}
function AuthorDetailsForm({ onNext, onPrev }) {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-[#CFE3EA] rounded-2xl p-6 md:p-8 shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] font-semibold text-[#133C49] mb-6">
          Author Details
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* NAME */}
          <div>
            <label className="text-[12px] text-[#133C49] mb-1 block">
              Corresponding Author Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none"
              placeholder="John Smith"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-[12px] text-[#133C49] mb-1 block">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none"
              placeholder="johnsmith@example.com"
            />
          </div>

          {/* INSTITUTION */}
          <div>
            <label className="text-[12px] text-[#133C49] mb-1 block">
              Institution/Affiliation <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none"
              placeholder="Dept. of Engineering, MIT, USA"
            />
          </div>

          {/* ORCID */}
          <div>
            <label className="text-[12px] text-[#133C49] mb-1 block">
              ORCID ID (Optional)
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none"
              placeholder="0000-0002-4853-8029"
            />
          </div>

          {/* CO AUTHORS */}
          <div className="md:col-span-2">
            <label className="text-[12px] text-[#133C49] mb-1 block">
              Co-Authors (if any)
            </label>
            <textarea
              className="w-full px-3 py-3 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none h-[140px]"
              placeholder="List of co-authors with their affiliations, one per line."
            ></textarea>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-[#E6EEF2] text-[#133C49] rounded-lg text-[13px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-5 py-2 bg-[#00D4FF] text-black rounded-lg text-[13px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ================= STEP 2 ================= */
}
function ManuscriptInfoForm({ onNext, onPrev }) {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-[#CFE3EA] rounded-2xl p-6 md:p-8 shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] font-semibold text-[#133C49] mb-6">
          Manuscript Information
        </h2>

        {/* SELECTS */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* JOURNAL */}
          <div>
            <label className="text-[12px] text-[#133C49] mb-1 block">
              Select Journal <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none">
              <option>Choose Journal</option>
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="text-[12px] text-[#133C49] mb-1 block">
              Article Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none">
              <option>Select Type</option>
            </select>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-4">
          <label className="text-[12px] text-[#133C49] mb-1 block">
            Manuscript Title <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none"
            placeholder="Enter the full title of your Manuscript"
          />
        </div>

        {/* ABSTRACT */}
        <div className="mt-4">
          <label className="text-[12px] text-[#133C49] mb-1 block">
            Abstract <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full px-3 py-3 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none h-[140px]"
            placeholder="Provide a structural abstract of your research"
          ></textarea>

          {/* WORD COUNT */}
          <p className="text-[11px] text-[#4A6B73] mt-1">
            0 Words (250–300 words)
          </p>
        </div>

        {/* KEYWORDS */}
        <div className="mt-4">
          <label className="text-[12px] text-[#133C49] mb-1 block">
            Keywords (5–7, comma-separated)
          </label>
          <input
            className="w-full px-3 py-2 rounded-lg bg-[#E6F3F7] border border-[#BFD6DE] text-[13px] outline-none"
            placeholder="Machine Learning, Predictive Maintenance, Industrial Maintenance, IoT"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-[#E6EEF2] text-[#133C49] rounded-lg text-[13px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-5 py-2 bg-[#00D4FF] text-black rounded-lg text-[13px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ================= STEP 3 ================= */
}

function UploadFiles({ onNext, onPrev }) {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-[#CFE3EA] rounded-2xl p-6 md:p-8 shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] font-semibold text-[#133C49] mb-6">
          Upload Files
        </h2>

        {/* ================= CARD 1 ================= */}
        <UploadCard
          title="Manuscript File"
          required
          desc="Upload your manuscript in Word format (.doc, .docx)"
        />

        {/* ================= CARD 2 ================= */}
        <UploadCard
          title="Cover Letter (Optional)"
          desc="A letter addressed to the Editor-in-Chief"
        />

        {/* ================= CARD 3 ================= */}
        <UploadCard
          title="Supplementary Materials (Optional)"
          desc="Figures, data files, or additional materials"
        />

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-[#E6EEF2] text-[#133C49] rounded-lg text-[13px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-5 py-2 bg-[#00D4FF] text-black rounded-lg text-[13px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function UploadCard({ title, desc, required }) {
  return (
    <div className="border-2 border-dashed border-[#BFD6DE] rounded-xl p-8 text-center mb-5 bg-[#D6EAF0]">
      {/* ICON */}
      <div className="flex justify-center mb-3">
        <UploadCloud className="w-6 h-6 text-[#133C49]" />
      </div>

      {/* TITLE */}
      <h3 className="text-[14px] font-semibold text-[#133C49]">
        {title} {required && <span className="text-red-500">*</span>}
      </h3>

      {/* DESC */}
      <p className="text-[12px] text-[#4A6B73] mt-1 mb-3">{desc}</p>

      {/* BUTTON */}
      <label className="inline-block cursor-pointer">
        <input type="file" className="hidden" />
        <span className="px-3 py-1 text-[12px] border border-[#00D4FF] text-[#00D4FF] rounded-full hover:bg-[#00D4FF] hover:text-black transition">
          Choose file
        </span>
      </label>
    </div>
  );
}

{
  /* ================= STEP 4 ================= */
}
function Declarations({ onNext, onPrev }) {
  const items = [
    {
      title: "Original Work Declaration",
      required: true,
      desc: "I confirm that this manuscript is original, has not been published previously, and is not under consideration elsewhere.",
    },
    {
      title: "Conflict of Interest Statement",
      required: true,
      desc: "I declare that there are no conflicts of interest that could influence the research or its reporting.",
    },
    {
      title: "Ethics Compliance",
      required: true,
      desc: "I confirm that appropriate ethical approval was obtained where required, and all participants provided informed consent.",
    },
    {
      title: "Data Availability Statement",
      required: false,
      desc: "I confirm that research data will be made available upon reasonable request.",
    },
    {
      title: "Authorship Agreement",
      required: true,
      desc: "All authors have agreed to the submission and have approved the final version of the manuscript.",
    },
  ];

  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-[#CFE3EA] rounded-2xl p-6 md:p-8 shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] font-semibold text-[#133C49] mb-4">
          Declarations & Ethics
        </h2>

        {/* INFO BOX */}
        <div className="flex items-center gap-2 bg-[#E6EEF2] text-[#133C49] text-[12px] px-4 py-2 rounded-lg mb-5">
          <span className="w-5 h-5 flex items-center justify-center bg-[#00D4FF] text-black rounded-full text-[10px]">
            i
          </span>
          Please carefully read and confirm each declaration. All statements are
          required for submission.
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <label
              key={i}
              className="flex gap-3 items-start bg-[#E6EEF2] p-4 rounded-xl cursor-pointer"
            >
              {/* CHECKBOX */}
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#00D4FF]"
              />

              {/* TEXT */}
              <div>
                <h3 className="text-[13px] font-semibold text-[#133C49]">
                  {item.title}{" "}
                  {item.required && <span className="text-red-500">*</span>}
                </h3>

                <p className="text-[12px] text-[#4A6B73] mt-1">{item.desc}</p>
              </div>
            </label>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-[#E6EEF2] text-[#133C49] rounded-lg text-[13px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-5 py-2 bg-[#00D4FF] text-black rounded-lg text-[13px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ================= STEP 5 ================= */
}

function ReviewSubmit({ onPrev }) {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-[#CFE3EA] rounded-2xl p-6 md:p-8 shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] font-semibold text-[#133C49] mb-6">
          Review Your Submission
        </h2>

        {/* ================= AUTHOR DETAILS ================= */}
        <Section title="Author Details">
          <p>
            <b>Corresponding Author:</b> John Smith
          </p>
          <p>
            <b>Email:</b> johnsmith@gmail.com
          </p>
          <p>
            <b>Institution:</b> Mechanical Engineering, MIT, India
          </p>
        </Section>

        {/* ================= MANUSCRIPT ================= */}
        <Section title="Manuscript Information">
          <p>
            <b>Journal:</b> Journal of Medical Sciences & Clinical Research
          </p>
          <p>
            <b>Article Type:</b> Case Study
          </p>
          <p>
            <b>Title:</b> Test Title
          </p>
        </Section>

        {/* ================= FILES ================= */}
        <Section title="Uploaded Files">
          <div className="space-y-2 text-[13px] text-[#133C49]">
            <FileItem name="sample-abstract-form.docx" />
            <FileItem name="sample-abstract-form.docx" />
          </div>
        </Section>

        {/* ================= DECLARATIONS ================= */}
        <Section title="Declarations">
          <div className="flex items-center gap-2 text-[13px] text-[#133C49]">
            <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
            All required declarations confirmed
          </div>
        </Section>

        {/* ================= NOTE ================= */}
        <div className="bg-[#E6EEF2] text-[12px] text-[#4A6B73] p-3 rounded-lg mt-4">
          By clicking "Submit Manuscript", you agree to the journal’s terms and
          conditions and confirm that all information provided is accurate.
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-[#E6EEF2] text-[#133C49] rounded-lg text-[13px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button className="flex items-center gap-2 px-5 py-2 bg-[#00D4FF] text-black rounded-lg text-[13px] font-medium">
            <Send size={14} />
            Submit Manuscript
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-[#E6EEF2] rounded-xl p-4 mb-4">
      <h3 className="text-[13px] font-semibold text-[#133C49] mb-2">{title}</h3>
      <div className="text-[13px] text-[#4A6B73] space-y-1">{children}</div>
    </div>
  );
}

function FileItem({ name }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
      {name}
    </div>
  );
}

{
  /* ================= COMMON STYLES ================= */
}
const styles = `
.input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #bfd6de;
  font-size: 13px;
}

.btn {
  background: #00d4ff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.btn-gray {
  background: #e5e7eb;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
}
`;
