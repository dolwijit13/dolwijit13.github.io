import { useRef } from 'react';
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactMePage from './pages/ContactMePage';
import ExperiencesPage from "./pages/ExperiencesPage";
import HomePage from "./pages/HomePage";

function App() {
  const refHome = useRef(null);
  const refExperiences = useRef(null);
  const refHome2 = useRef(null);

  const handleClickHome = () => {
    const offsetTop = refHome.current.offsetTop - 96;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const handleClickExperiences = () => {
    const offsetTop = refExperiences.current.offsetTop - 96;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const handleClickHome2 = () => {
    const offsetTop = refHome2.current.offsetTop - 96;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const menus = [
    { label: 'Home', onClick: handleClickHome },
    { label: 'Experiences', onClick: handleClickExperiences },
    { label: 'Contact me', onClick: handleClickHome2 },
  ];


  return (
    <div className={styles.appBackground}>
      <NavBar menus={menus} />
      <div className={styles.appContent}>
        <HomePage idx={0} ref={refHome} />
        <ExperiencesPage idx={1} ref={refExperiences} />
        <ContactMePage idx={2} ref={refHome2} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
