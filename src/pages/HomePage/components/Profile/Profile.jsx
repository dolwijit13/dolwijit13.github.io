import Button from '../../../../components/Button';
import styles from '../../HomePage.module.css';
import resume from './Resume_Dolwijit.pdf';

const Profile = (props) => {
  const { handleClickContactMe } = props;
  return (
    <div className={styles.profileBackground}>
      <div className={styles.profileHello}>
        <div>สวัสดี ผมบั๊มครับ</div>
        <div>Hello I'm Dolwijit</div>
        <div className={styles.profileHelloJap}>こんにちは、ドンイジットです。</div>
      </div>
      <div className={styles.profileDescription}>
        A full-stack developer from Thailand who is self-motivated and
        desires to learn new things. Currently learning Japanese,
        have passed the JLPT N2, and am looking for work there.
      </div>
      <div className={styles.profileButtonsWrapper}>
        <a href={resume} download="Resume_Dolwijit.pdf" className={styles.profileResume}>
          <Button>
            DOWNLOAD RESUME
          </Button>
        </a>
        <Button onClick={handleClickContactMe}>Contact Me</Button>
      </div>
    </div>
  );
};

export default Profile;
