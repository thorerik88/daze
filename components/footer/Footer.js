import styles from '../../styles/components/Footer.module.scss';
import { footerLogo } from '../../constants/Images';
import Container from '../layout/Container';

import Image from 'next/image';

const Footer = () => {
  return ( 
    <Container>
      <footer className={styles.footer}>
        <Image className={styles.logo} src={'/logo-nav.svg'} width={footerLogo.width} height={footerLogo.height} alt="Holidaze logo"/>
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Hotels</li>
          <li>Contact Us</li>
          <li>Admin</li>
        </ul>
        <ul className={styles.social}>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Tripadvisor</li>
        </ul>
      </footer>
    </Container>
   );
}
 
export default Footer;