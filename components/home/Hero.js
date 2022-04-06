import styles from '../../styles/pages/home/Hero.module.scss';

import Image from 'next/image';
import SearchForm from './SearchForm';

const Hero = (props) => {
  
  return ( 
    <div className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image 
          src={'/fancy1800.jpg'} 
          priority='true'
          responsive='true'
          layout='fill'
          objectFit='cover' 
          alt="image showing a fancy hotel at nighttime"
        />
      </div>
      <SearchForm {...props}/>
    </div>
   );
}
 
export default Hero;