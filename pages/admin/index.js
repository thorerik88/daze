import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import Container from "../../components/layout/Container";
import styles from '../../styles/components/Admin.module.scss';
import Button from '../../components/layout/Button';
import Head from '../../components/layout/Head';
import { visitorContent, adminContent } from "../../constants/MenuContent";

const Admin = () => {

  return ( 
    <>
      <Head title={'Admin'} />
      <Container>
        <div className={styles.admin}>
          <Link href='/admin'><a>admin</a></Link>
          <h1>Admin Dashboard</h1>
          <ul className={styles.list}>
            {adminContent.map(item => {
              return <li className={styles.listItem} key={item.id}>
                <Link href={`${item.href}`}>
                  <a>{item.name}</a>
                </Link></li> 
              })}
          </ul>
        </div>
      </Container>
    </>
  );
}
 
export default Admin;