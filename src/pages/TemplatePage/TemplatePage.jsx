import { useEffect, useState } from "react";
import "./TemplatePage.css";

const TemplatePage = (props) => {
  const { children, idx = 0 } = props;

  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const minHeight = 100;
    const logoHeight = Math.max(minHeight, idx * window.innerHeight - scrollTop);
    setScale(logoHeight / 400);
  }

  return (
    <div
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};

export default TemplatePage;
