import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/pages/establishments/Establishments.module.scss';

import Image from 'next/image';
import Container from '../../components/layout/Container';
import Button from '../../components/layout/Button';
import Head from '../../components/layout/Head';
import { BASE_URL, ESTABLISHMENT_URL } from "../../api/api";

export const getStaticProps = async () => {
  const response = await fetch(BASE_URL + ESTABLISHMENT_URL);
  const establishments = await response.json();

  return {
    props: { establishments : establishments }
  }
}

const establishments = ({ establishments }) => {

  let listEst = establishments.data;
  console.log(listEst)

  return ( 
    <>
      <Head title={'Establishments'} />
      <Container>
        <h1>Establishments</h1>
        <div className={styles.establishments}>
          {listEst.map(item => {
            return (
              <div className={styles.establishment} key={item.id}>
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
                    <h2>{item.attributes.name}</h2>
                  </div>
                  <div className={styles.price}>
                    <h2>{item.attributes.price} kr</h2>
                  </div>
                </div>
                <div className={styles.text}>
                  <div className={styles.address}>
                    <div className={styles.addressIcon}>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p>{item.attributes.street_address}</p>
                    </div>
                    <p>{item.attributes.zip_code} {item.attributes.town}</p>
                  </div>
                  <ul className={styles.options}>
                    {item.attributes.breakfast ? <li>Breakfast Included</li> : ''}
                    {item.attributes.free_cancelation ? <li>Free cancelation</li> : ''}
                    {item.attributes.dog_allowed ? <li>Dogs allowed</li> : ''}
                  </ul>
                </div>    
                <div className={styles.button}>
                  <Button value={'BOOK'} buttonType={'book'} icon={'fa-bell'} type='button'/>
                </div>
              </div>
            </div>
            )
          })} 
        </div>
      </Container> 
    </>
  );
}
 
export default establishments;