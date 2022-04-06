import styles from '../../styles/components/footer/Footer.module.scss';
import { footerLogo } from '../../constants/Images';
import Container from '../layout/Container';
import { visitorContent, adminContent } from '../../constants/MenuContent';
import { AuthContext } from '../../context/Context';
import { load } from '../../storage/storage';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';



const Footer = () => {

  const { auth, setAuth } = useContext(AuthContext);

  // check if user is logged in
  useEffect(() => {
    if (load('token')) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [])

  let contentList = [];
  
  // set which menu to display, based on Auth
  if (!auth) {
    contentList = visitorContent;
  } else {
    let newArray = [];
    visitorContent.map(item => {
      if (item.id !== 4) {
        newArray.push(item)
      }
      contentList = newArray.concat(adminContent);
    })
  }

  return ( 
    <Container>
      <footer className={styles.footer}>
        <Image className={styles.logo} src={'/logo-nav.svg'} width={footerLogo.width} height={footerLogo.height} alt="Holidaze logo"/>
        <ul className={styles.menu}>
          {contentList.map(item => {
            return <li key={item.id}>
              <Link href={`${item.href}`}>
                <a>{item.name}</a>
              </Link></li>
            })}
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