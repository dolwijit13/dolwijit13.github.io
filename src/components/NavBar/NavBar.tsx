import styles from "./NavBar.module.css";

const menus = [
  'Home',
  'Experiences',
  'Contact me'
]

const Menu = (props) => {
  const { label } = props;
  return (
    <div className={styles.navBarMenu}>
      {label}
    </div>
  )
}

const NavBar = () => {
  return (
    <div className={styles.navBarBackground}>
      {menus.map((label, idx) => <Menu key={idx} label={label} />)}
    </div>
  )
};

export default NavBar;
