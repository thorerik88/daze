

import { useContext } from "react";
import Link from 'next/link';

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";
import { AuthContext } from '../../context/Context';

const Enquiries = () => {

  const { auth } = useContext(AuthContext);

  if (!auth) {
    window.location.href = '/';
  }

  return ( 
    <>
      <Head title={'Enquiries'} />
      <Container>
        <Link href='/admin'><a>admin</a></Link> <p></p>
        <h1>Enquiries</h1>
        <MessageItems headings={['Name', 'Rooms', 'Date']} />
        <TravelTips />
      </Container>
    </>
   );
}
 
export default Enquiries;