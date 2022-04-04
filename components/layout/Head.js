import NextHead from 'next/head';

const Head = ({ title = '' }) => {
    return ( 
        <NextHead>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>
                Holidaze{title ? ' | ' : ''}
                {title}
            </title>
        </NextHead>
     );
}
 
export default Head;