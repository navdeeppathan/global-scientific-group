import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../line3Page/Home";
import Header from "../line3Components/Header";
import Footer from "../line3Components/Footer";
import Journals from "../line3Page/Journals";
import AboutJournals from "../line3Page/AboutJournals";
import Subject from "../line3Page/Subject";
import Authors from "../line3Page/Authors";
import Reviews from "../line3Page/Reviews";
import Editorial from "../line3Page/Editorial";
import SubmitManuscript from "../line3Page/SubmitMenuscript";
import ArticleDetailPage from "../line3Page/ArticleDetailPage";
import http from "../service/http";

const ThirdLine = () => {
  const [journals, setJournals] = useState(null);
  const [journalsHome, setJournalsHome] = useState(null);

  useEffect(() => {
    const fetchCommon = async () => {
      try {
        const resJournals = await http.get(`/journals/all/`);
        const resHomeJournals = await http.get(`/journals`);
        console.log(resJournals.data);

        setJournals(resJournals.data);

        setJournalsHome(resHomeJournals.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCommon();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home homedata={journalsHome} />} />
        <Route
          path="/all-journals"
          element={<Journals journals={journals} />}
        />
        <Route path="/about-journals" element={<AboutJournals />} />
        <Route path="/subjects" element={<Subject data={journals} />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/reviewers" element={<Reviews />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/article-details" element={<ArticleDetailPage />} />

        <Route path="/submit-manuscript" element={<SubmitManuscript />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default ThirdLine;
