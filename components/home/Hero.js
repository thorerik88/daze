import styles from '../../styles/pages/Home.module.scss';

import Image from 'next/image';
import SearchForm from './SearchForm';

const Hero = () => {
  return ( 
    <div className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image 
          src={'/fancy1000.jpg'} 
          priority='true'
          // width={1000}
          // height={685}
          responsive='true'
          layout='fill'
          objectFit='cover' 
          alt="image showing a fancy hotel at nighttime"
        />
      </div>
        <SearchForm />
    </div>
   );
}
 
export default Hero;