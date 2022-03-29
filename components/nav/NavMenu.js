import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, createContext, useEffect } from "react";

import styles from '../../styles/components/Navbar.module.scss';
import Image from 'next/image';

import { navLogo } from '../../constants/Images';
import { Container } from "react-bootstrap";
import MobileMenu from "./MobileMenu";

export const MobileMenuContext = createContext();
export const AdminMenuContext = createContext();

const mobileContent = [
  {id: 1, name: 'Home'},
  {id: 2, name: 'Establishment'},
  {id: 3, name: 'Contact Us'}
];

const adminContent = [
  {id: 1, name: 'Enquiries'},
  {id: 2, name: 'Messages'},
  {id: 3, name: 'New Establishment'},
  {id: 4, name: 'Logout'}
];

const NavMenu = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleType, setToggleType] = useState(undefined);
  const [dataset, setDataset] = useState([]);
  
  const handleClick = (event, type) => {
    if (type === 'admin' && toggle === true) {
      setToggle(false);
    } else if (type === 'admin' && toggle === false) {
      setToggle(true);
      setDataset(adminContent);
      setToggleType(type);
    }

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
        <Image className={styles.logo} src={'/logo-nav.svg'} width={navLogo.width} height={navLogo.height} alt="Holidaze logo"/>
        <div className={styles.navMenu}>
          <FontAwesomeIcon data='admin' className={styles.admin} onClick={(event) => handleClick(event, 'admin')} icon={faUser} />
          <FontAwesomeIcon className={styles.mobileMenu} onClick={(event) => handleClick(event, 'mobileMenu')} icon={faBars} />
        </div>
      </Container>
      <MobileMenuContext.Provider value={{ toggle, toggleType }}>
        <MobileMenu value={dataset} />
      </MobileMenuContext.Provider>
    </nav>
  );
}
 
export default NavMenu;