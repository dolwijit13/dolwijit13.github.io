import { useState } from 'react';
import { ArrowUp } from 'react-feather';
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const handleScrollToTope = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      onClick={handleScrollToTope}
      className={styles.scrollToTopBackground}
      style={{display: visible ? 'inline' : 'none'}}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTop;
