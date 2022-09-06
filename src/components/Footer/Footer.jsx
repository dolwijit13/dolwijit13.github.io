import { Mail, GitHub, Linkedin } from 'react-feather';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerBackground}>
        Made by Dolwijit Jiradilok 2022  🐶
        <Mail
          onClick={() => window.open('mailto:dolwijit.j@gmail.com')}
          className={styles.footerIcon}
        />
        <GitHub
          onClick={() => window.location.href='https://github.com/dolwijit13'}
          className={styles.footerIcon}
        />
        <Linkedin
          onClick={() => window.location.href='https://www.linkedin.com/in/dolwijit-jiradilok-0bb63a136/'}
          className={styles.footerIcon}
        />
      </div>
    </footer>
  );
};

export default Footer;
