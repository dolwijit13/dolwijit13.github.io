import styles from '../../ExperiencesPage.module.css';

const ExperienceCard = (props) => {
  const { logo, yearText, title, place, description } = props;
  return (
    <div>
      <div>
        <img src={logo} alt={title} />
        <span>{yearText}</span>
      </div>
      <div>
        <div>{title}</div>
        <div>{place}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
