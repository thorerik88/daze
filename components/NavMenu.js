import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/components/Navbar.module.scss';
import Image from 'next/image';

import { navLogo } from '../constants/Images';

const NavMenu = () => {

  return ( 
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image className={styles.logo} src={'/logo-nav.svg'} width={navLogo.width} height={navLogo.height} alt="Holidaze logo"/>
        <div className={styles.navMenu}>
          <FontAwesomeIcon className={styles.icons} icon={faUser} />
          <FontAwesomeIcon className={styles.icons} icon={faBars} />
        </div>
      </div>
    </nav>
  );
}
 
export default NavMenu;