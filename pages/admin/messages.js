import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";

const Messages = () => {
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