// import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import styles from "./TemplatePage.module.css";

const TemplatePage = (props) => {
  const { children, leftColor, leftImage, idx = 0 } = props;

  // const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // function handleScroll() {
  //   const scrollTop = window.scrollY;
  //   const minHeight = 100;
  //   const logoHeight = Math.max(minHeight, idx * window.innerHeight - scrollTop);
  //   setScale(logoHeight / 400);
  // }

  const isDesktop = useMediaQuery({ minWidth: 1224 })
  const Desktop = ({ children }) => {
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    return !isDesktop ? children : null
  }

  return (
    <div
      // style={{
      //   transform: `scale(${scale})`,
      // }}
      className={isDesktop ? styles.templateBackground : styles.templateBackgroundMobile}
    >
      <Desktop>
        <div className={styles.templateLeftChild} style={{ backgroundColor: leftColor }}>
          {leftImage}
        </div>
        <div className={styles.templateRightChild}>
          {children}
        </div>
      </Desktop>
      <Mobile>
        {children}
      </Mobile>
    </div>
  );
};

export default TemplatePage;
