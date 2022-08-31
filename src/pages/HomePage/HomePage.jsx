import { forwardRef } from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import styles from "./HomePage.module.css";
import DogSanpoMan from "./dog-sanpo-man.png";
import Profile from './components/Profile';
import TechStacks from './components/TechStacks';

const HomePage = (props, ref) => {
  const { idx } = props;

  return (
    <div className={styles.homePageBackground} ref={ref}>
      <TemplatePage
        idx={idx}
        leftColor="rgba(241, 139, 4, 0.6)"
        leftImage={<img src={DogSanpoMan} alt="image" />}
      >
        <div>
          <Profile />
          <TechStacks />
        </div>
      </TemplatePage>
    </div >
  );
};

export default forwardRef(HomePage);
