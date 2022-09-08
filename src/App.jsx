import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactMePage from './pages/ContactMePage';
import ExperiencesPage from "./pages/ExperiencesPage";
import HomePage from "./pages/HomePage";
import ScrollToTop from './components/ScrollToTop';

function App() {
  const refHome = useRef(null);
  const refExperiences = useRef(null);
  const refContactMe = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 1224 })

  const additionOffset = isDesktop ? 96 : 64;

  const handleClickHome = () => {
    const offsetTop = refHome.current.offsetTop - additionOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const handleClickExperiences = () => {
    const offsetTop = refExperiences.current.offsetTop - additionOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const handleClickContactMe = () => {
    const offsetTop = refContactMe.current.offsetTop - additionOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const menus = [
    { label: 'Home', onClick: handleClickHome },
    { label: 'Experiences', onClick: handleClickExperiences },
    { label: 'Contact me', onClick: handleClickContactMe },
  ];


  return (
    <div className={styles.appBackground}>
      <NavBar menus={menus} />
      <div className={isDesktop ? styles.appContent: styles.appContentMobile}>
        <HomePage idx={0} handleClickContactMe={handleClickContactMe} ref={refHome} />
        <ExperiencesPage idx={1} ref={refExperiences} />
        <ContactMePage idx={2} ref={refContactMe} />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
