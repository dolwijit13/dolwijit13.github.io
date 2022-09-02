import styles from './Button.module.css'

const Button = (props) => {
  const { children } = props
  return <div className={styles.buttonBackground}>{children}</div>;
};

export default Button;
