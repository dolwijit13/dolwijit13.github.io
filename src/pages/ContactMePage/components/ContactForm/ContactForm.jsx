import { useMediaQuery } from 'react-responsive';
import { useForm } from '@formspree/react';
import Button from '../../../../components/Button';
import styles from '../../ContactMePage.module.css';
import JitenshaInu from '../../jitensha-inu.png';

const ContactForm = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 })
  const [state, handleSubmit] = useForm("xjvzkjdb");

  if (state.succeeded) {
      return (
        <div className={styles.profileBackground}>
          <div className={isDesktop ? styles.contactFormTitle : styles.contactFormTitleMobile}>
            Contact me
          </div>
          <div className={styles.contactFormSuccessWrapper}>
            <div className={styles.contactFormSuccessTextWrapper}>
              <p>Thank you for your message.</p>
              <p>I will respond as soon as possible!</p>
            </div>
            <img src={JitenshaInu} alt={'dog-ride-bicycle'} width={'50%'} />
          </div>
        </div>
      );
  }
  return (
    <div className={styles.profileBackground}>
      <div className={isDesktop ? styles.contactFormTitle : styles.contactFormTitleMobile}>
        Contact me
      </div>
      <form onSubmit={handleSubmit} className={!isDesktop && styles.contactFormMobile}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          required
          className={styles.contactFormInput}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          className={styles.contactFormTextArea}
        />
        <Button type="submit" disabled={state.submitting} className={styles.contactFormButton}>Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
