import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./ContactMePage.module.css";
import DogMan from "./dog-man.png";
import ContactForm from './components/ContactForm';

const ContactMePage = (props, ref) => {
  const { idx } = props;
  const isDesktop = useMediaQuery({ minWidth: 1224 })

  return (
    <div
      className={isDesktop ? styles.contactMePageBackground : styles.contactMePageBackgroundMobile}
      ref={ref}
    >
      <TemplatePage
        idx={idx}
        leftColor="rgba(191, 60, 48, 0.6)"
        leftImage={<img src={DogMan} alt="image" />}
      >
        <div className={isDesktop ? styles.contactMePageContent : styles.contactMePageContentMobile}>
          <ContactForm />
        </div>
      </TemplatePage>
    </div >
  );
};

export default forwardRef(ContactMePage);
