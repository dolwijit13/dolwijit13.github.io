import { forwardRef } from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./EducationPage.module.css";

const EducationPage = (props, ref) => {
  const { idx } = props;

  return (
    <div className={styles.educationPageBackground} ref={ref}>
      <TemplatePage idx={idx}>
        <div className={styles.educationPageText}>hello from education page</div>
      </TemplatePage>
    </div>
  );
};

export default forwardRef(EducationPage);
