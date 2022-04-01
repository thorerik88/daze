import NavMenu from '../nav/NavMenu';
import NavAd from '../nav/NavAd';
import Footer from '../footer/Footer';

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