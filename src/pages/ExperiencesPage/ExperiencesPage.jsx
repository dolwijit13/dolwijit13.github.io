import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./ExperiencesPage.module.css";
import ComputerInu from "./computer-inu.png";
import Experiences  from './components/Experiences';
import Educations  from './components/Educations';

const ExperiencesPage = (props, ref) => {
  const { idx } = props;
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const Mobile = ({ children }) => {
    return !isDesktop ? children : null
  }

  return (
    <div
      className={isDesktop ? styles.experiencesPageBackground : styles.experiencesPageBackgroundMobile}
      ref={ref}
    >
      <TemplatePage
        idx={idx}
        leftColor="rgba(9, 91, 48, 0.6)"
        leftImage={<img src={ComputerInu} alt="experiences" />}
      >
        <div className={isDesktop ? styles.experiencesPageContent : styles.experiencesPageContentMobile}>
          <Experiences />
          <Educations />
        </div>
        <Mobile>
          <div className={styles.experiencesPageFooterMobile}>
            <img src={ComputerInu} width={96} />
          </div>
        </Mobile>
      </TemplatePage>
    </div>
  );
};

export default forwardRef(ExperiencesPage);
