

import Container from "../../components/layout/Container";
import Head from "../../components/layout/Head";
import MessageItems from "../../components/MessageItems";
import TravelTips from "../../components/TravelTips";

const Enquiries = () => {
  return ( 
    <>
      <Head title={'Enquiries'} />
      <Container>
        <h1>Enquiries</h1>
        <MessageItems headings={['Name', 'Rooms', 'Date']} />
        <TravelTips />
      </Container>
    </>
   );
}
 
export default Enquiries;