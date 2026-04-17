const team = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Founder, Info Technologies",
    designation: "Keynote Speaker",

    image: "/t3.png",
  },
  {
    id: 2,
    name: "Neha P",
    role: "Founder, Info Technologies",
    designation: "Invited Speaker",

    image: "/t3.png",
  },
  {
    id: 3,
    name: "Aryan",
    role: "Founder, Info Technologies",
    designation: "Session Chair",

    image: "/t3.png",
  },
  {
    id: 4,
    name: "Joyce",
    role: "Founder, Info Technologies",
    designation: "Keynote Speaker",
    image: "/t3.png",
  },
];

import React from "react";
import { useNavigate } from "react-router-dom";

const TeamSectionSpeaker = ({ data }) => {
  return (
    <div>
      <TeamSectionSpeaker1
        data={data?.keynote_speakers}
        slug={data?.conference.slug}
      />
      <TeamSectionSpeaker2 data={data?.speakers} />
    </div>
  );
};

export default TeamSectionSpeaker;

// function TeamSectionSpeaker1({ data = [] }) {
//   const navigate = useNavigate();
//   return (
//     <section className=" py-16 px-6 md:px-16 text-white">
//       <div className="max-w-7xl mx-auto ">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
//           Keynote Speakers
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {team.map((member) => (
//             <div
//               key={member.id}
//               onClick={() =>
//                 navigate(`/conference/speaker-details?id=${member.id}`)
//               }
//               className="bg-[#133C49]  rounded-t-full pt-6 pb-6 px-4 text-center"
//             >
//               {/* Arch Image Container */}
//               <div className="w-full flex justify-center mb-4">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

//               {/* Role */}
//               <p className="text-[14px] text-[#FFFFFF]/70">{member.role}</p>
//               <p className="text-[14px] text-[#FFFFFF]">{member.designation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TeamSectionSpeaker1({ data = [], slug }) {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
          Keynote Speakers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((member) => (
            <div
              key={member.id}
              onClick={() =>
                navigate(`/conference/${slug}/speaker-details?id=${member.id}`)
              }
              className="bg-[#133C49] rounded-t-full pt-6 pb-6 px-4 text-center cursor-pointer"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-[200px] object-cover rounded-t-full"
                />
              </div>

              <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

              <p className="text-[14px] text-white/70">{member.designation}</p>

              <p className="text-[14px] text-white">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// function TeamSectionSpeaker2({ data = [] }) {
//   return (
//     <section className=" py-16 px-6 md:px-16 text-white">
//       <div className="max-w-7xl mx-auto ">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
//           Speakers
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {team.map((member) => (
//             <div
//               key={member.id}
//               className="bg-[#133C49]  rounded-t-full pt-6 pb-6 px-4 text-center"
//             >
//               {/* Arch Image Container */}
//               <div className="w-full flex justify-center mb-4">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

//               {/* Role */}
//               <p className="text-[14px] text-[#FFFFFF]/70">{member.role}</p>
//               <p className="text-[14px] text-[#FFFFFF]">{member.designation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TeamSectionSpeaker2({ data = [] }) {
  return (
    <section className="py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
          Speakers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((member) => (
            <div
              key={member.id}
              className="bg-[#133C49] rounded-t-full pt-6 pb-6 px-4 text-center"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-[200px] object-cover rounded-t-full"
                />
              </div>

              <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

              <p className="text-[14px] text-white/70">{member.designation}</p>

              <p className="text-[14px] text-white">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
