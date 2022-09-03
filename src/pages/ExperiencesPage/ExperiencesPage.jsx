import { forwardRef } from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./ExperiencesPage.module.css";
import ComputerInu from "./computer-inu.png";
import Experiences  from './components/Experiences';
import Educations  from './components/Educations';

const ExperiencesPage = (props, ref) => {
  const { idx } = props;

  return (
    <div className={styles.experiencesPageBackground} ref={ref}>
      <TemplatePage
        idx={idx}
        leftColor="rgba(9, 91, 48, 0.6)"
        leftImage={<img src={ComputerInu} alt="experiences" />}
      >
        <div className={styles.experiencesPageContent}>
          <Experiences />
          <Educations />
        </div>
      </TemplatePage>
    </div>
  );
};

export default forwardRef(ExperiencesPage);
