import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import backersShades from "./assets/backers_shades.png";
import { useEffect, useState } from "react";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [window.scrollY]);

  return (
    <main className="100vw h-[200vh] flex justify-center relative">
      <div className="max-w-[1360px]">
        <Navbar scrolled={scrolled} />
        <Hero />
      </div>
      <img
        className="absolute top-0 left-0 right-0 -z-20"
        src={backersShades}
      />
    </main>
  );
};

export default App;
