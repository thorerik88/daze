import styles from '../../styles/components/Footer.module.scss';
import { footerLogo } from '../../constants/Images';
import Container from '../layout/Container';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return ( 
    <Container>
      <footer className={styles.footer}>
        <Image className={styles.logo} src={'/logo-nav.svg'} width={footerLogo.width} height={footerLogo.height} alt="Holidaze logo"/>
        <ul className={styles.menu}>
          <li>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/establishments'}>
              <a>Establishments</a>
            </Link>
          </li>
          <li>
            <Link href={'/contact-us'}>
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href={'/admin'}>
              <a>Admin</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Twitter</a>
          </li>
          <li>
            <a>Tripadvisor</a>
          </li>
        </ul>
      </footer>
    </Container>
   );
}
 
export default Footer;