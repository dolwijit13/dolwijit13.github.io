import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={styles.appBackground}>
      <NavBar />
      <div>
        <HomePage idx={0} />
        <EducationPage idx={1} />
        <HomePage idx={2} />
      </div>
    </div>
  );
}

export default App;
