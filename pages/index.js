import Head from '../components/Head';
import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

import Hero from '../components/Hero';
import TravelTips from '../components/TravelTips';
import Container from '../components/Container';

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
