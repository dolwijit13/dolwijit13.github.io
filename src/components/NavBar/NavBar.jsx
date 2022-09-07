import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Menu as Hamburger, X } from 'react-feather';
import styles from "./NavBar.module.css";

const Menu = (props) => {
  const { menu: { label, onClick }, handleCloseMobileMenu } = props;

  const handleClick = () => {
    onClick();
    handleCloseMobileMenu && handleCloseMobileMenu();
  }

  return (
    <div className={styles.navBarMenu} onClick={handleClick}>
      {label}
    </div>
  );
};

const NavBar = (props) => {
  const { menus } = props;
  const [onClickHamburger, setOnClickHamburger] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 767 })

  return isDesktop ? (
    <nav className={styles.navBarBackground}>
      {menus.map((menu, idx) => <Menu key={idx} menu={menu} />)}
    </nav>
  ) : (
    <nav className={styles.navBarBackgroundMobile}>
      <Hamburger
        className={styles.navBarHamburger}
        width={28}
        height={28}
        onClick={() => setOnClickHamburger(true)}
      />
      <div className={onClickHamburger ? styles.navBarOnShowMenuMobile : styles.navBarHideMenuMobile}>
        <X
          width={28}
          height={28}
          onClick={() => setOnClickHamburger(false)}
        />
        <div className={styles.navBarMenuWrapperMobile}>
          {menus.map((menu, idx) => (
            <Menu
              key={idx}
              menu={menu}
              handleCloseMobileMenu={() => setOnClickHamburger(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
