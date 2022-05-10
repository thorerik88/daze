import { useContext, useEffect } from 'react';
import Router from 'next/router';

import AdminDash from '../../components/layout/AdminDash';
import Head from '../../components/layout/Head';
import { load } from '../../storage/storage';
import { AuthContext } from '../../context/Context';
import Login from '../login';

const Admin = () => {
  
  const { auth } = useContext( AuthContext );
  
  return ( 
    <>
      <Head title={'Admin'} />
      {auth ? <AdminDash /> : <Login />}
    </>
  );
}
 
export default Admin;