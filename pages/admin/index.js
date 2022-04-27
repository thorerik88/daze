import { useEffect } from 'react';
import Router from 'next/router';

import AdminDash from '../../components/layout/AdminDash';
import Head from '../../components/layout/Head';
import { load } from '../../storage/storage';
import { AuthContext } from '../../context/Context';

const Admin = () => {
  
  
  return ( 
    <>
      <Head title={'Admin'} />
      <AdminDash />
      
    </>
  );
}
 
export default Admin;