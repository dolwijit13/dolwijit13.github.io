import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames';
import styles from './Button.module.css'

const Button = (props) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 })

  const { type = "text", disabled = false, onClick, className, children } = props
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.buttonBackground, {[styles.buttonBackgroundMobile]: !isDesktop}, className)}
    >
      {children}
    </button>
  );
};

export default Button;
