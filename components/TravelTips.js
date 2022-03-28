import layout from '../styles/global/layout.module.scss';
import styles from '../styles/components/TravelTips.module.scss';
import Image from 'next/image';

const TravelTips = () => {
  return ( 
    <div className={styles.travelTips}>
      <h1>Travel Tips</h1>
      <div className={styles.image}>
        <Image
          src={'/floyen1000.jpg'}
          width={340}
          height={200}
          alt='image of Fløyen in Bergen'
        />
        <span className={styles.imageTag}><h2>Fløyen</h2></span>
      </div>
      <div className={styles.image}>
        <Image
          src={'/harbor1000.jpg'}
          width={340}
          height={200}
          alt='image of the harbor in Bergen'
        />
        <span className={styles.imageTag}><h2>Bergen Harbor</h2></span>
      </div>
    </div> 
  );
}
 
export default TravelTips;