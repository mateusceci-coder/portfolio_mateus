import { useState } from "react";
import Home from "./layouts/Home";
import Navbar from "./layouts/Navbar";
import Skills from "./layouts/Skills";
import AboutMe from "./layouts/AboutMe";

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isEnglish, setIsEnglish] = useState(false)
  
  return (
    <main className={`font-tinos ${darkMode && "dark"}`}>
      <div className="bg-white dark:bg-black">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
        <Home isEnglish={isEnglish} />
        <AboutMe isEnglish={isEnglish} />
        <Skills />
      </div>
    </main>
  )
}