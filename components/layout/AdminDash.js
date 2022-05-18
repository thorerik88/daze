import Container from "./Container";
import Link from 'next/link';

import styles from '../../styles/pages/admin/Admin.module.scss';
import { useEffect, useState } from "react";

const AdminDash = () => {

  const [isEnquiry, setIsEnquiry] = useState(false);
  const [isMessages, setIsMessages] = useState(false);
  const [isNewEst, setIsNewEst] = useState(false);

  // style links based on current page
  useEffect(() => {
    if (window.location.pathname == '/admin/enquiries') {
      setIsEnquiry(true);
    } else if (window.location.pathname == '/admin/messages') {
      setIsMessages(true);
    } else {
      setIsNewEst(true);
    }
  })

  return ( 
    <Container>
      <h1>Admin Dashboard</h1>
        <ul className={styles.list}>
          <li className={styles.listItem} >
            <Link href={'/admin/enquiries'}>
                <a className={isEnquiry ? styles.active : ''}>Enquiries</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/admin/messages'}>
                <a className={isMessages ? styles.active : ''}>Messages</a>
            </Link>
          </li> 
          <li className={styles.listItem}>
            <Link href={'/admin/new-establishment'}>
                <a className={isNewEst ? styles.active : ''}>New Establishment</a>
            </Link>
          </li> 
          <li className={styles.listItem}>
            <Link href={'/admin/logout'}>
                <a>Logout</a>
            </Link>
          </li> 
        </ul>
      </Container>
   );
}
 
export default AdminDash;