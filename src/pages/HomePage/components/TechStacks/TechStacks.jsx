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
  return (
    <div className={styles.techStacksBackground}>
      <div className={styles.techStacksTitle}>Tech stacks</div>
      <div className={styles.techStacksContent}>
          <img src={js} data-tip={'JavaScript'} />
          <img src={python} data-tip={'Python'} />
          <img src={nodejs} data-tip={'Node.js'} />
          <img src={rails} data-tip={'Ruby on Rails'} />
          <img src={reactjs} data-tip={'React.js'} />
          <img src={tailwind} data-tip={'Tailwind'} />
          <img src={graphql} data-tip={'GraphQL'} />
          <img src={docker} data-tip={'Docker'} />
          <img src={kubernetes} data-tip={'Kubernetes'} data-offset="{'top': 8, 'left': 8}" />
          <img src={aws} data-tip={'AWS'} />
          <img src={googleCloud} width={40} data-tip={'Google Cloud Platform'} data-offset="{'top': 10, 'left': 10}" />
          <img src={redis} data-tip={'Redis'} />
      </div>
      <ReactTooltip effect="solid" offset={{top: -10, left: 5}} scrollHide globalEventOff="click" />
    </div>
  );
};

export default TeachStacks;
