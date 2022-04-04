import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";

import { useContext, useEffect } from 'react';
import { AuthContext } from "../../context/Context";

const Messages = () => {

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      window.location.href = '/';
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