import styles from '../../styles/components/Footer.module.scss';
import { footerLogo } from '../../constants/Images';
import Container from '../layout/Container';
import { visitorContent, adminContent } from '../../constants/MenuContent';
import { Auth } from '../../constants/Auth';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



const Footer = () => {

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