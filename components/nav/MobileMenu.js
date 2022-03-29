import styles from '../../styles/components/MobileMenu.module.scss';
import { AdminMenuContext, MobileMenuContext } from './NavMenu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import ListItem from './ListItem';

const MobileMenu = (listObject) => {
  
  let listItems = listObject.value;  

  const { toggle, toggleType } = useContext(MobileMenuContext);
  


  return ( 
    <div className={toggle && toggleType === 'admin' ? styles.showAdmin : styles.hideAdmin | toggle && toggleType === 'mobileMenu' ? styles.showMobile : styles.hideMobile}>
      <div className={styles.mobileMenu}>
        <div className={styles.wrapper}>
          <ul className={styles.menu}>
          {listItems.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
          </ul>
            <FontAwesomeIcon className={styles.closeBtn} icon={faClose} />
        </div>
      </div>
    </div>
   );
}
 
export default MobileMenu;