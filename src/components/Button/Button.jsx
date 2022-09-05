import styles from './Button.module.css'

const Button = (props) => {
  const { type = "text", disabled = false, children } = props
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles.buttonBackground}
    >
      {children}
    </button>
  );
};

export default Button;
