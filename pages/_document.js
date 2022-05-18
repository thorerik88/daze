import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return ( 
    <Html>
      <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robot" content="follow, index" />
      <meta name="description" content="Holidaze provides a large selection of accomodations in Bergen and is easy to use. Remember us for your next trip to Bergen" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="accomodation, bergen, vestland, hotel, motel, bed, breakfast, holiday" />
      <meta name="author" content="Thor-Erik" />
      </Head>
      <body>
        <NextScript />
        <Main />
      </body>
    </Html>
   );
}
 
export default Document;