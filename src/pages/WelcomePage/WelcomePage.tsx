import { useEffect, useState } from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const minHeight = 100;
    const logoHeight = Math.max(minHeight, 400 - scrollTop);
    setScale(logoHeight / 400);
  }

  return (
    <div className="background">
      <div
        className="text"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        hello from Welcome page
      </div>
    </div>
  );
};

export default WelcomePage;
