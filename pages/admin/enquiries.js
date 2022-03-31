

import Container from "../../components/layout/Container";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";

const Enquiries = () => {
  return ( 
    <Container>
      <h1>Enquiries</h1>
      <MessageItems headings={['Name', 'Rooms', 'Date']} />
      <TravelTips />
    </Container>
   );
}
 
export default Enquiries;