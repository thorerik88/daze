import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/nav/NavBar.module.scss';

import { navLogo } from '../../constants/Images';
import { Container } from "react-bootstrap";
import MobileMenu from "./MobileMenu";
import DesktopMenu from './DesktopMenu';
import { visitorContent, adminContent } from '../../constants/MenuContent'
import { MobileMenuContext, CloseMenuContext, AuthContext } from '../../context/Context';
import { load } from "../../storage/storage";

const NavBar = () => {

  const { auth } = useContext( AuthContext );

  const [toggle, setToggle] = useState(false);
  const [dataset, setDataset] = useState([]);
  
  let contentList = [];

  // check if user is logged in and select menu
  useEffect(() => {
    if (load('token')) {
      let newArray = [];
      visitorContent.map(item => {
        if (item.id !== 4) {
          newArray.push(item)
        }
        contentList = newArray.concat(adminContent);
      })
    } else {
      contentList = visitorContent;
    }
    setDataset(contentList);
  }, [])
  

  // open and close mobile menu
  const handleClick = () => {
    if (toggle) {
      setToggle(false)
    } else {
      if (!auth) {
        setToggle(true);
      } else if (auth) {
        setToggle(true);
      }
    } 
  }

  return ( 
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <Link href={'/'}>
          <div className={styles.brandWrapper}>
            <a className={styles.logo}><Image src={'/logo-nav.svg'} width={navLogo.width} height={navLogo.height} alt="Holidaze logo"/></a>
            {/* {auth ? <span>Logged in</span> : <span>At your service</span>} */}
            <span>At your service</span>
          </div>
        </Link>
        
        <div className={styles.navMenu}>
          <MobileMenuContext.Provider value={{ toggle }}>
            <CloseMenuContext.Provider value={{ setToggle }}>
              <MobileMenu value={dataset} />
              <DesktopMenu value={dataset} />
            </CloseMenuContext.Provider>
          </MobileMenuContext.Provider>
            {auth ? 
              <div className={styles.loggedIn}>
                <FontAwesomeIcon className={styles.userIcon} icon={faCircle} />
                <p>Logged in</p>
              </div>
            : ''}
            <FontAwesomeIcon className={styles.mobileMenu} onClick={() => handleClick()} icon={faBars} />
        </div>
      </Container>
    </nav>
  );
}
 
export default NavBar;