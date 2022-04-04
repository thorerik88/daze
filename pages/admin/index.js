import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';

import Container from "../../components/layout/Container";
import styles from '../../styles/components/Admin.module.scss';
import Head from '../../components/layout/Head';
import { load } from '../../storage/storage';

const Admin = () => {
  
  useEffect(() => {
    if (!load('token')) {
      Router.push('/')
    }
  })
  
  return ( 
    <>
      <Head title={'Admin'} />
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
    </>
  );
}
 
export default Admin;