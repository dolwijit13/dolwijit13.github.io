import styles from '../../ExperiencesPage.module.css';

const ExperienceCard = (props) => {
  const { logo, logoColor, yearText, title, place, descriptions } = props;
  return (
    <div className={styles.experienceCardBackground}>
      <div className={styles.experienceCardLeft} style={{ backgroundColor: logoColor }}>
        <div className={styles.experienceCardLogoWrapper}>
          <img src={logo} alt={title} />
        </div>
        <span className={styles.experienceCardYearText}>{yearText}</span>
      </div>
      <div className={styles.experienceCardRight}>
        <div className={styles.experienceCardPosition}>{title}</div>
        <div className={styles.experienceCardPlace}>{place}</div>
        <ul className={styles.experienceCardDescription}>
          {descriptions.map((description, index) =>
            <li key={index}>{description}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
