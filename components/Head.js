import NextHead from 'next/head';

const Head = ({ title = '' }) => {
    return ( 
        <NextHead>
            <title>
                Holidaze{title ? ' | ' : ''}
                {title}
            </title>
        </NextHead>
     );
}
 
export default Head;