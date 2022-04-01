import styles from '../../styles/components/MobileMenu.module.scss';
import { CloseMenuContext, MobileMenuContext } from './NavMenu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import Link from 'next/link';

const MobileMenu = (listObject) => {
  
  let listItems = listObject.value;  

  // open mobile menu based on icon type
  const { toggle } = useContext(MobileMenuContext);
  
  // close mobile menu's
  const { setToggle } = useContext(CloseMenuContext);

  // close mobile menu, when page is changed
  const changePageClick = (e) => {
    let element = e.target.tagName;
    if (element === 'A') {
      setToggle(false)
    }
  }

  return ( 
      <div className={toggle ? styles.showMobile : styles.hideMobile}onClick={changePageClick} >
        <div className={styles.mobileMenu}>
          <div className={styles.wrapper}>
            <ul className={styles.menu}>
            {listItems.map(item => {
              return <li key={item.id}>
                      <Link href={`${item.href}`}>
                        <a>{item.name}</a>
                      </Link></li>  
                  })}
            </ul>
              <FontAwesomeIcon className={styles.closeBtn} onClick={() => setToggle(false)} icon={faClose} />
          </div>
        </div>
      </div>
   );
}
 
export default MobileMenu;