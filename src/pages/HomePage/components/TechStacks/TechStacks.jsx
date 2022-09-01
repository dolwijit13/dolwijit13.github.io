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
import styles from '../../HomePage.module.css';

const TeachStacks = () => {
  return (
    <div className={styles.techStacksBackground}>
      <div className={styles.techStacksTitle}>Tech stacks</div>
      <div className={styles.techStacksContent}>
          <img src={js} />
          <img src={python} />
          <img src={nodejs} />
          <img src={rails} />
          <img src={reactjs} />
          <img src={tailwind} />
          <img src={graphql} />
          <img src={docker} />
          <img src={kubernetes} />
          <img src={aws} />
          <img src={googleCloud} width={40} />
          <img src={redis} />
      </div>
    </div>
  );
};

export default TeachStacks;
