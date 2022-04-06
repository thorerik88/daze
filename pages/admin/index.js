import { useEffect } from 'react';
import Router from 'next/router';

import AdminDash from '../../components/layout/AdminDash';
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
      <AdminDash />
    </>
  );
}
 
export default Admin;