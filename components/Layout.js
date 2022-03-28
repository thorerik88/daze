import NavMenu from './NavMenu';
import NavAd from './NavAd';

const Layout = ({ children }) => {
    return ( 
        <>
            <NavMenu />
            <NavAd />
            { children }
        </>
     );
}
 
export default Layout;