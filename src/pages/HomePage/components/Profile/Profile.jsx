import Button from '../../../../components/Button';
import styles from '../../HomePage.module.css';

const Profile = () => {
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
      <Button>
        DOWNLOAD RESUME
      </Button>
    </div>
  );
};

export default Profile;
