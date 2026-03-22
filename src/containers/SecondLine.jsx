import React from "react";
import Header from "../line2Components/Header";
import Home from "../line2Page/Home";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import ScientificCommittee from "../line2Page/ScientificCommittee";
import OurSpeaker from "../line2Page/OurSpeaker";
import SpeakerDetails from "../line2Page/SpeakerDetails";
import ScientificProgramme from "../line2Page/ScientificProgramme";
import SessionDetails from "../line2Page/SessionDetails";
import Brochure from "../line2Page/Brochure";

const SecondLine = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scientific-committee" element={<ScientificCommittee />} />
        <Route path="/speakers" element={<OurSpeaker />} />
        <Route path="/speaker-details" element={<SpeakerDetails />} />
        <Route path="/program" element={<ScientificProgramme />} />
        <Route path="/program-details" element={<SessionDetails />} />
        <Route path="/brochure" element={<Brochure />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default SecondLine;
