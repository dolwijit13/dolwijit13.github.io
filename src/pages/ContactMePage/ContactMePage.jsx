import { forwardRef } from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./ContactMePage.module.css";
import DogMan from "./dog-man.png";
import ContactForm from './components/ContactForm';

const ContactMePage = (props, ref) => {
  const { idx } = props;

  return (
    <div className={styles.contactMePageBackground} ref={ref}>
      <TemplatePage
        idx={idx}
        leftColor="rgba(191, 60, 48, 0.6)"
        leftImage={<img src={DogMan} alt="image" />}
      >
        <div className={styles.contactMePageContent}>
          <ContactForm />
        </div>
      </TemplatePage>
    </div >
  );
};

export default forwardRef(ContactMePage);
