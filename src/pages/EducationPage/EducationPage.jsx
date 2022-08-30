import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./EducationPage.module.css";

const EducationPage = (props) => {
  const { idx } = props;

  return (
    <div className={styles.educationPageBackground}>
      <TemplatePage idx={idx}>
          <div className={styles.educationPageText}>hello from education page</div>
      </TemplatePage>
    </div>
  );
};

export default EducationPage;
