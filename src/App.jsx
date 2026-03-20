import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Gallary from "./pages/Gallary";
import GalleryDetails from "./pages/GalleryDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/gallery-details" element={<GalleryDetails />} />

        {/*<Route path="/conferences" element={<div>Conferences</div>} />
        <Route path="/journals" element={<div>Journals</div>} />
       
        
         */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
