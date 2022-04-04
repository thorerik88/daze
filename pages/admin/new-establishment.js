import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";

import { useContext, useEffect } from 'react';
import { AuthContext } from "../../context/Context";

const NewEstablishment = () => {

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      window.location.href = '/';
    }
  })

  return ( 
    <>
      <Head title={'New Establishment'} />
      <Container>
        <h1>New Establishment</h1>
      </Container>
    </>
   );
}
 
export default NewEstablishment;