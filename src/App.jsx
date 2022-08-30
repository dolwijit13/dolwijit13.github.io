import { useRef } from 'react';
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";

function App() {
  const refHome = useRef(null);
  const refEducation = useRef(null);
  const refHome2 = useRef(null);

  const handleClickHome = () => {
    const offsetTop = refHome.current.offsetTop - 96;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const handleClickEducation = () => {
    const offsetTop = refEducation.current.offsetTop - 96;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const handleClickHome2 = () => {
    const offsetTop = refHome2.current.offsetTop - 96;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  const menus = [
    { label: 'Home', onClick: handleClickHome },
    { label: 'Experiences', onClick: handleClickEducation },
    { label: 'Contact me', onClick: handleClickHome2 },
  ];


  return (
    <div className={styles.appBackground}>
      <NavBar menus={menus} />
      <div className={styles.appContent}>
        <HomePage idx={0} ref={refHome} />
        <EducationPage idx={1} ref={refEducation} />
        <HomePage idx={2} ref={refHome2} />
      </div>
    </div>
  );
}

export default App;
