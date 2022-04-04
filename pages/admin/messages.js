import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";
import { load } from '../../storage/storage';

import { useEffect } from 'react';
import Router from 'next/router';

const Messages = () => {

  useEffect(() => {
    if (!load('token')) {
      Router.push('/')
    }
  })
  


  return ( 
    <>
      <Head title={'Messages'} />
      <Container>
        <h1>Messages</h1>
        <MessageItems headings={['Name', 'Subject', 'Date']} />
        <TravelTips />
    </Container>
    </>
   );
}
 
export default Messages;