import Container from "../components/layout/Container";
import MessageItems from "../components/MessageItems";
import TravelTips from "../components/TravelTips";

const Messages = () => {
  return ( 
    <Container>
      <h1>Messages</h1>
      <MessageItems headings={['Name', 'Subject', 'Date']} />
      <TravelTips />
    </Container>
   );
}
 
export default Messages;