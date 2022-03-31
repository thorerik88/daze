import Head from '../components/layout/Head';
import styles from '../styles/pages/Home.module.scss'

import Hero from '../components/home/Hero';
import TravelTips from '../components/TravelTips';
import Container from '../components/layout/Container';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title={'Home'} />
      <Hero />
      <Container>
        <TravelTips />
      </Container>      
    </div>
  )
}
