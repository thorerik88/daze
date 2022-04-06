import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/pages/establishments/Establishments.module.scss';

import Image from 'next/image';
import Container from '../components/layout/Container';
import Button from '../components/layout/Button';
import Head from '../components/layout/Head';

const establishments = () => {
  return ( 
    <>
      <Head title={'Establishments'} />
      <Container>
        <h1>Establishments</h1>
        <div className={styles.establishments}>
          <div className={styles.establishment}>
            <div className={styles.image}>
              <Image 
                src={'/fancy1000.jpg'} 
                // layout='fill'
                width={1000}
                height={685}
                responsive='true'
                objectFit='contain'
                alt='A fancy hotel'
              />
            </div>
            <div className={styles.textBox}>
              <div className={styles.heading}>
                <div className={styles.name}>
                  <h2>Zander Hotel</h2>
                </div>
                <div className={styles.price}>
                  <h2>1340 kr</h2>
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.address}>
                  <div className={styles.addressIcon}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Hotel address street</p>
                  </div>
                  <p>5050 Bergen</p>
                </div>
                <ul className={styles.options}>
                  <li>Breakfast included</li>
                  <li>Free cancelation</li>
                  <li>Free cancelation</li>
                </ul>
              </div>    
              <div className={styles.button}>
                <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button'/>
              </div>
            </div>
          </div>
          <div className={styles.establishment}>
            <div className={styles.image}>
              <Image 
                src={'/fancy1000.jpg'} 
                // layout='fill'
                width={1000}
                height={685}
                responsive='true'
                objectFit='contain'
                alt='A fancy hotel'
              />
            </div>
            <div className={styles.textBox}>
              <div className={styles.heading}>
                <div className={styles.name}>
                  <h2>Zander Hotel</h2>
                </div>
                <div className={styles.price}>
                  <h2>1340 kr</h2>
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.address}>
                  <div className={styles.addressIcon}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Hotel address street</p>
                  </div>
                  <p>5050 Bergen</p>
                </div>
                <ul className={styles.options}>
                  <li>Breakfast included</li>
                  <li>Free cancelation</li>
                  <li>Free cancelation</li>
                </ul>
              </div>    
              <div className={styles.button}>
                <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button'/>
              </div>
            </div>
          </div>

          <div className={styles.establishment}>
            <div className={styles.image}>
              <Image 
                src={'/fancy1000.jpg'} 
                // layout='fill'
                width={1000}
                height={685}
                responsive='true'
                objectFit='contain'
                alt='A fancy hotel'
              />
            </div>
            <div className={styles.textBox}>
              <div className={styles.heading}>
                <div className={styles.name}>
                  <h2>Zander Hotel</h2>
                </div>
                <div className={styles.price}>
                  <h2>1340 kr</h2>
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.address}>
                  <div className={styles.addressIcon}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Hotel address street</p>
                  </div>
                  <p>5050 Bergen</p>
                </div>
                <ul className={styles.options}>
                  <li>Breakfast included</li>
                  <li>Free cancelation</li>
                  <li>Free cancelation</li>
                </ul>
              </div>    
              <div className={styles.button}>
                <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button'/>
              </div>
            </div>
          </div>
          <div className={styles.establishment}>
            <div className={styles.image}>
              <Image 
                src={'/fancy1000.jpg'} 
                // layout='fill'
                width={1000}
                height={685}
                responsive='true'
                objectFit='contain'
                alt='A fancy hotel'
              />
            </div>
            <div className={styles.textBox}>
              <div className={styles.heading}>
                <div className={styles.name}>
                  <h2>Zander Hotel</h2>
                </div>
                <div className={styles.price}>
                  <h2>1340 kr</h2>
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.address}>
                  <div className={styles.addressIcon}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Hotel address street</p>
                  </div>
                  <p>5050 Bergen</p>
                </div>
                <ul className={styles.options}>
                  <li>Breakfast included</li>
                  <li>Free cancelation</li>
                  <li>Free cancelation</li>
                </ul>
              </div>    
              <div className={styles.button}>
                <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button'/>
              </div>
            </div>
          </div>
          
        </div>
      </Container> 
    </>
  );
}
 
export default establishments;