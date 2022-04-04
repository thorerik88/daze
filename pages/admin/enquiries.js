

import { useContext, useEffect } from "react";
import Link from 'next/link';

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";
import { load } from '../../storage/storage';

const Enquiries = () => {

  useEffect(() => {
    if (!load('token')) {
      Router.push('/')
    }
  })

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