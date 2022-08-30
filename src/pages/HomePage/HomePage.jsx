import { forwardRef } from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./HomePage.module.css";

const HomePage = (props, ref) => {
  const { idx } = props;

  return (
    <div className={styles.homePageBackground} ref={ref}>
      <TemplatePage idx={idx}>
        <div className={styles.homePageText}>hello from home page</div>
      </TemplatePage>
    </div>
  );
};

export default forwardRef(HomePage);
