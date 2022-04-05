import styles from '../styles/components/TravelTips.module.scss';
import Container from '../components/layout/Container';
import Image from 'next/image';

const TravelTips = () => {
  return ( 
    <Container>
      <div className={styles.wrapper}>
        <h1>Travel Tips</h1>
        <div className={styles.travelTips}>
          <div className={styles.image}>
            <Image
              src={'/floyen1000.jpg'}
              width={1000}
              height={600}
              responsive='true'
              alt='image of Fløyen in Bergen'
            />
            <span className={styles.imageTag}><h2>Fløyen</h2></span>
          </div>
          <div className={styles.image}>
            <Image
              src={'/harbor1000.jpg'}
              width={1000}
              height={600}
              responsive='true'
              alt='image of the harbor in Bergen'
            />
            <span className={styles.imageTag}><h2>Bergen Harbor</h2></span>
          </div>
        </div>
      </div> 
    </Container>
  );
}
 
export default TravelTips;