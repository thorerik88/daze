import styles from '../../styles/components/DesktopMenu.module.scss';

import { CloseMenuContext, MobileMenuContext } from '../../context/Context';

import { useContext } from 'react';
import Link from 'next/link';


const DesktopMenu = (listObject) => {

  console.log(listObject)


  return ( 
    <div className={styles.menuWrapper}>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Establishments</li>
        <li>Contact Us</li>
        <li>Admin</li>
        <li>Logout</li>
      </ul>
    </div> );
}
 
export default DesktopMenu;