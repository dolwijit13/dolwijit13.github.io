import { forwardRef } from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./ExperiencesPage.module.css";
import ComputerInu from "./computer-inu.png";
import ExperienceCard from './components/ExperienceCard';

const ExperiencesPage = (props, ref) => {
  const { idx } = props;

  return (
    <div className={styles.experiencesPageBackground} ref={ref}>
      <TemplatePage
        idx={idx}
        leftColor="rgba(9, 91, 48, 0.6)"
        leftImage={<img src={ComputerInu} alt="image" />}
      >
        <div>
          <div>Experiences</div>
          <ExperienceCard
            logo={''}
            yearText={'2021 - Present'}
            title={'Full-stack Developer'}
            place={'at Data Wow Co., Ltd.'}
            description={`
              Creating file management platform
              Creating event management platform
              Participated in chat storage platform
              Participated in online-based learning platform
            `}
          />
          <ExperienceCard
            logo={''}
            yearText={'2020'}
            title={'Internship Front-end Developer'}
            place={'at BSD Education'}
            description={`
              Participated in online-based learning platform
            `}
          />
        </div>
        <div>
          <div>Educations</div>
          <ExperienceCard
            logo={''}
            yearText={'2017 - 2021'}
            title={'Bachelor of Engineering, Computer Engineering'}
            place={'at Chulalongkorn University'}
            description={`
              First-class honours
              Final year project: Predict quality of life with image recognition techniques
              Course project: Web-based multiplayer card game
              Course project: Web-based image recognition game with image recognitation techniques
            `}
          />
          <ExperienceCard
            logo={''}
            yearText={'2011 - 2017'}
            title={'Gifted Math Program'}
            place={'at Suankularb wittayalat school'}
            description={`
              Participated Thailand olympiad in informatics (TOI, IPST, POSN) and ranked top 30
            `}
          />
        </div>
      </TemplatePage>
    </div>
  );
};

export default forwardRef(ExperiencesPage);
