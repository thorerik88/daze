import NavMenu from './NavMenu';
import NavAd from './NavAd';
import Footer from './Footer';

const Layout = ({ children }) => {
    return ( 
        <>
            <NavMenu />
            <NavAd />
            { children }
            <Footer />
        </>
     );
}
 
export default Layout;