import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, createContext } from "react";
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/Navbar.module.scss';


import { navLogo } from '../../constants/Images';
import { Container } from "react-bootstrap";
import MobileMenu from "./MobileMenu";

export const MobileMenuContext = createContext();
export const CloseMenuContext = createContext();

const mobileContent = [
  {id: 1, name: 'Home', href: '/'},
  {id: 2, name: 'Establishments', href: 'establishments'},
  {id: 3, name: 'Contact Us', href: 'contact-us'}
];

const adminContent = [
  {id: 1, name: 'Enquiries', href: 'enquiries'},
  {id: 2, name: 'Messages', href: 'messages'},
  {id: 3, name: 'New Establishment', href: 'new-establishment'},
  {id: 4, name: 'Logout', href: 'logout'}
];

const NavMenu = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleType, setToggleType] = useState(undefined);
  const [dataset, setDataset] = useState([]);
  
  // set which icon and what dataset to send to mobile component
      //ADMIN ICON
  const handleClick = (type) => {
    if (type === 'admin' && toggle === true) {
      setToggle(false);
    } else if (type === 'admin' && toggle === false) {
      setToggle(true);
      setDataset(adminContent);
      setToggleType(type);
    }
      //MOBILEMENU ICON
    if (type === 'mobileMenu' && toggle === true) {
      setToggle(false);
    } else if (type === 'mobileMenu' && toggle === false) {
      setToggle(true);
      setDataset(mobileContent);
      setToggleType(type);
    }
  }

  return ( 
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <Link href={'/'}>
          <a><Image className={styles.logo} src={'/logo-nav.svg'} width={navLogo.width} height={navLogo.height} alt="Holidaze logo"/></a>
        </Link>
        <div className={styles.navMenu}>
          <FontAwesomeIcon data='admin' className={styles.admin} onClick={() => handleClick('admin')} icon={faUser} />
          <FontAwesomeIcon className={styles.mobileMenu} onClick={() => handleClick('mobileMenu')} icon={faBars} />
        </div>
      </Container>
      <MobileMenuContext.Provider value={{ toggle, toggleType }}>
        <CloseMenuContext.Provider value={{ setToggle }}>
          <MobileMenu value={dataset} />
        </CloseMenuContext.Provider>
      </MobileMenuContext.Provider>
    </nav>
  );
}
 
export default NavMenu;