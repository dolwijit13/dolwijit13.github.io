import { useMediaQuery } from 'react-responsive'
import styles from '../../ExperiencesPage.module.css';

const ExperienceCard = (props) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 })

  const { logo, logoColor, yearText, title, place, descriptions } = props;
  return (
    <div className={isDesktop ? styles.experienceCardBackground : styles.experienceCardBackgroundMobile}>
      <div
        className={isDesktop ? styles.experienceCardLeft : styles.experienceCardTopMobile}
        style={{ backgroundColor: logoColor }}
      >
        <div className={isDesktop ? styles.experienceCardLogoWrapper : styles.experienceCardLogoWrapperMobile}>
          <img src={logo} alt={title} />
        </div>
        <span className={isDesktop ? styles.experienceCardYearText : styles.experienceCardYearTextMobile}>
          {yearText}
        </span>
      </div>
      <div className={isDesktop ? styles.experienceCardRight : styles.experienceCardBottomMobile}>
        <div className={isDesktop ? styles.experienceCardPosition : styles.experienceCardPositionMobile}>{title}</div>
        <div className={isDesktop ? styles.experienceCardPlace : styles.experienceCardPlaceMobile}>{place}</div>
        <ul className={isDesktop ? styles.experienceCardDescription : styles.experienceCardDescriptionMobile}>
          {descriptions.map((description, index) =>
            <li key={index}>{description}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
