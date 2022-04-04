import styles from '../styles/global/NotFound.module.scss';
import Container from "../components/layout/Container";
import Router from 'next/router'
import { useEffect } from 'react';
import Head from '../components/layout/Head';

const NotFound = () => {

  useEffect(() => {
    const {pathname} = Router;
    if (pathname == '/404') {
      setTimeout(function() {
        Router.push('/')
      }, 3000)
      

    }
  })

  return ( 
    <>
      <Head title={'404'} />
      <Container>
        <div className={styles.notFound}>
          <div className={styles.error}>
            <h1>404</h1>
            <h1>Page not found</h1>
          </div>
          <h2>You will be redirected in 3 seconds</h2>
        </div>
      </Container> 
    </>
  );
}
 
export default NotFound;