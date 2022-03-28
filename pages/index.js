import Head from '../components/Head';
import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title={'Home'} />
      <Hero />
    </div>
  )
}
