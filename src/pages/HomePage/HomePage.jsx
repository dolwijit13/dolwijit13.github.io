import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./HomePage.module.css";

const HomePage = (props) => {
  const { idx } = props

  return (
    <div className={styles.homePageBackground}>
      <TemplatePage idx={idx}>
        <div className={styles.homePageText}>hello from home page</div>
      </TemplatePage>
    </div>
  );
};

export default HomePage;
