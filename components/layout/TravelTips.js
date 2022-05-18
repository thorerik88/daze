import styles from '../../styles/components/reuse/TravelTips.module.scss';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';

const TravelTips = () => {
  return ( 
    <Container>
      <div className={styles.wrapper}>
        <h1>Travel Tips</h1>
        <div className={styles.travelTips}>
          <div className={styles.image}>
            <Link href="https://floyen.no" passHref={true}>
              <a><Image
                src={'/floyen1000.jpg'}
                width={1000}
                height={600}
                responsive='true'
                alt='image of Fløyen in Bergen'
              />
              <div className={styles.imageTag}><h2>Fløyen</h2></div>
              </a>
            </Link>
          </div>
          <div className={styles.image}>
            <Link href="https://visitbergen.com/ting-a-gjore/bryggen-i-bergen-p878553" passHref={true}>
              <a><Image
                src={'/harbor1000.jpg'}
                width={1000}
                height={600}
                responsive='true'
                alt='image of the harbor in Bergen'
              />
              <div className={styles.imageTag}><h2>Bergen Harbor</h2></div>
              </a>
            </Link>
          </div>
        </div>
      </div> 
    </Container>
  );
}
 
export default TravelTips;