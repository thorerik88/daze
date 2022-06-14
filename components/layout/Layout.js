import NavBar from '../nav/NavBar';
import NavAd from '../nav/NavAd';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
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