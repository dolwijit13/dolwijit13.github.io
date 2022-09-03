import styles from '../../ExperiencesPage.module.css';

const ExperienceCard = (props) => {
  const { logo, logoColor, yearText, title, place, description } = props;
  return (
    <div className={styles.experienceCardBackground}>
      <div className={styles.experienceCardLeft} style={{ backgroundColor: logoColor }}>
        <div className={styles.experienceCardLogoWrapper}>
          <img src={logo} alt={title} />
        </div>
        <span className={styles.experienceCardYearText}>{yearText}</span>
      </div>
      <div className={styles.experienceCardRight}>
        <div>{title}</div>
        <div>{place}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
