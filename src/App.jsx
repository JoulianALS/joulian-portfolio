import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./components/Footer"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createContext, useState } from "react";
import translations from "./translations";

// Language context
export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("de");

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      <Navbar/>
      <Routes>
        <Route path="/joulian-portfolio" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </LanguageContext.Provider>
  );
}

export default App;
