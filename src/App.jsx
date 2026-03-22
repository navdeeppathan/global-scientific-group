import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Gallary from "./pages/Gallary";
import GalleryDetails from "./pages/GalleryDetails";
import FirstLine from "./containers/FirstLine";
import SecondLine from "./containers/SecondLine";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/gallery-details" element={<GalleryDetails />} /> */}

        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main/*" element={<FirstLine />} />
        <Route path="/conference/*" element={<SecondLine />} />

        {/*<Route path="/conferences" element={<div>Conferences</div>} />
        <Route path="/journals" element={<div>Journals</div>} />
       
        
         */}
      </Routes>
    </BrowserRouter>
  );
}
