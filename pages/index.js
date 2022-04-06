import Head from '../components/layout/Head';
import styles from '../styles/pages/home/Home.module.scss';

import Hero from '../components/home/Hero';
import TravelTips from '../components/layout/TravelTips';
import Container from '../components/layout/Container';
import { BASE_URL, ESTABLISHMENT_URL } from '../api/api';
import SearchForm from '../components/home/SearchForm';

export const getStaticProps = async () => {
  const res = await fetch(BASE_URL + ESTABLISHMENT_URL);
  const establishments = await res.json();

  return {
    props: {
      establishments: establishments,
    },
  }
}

export default function Home({ establishments }) {

  return (
    <div className={styles.container}>
      <Head title={'Home'} />
      <Hero>
        <SearchForm {...establishments} />
      </Hero>
      <Container>
        <TravelTips />
      </Container>      
    </div>
  )
}