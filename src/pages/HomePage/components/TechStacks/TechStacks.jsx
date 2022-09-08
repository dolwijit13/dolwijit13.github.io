import { useMediaQuery } from 'react-responsive'
import js from "./icons/js.png";
import python from "./icons/python.png";
import nodejs from "./icons/nodejs.png";
import rails from "./icons/rails.png";
import reactjs from "./icons/reactjs.png";
import tailwind from "./icons/tailwind.png";
import graphql from "./icons/graphql.png";
import docker from "./icons/docker.png";
import kubernetes from "./icons/kubernetes.png";
import aws from "./icons/aws.png";
import googleCloud from "./icons/google-cloud.png";
import redis from "./icons/redis.png";
import ReactTooltip from 'react-tooltip';
import styles from '../../HomePage.module.css';

const TeachStacks = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 })

  return (
    <div className={isDesktop ? styles.techStacksBackground : styles.techStacksBackgroundMobile}>
      <div className={styles.techStacksTitle}>Tech stacks</div>
      <div className={isDesktop ? styles.techStacksContent : styles.techStacksContentMobile}>
          <img src={js} width={!isDesktop && 80} data-tip={'JavaScript'} />
          <img src={python} width={!isDesktop && 80} data-tip={'Python'} />
          <img src={nodejs} width={!isDesktop && 80} data-tip={'Node.js'} />
          <img src={rails} width={!isDesktop && 80} data-tip={'Ruby on Rails'} />
          <img src={reactjs} width={!isDesktop && 80} data-tip={'React.js'} />
          <img src={tailwind} width={!isDesktop && 80} data-tip={'Tailwind'} />
          <img src={graphql} width={!isDesktop && 72} data-tip={'GraphQL'} />
          <img src={docker} width={!isDesktop && 72} data-tip={'Docker'} />
          <img src={kubernetes} width={!isDesktop && 40} data-tip={'Kubernetes'} data-offset="{'top': 8, 'left': 8}" />
          <img src={aws} width={!isDesktop && 72} data-tip={'AWS'} />
          <img src={googleCloud} width={isDesktop ? 44 : 40} data-tip={'Google Cloud Platform'} data-offset="{'top': 10, 'left': 10}" />
          <img src={redis} width={!isDesktop && 72} data-tip={'Redis'} />
      </div>
      <ReactTooltip effect="solid" offset={{top: -10, left: 5}} />
    </div>
  );
};

export default TeachStacks;
