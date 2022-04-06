import Container from "./Container";
import Link from 'next/link';

import styles from '../../styles/pages/admin/Admin.module.scss';

const AdminDash = () => {
  return ( 
    <Container>
      <h1>Admin Dashboard</h1>
        <ul className={styles.list}>
          <li className={styles.listItem} >
            <Link href={'/admin/enquiries'}>
                <a>Enquiries</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/admin/messages'}>
                <a>Messages</a>
            </Link>
          </li> 
          <li className={styles.listItem}>
            <Link href={'/admin/new-establishment'}>
                <a>New Establishment</a>
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