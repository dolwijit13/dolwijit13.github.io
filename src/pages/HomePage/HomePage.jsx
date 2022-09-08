import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./HomePage.module.css";
import DogSanpoMan from "./dog-sanpo-man.png";
import Profile from './components/Profile';
import TechStacks from './components/TechStacks';

const HomePage = (props, ref) => {
  const { idx, handleClickContactMe } = props;
  const isDesktop = useMediaQuery({ minWidth: 1224 })
  const Mobile = ({ children }) => {
    return !isDesktop ? children : null
  }

  return (
    <div className={isDesktop ? styles.homePageBackground : styles.homePageBackgroundMobile} ref={ref}>
      <TemplatePage
        idx={idx}
        leftColor="rgba(241, 139, 4, 0.6)"
        leftImage={<img src={DogSanpoMan} alt="image" />}
      >
        <div className={isDesktop ? styles.homePageContent : styles.homePageContentMobile}>
          <Profile handleClickContactMe={handleClickContactMe} />
          <TechStacks />
          <Mobile>
            <div className={styles.homePageFooterMobile}>
              <img src={DogSanpoMan} width={96} />
            </div>
          </Mobile>
        </div>
      </TemplatePage>
    </div >
  );
};

export default forwardRef(HomePage);
