import NavBar from '../nav/NavBar';
import NavAd from '../nav/NavAd';
import Footer from '../footer/Footer';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Context';

const Layout = ({ children }) => {
    console.log(children)
    return ( 
        <>
            <NavBar />
            <NavAd />
            { children }
            <Footer />
        </>
     );
}
 
export default Layout;