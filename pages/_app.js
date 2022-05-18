import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import '../styles/global/globals.scss'
import Layout from '../components/layout/Layout';
import { AuthContext } from '../context/Context';
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  )
}

export default MyApp
