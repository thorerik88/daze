import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, createContext } from "react";
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/Navbar.module.scss';


import { navLogo } from '../../constants/Images';
import { Container } from "react-bootstrap";
import MobileMenu from "./MobileMenu";
import { visitorContent, adminContent } from '../../constants/MenuContent'
import { Auth } from '../../constants/Auth';

export const MobileMenuContext = createContext();
export const CloseMenuContext = createContext();



const NavMenu = () => {

  const [toggle, setToggle] = useState(false);
  const [dataset, setDataset] = useState([]);
  
  let contentList = [];
  
  // set which menu to display, based on Auth
  if (!Auth) {
    contentList = visitorContent;
  } else {
    let newArray = [];
    visitorContent.map(item => {
      if (item.id !== 4) {
        newArray.push(item)
      }
      console.log(newArray)
      contentList = newArray.concat(adminContent);
    })
  }

  // set which menu to display, based on Auth
  const handleClick = () => {
    if (toggle) {
      setToggle(false)
    } else {
      if (!Auth) {
        setDataset(visitorContent)
        setToggle(true);
      } else if (Auth) {
        let newArray = [];

        visitorContent.map(item => {
          if (item.id !== 4) {
            newArray.push(item)
          }
          contentList = newArray.concat(adminContent);
        })
        setDataset(contentList)
        setToggle(true);
      }
    } 
  }

  return ( 
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <Link href={'/'}>
          <a><Image className={styles.logo} src={'/logo-nav.svg'} width={navLogo.width} height={navLogo.height} alt="Holidaze logo"/></a>
        </Link>
        <div className={styles.navMenu}>
          {/* <FontAwesomeIcon data='admin' className={styles.admin} onClick={() => handleClick('admin')} icon={faUser} /> */}
          <FontAwesomeIcon className={styles.mobileMenu} onClick={() => handleClick()} icon={faBars} />
        </div>
      </Container>
      <MobileMenuContext.Provider value={{ toggle }}>
        <CloseMenuContext.Provider value={{ setToggle }}>
          <MobileMenu value={dataset} />
        </CloseMenuContext.Provider>
      </MobileMenuContext.Provider>
    </nav>
  );
}
 
export default NavMenu;