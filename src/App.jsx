import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BurgerMenu from "./components/BurgerMenu";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import { useState } from "react";
import NotFound from "./pages/NotFound";

export default function App() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setPos({
      x,
      y,
    });
  });

  console.log("style");
  return (
    <>
      <div
        className="cursor"
        style={{ transform: `translate(${pos.x}px ,${pos.y}px)` }}></div>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/:anyPath" element={<NotFound />} />
      </Routes>
    </>
  );
}
