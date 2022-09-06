import styles from './Button.module.css'

const Button = (props) => {
  const { type = "text", disabled = false, className, children } = props
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.buttonBackground} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;