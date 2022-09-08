import { useMediaQuery } from 'react-responsive'
import ExperienceCard from '../ExperienceCard';
import styles from '../../ExperiencesPage.module.css';
import dataWow from './dataWow.png';
import bsdEducation from './bsdEducation.png';

const Experiences = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 })

  return (
    <>
      <div className={isDesktop ? styles.experiencesPageTitle : styles.experiencesPageTitleMobile}>
        Experiences
      </div>
      <ExperienceCard
        logo={dataWow}
        logoColor={'#46D7CE'}
        yearText={'2021 - Present'}
        title={'Full-stack Developer'}
        place={'at Data Wow Co., Ltd.'}
        descriptions={[
          'Creating file management platform',
          'Creating event management platform',
          'Participated in chat storage platform',
          'Participated in online-based learning platform'
        ]}
      />
      <ExperienceCard
        logo={bsdEducation}
        logoColor={'#FDD800'}
        yearText={'2020'}
        title={'Internship Front-end Developer'}
        place={'at BSD Education'}
        descriptions={[
          'Participated in online-based learning platform'
        ]}
      />
    </>
  );
};

export default Experiences;
