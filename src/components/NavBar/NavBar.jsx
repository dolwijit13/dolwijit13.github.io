import styles from "./NavBar.module.css";

const Menu = (props) => {
  const { menu: { label, onClick } } = props;
  return (
    <div className={styles.navBarMenu} onClick={onClick}>
      {label}
    </div>
  );
};

const NavBar = (props) => {
  const { menus } = props;

  return (
    <div className={styles.navBarBackground}>
      {menus.map((menu, idx) => <Menu key={idx} menu={menu} />)}
    </div>
  );
};

export default NavBar;
