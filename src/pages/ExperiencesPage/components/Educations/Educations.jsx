import ExperienceCard from '../ExperienceCard';
import styles from '../../ExperiencesPage.module.css';
import chula from './chula.png';
import suankularb from './suankularb.png';

const Educations = () => {
  return (
    <div>
      <div className={styles.educationTitle}>Educations</div>
      <ExperienceCard
        logo={chula}
        logoColor={'#DE5C8E'}
        yearText={'2017 - 2021'}
        title={'Bachelor of Engineering, Computer Engineering'}
        place={'at Chulalongkorn University'}
        descriptions={[
          'First-class honours',
          'Final year project: Predict quality of life with image recognition techniques',
          'Course project: Web-based multiplayer card game',
          'Course project: Web-based image recognition game with image recognitation techniques'
        ]}
      />
      <ExperienceCard
        logo={suankularb}
        logoColor={'#5FB2E5'}
        yearText={'2011 - 2017'}
        title={'Gifted Math Program'}
        place={'at Suankularb Wittayalai School'}
        descriptions={[
          'Participated Thailand Olympiad in Informatics (TOI, IPST, POSN) and ranked top 30'
        ]}
      />
    </div>
  );
};

export default Educations;
