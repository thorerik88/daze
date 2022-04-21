import styles from '../../styles/pages/establishments/Reservation.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Container from "../layout/Container";
import Button from "../layout/Button";
import Nationality from './Nationality';

const Reservation = () => {
  return (   
    <>
      
      <form className={styles.form} name='contact' type='submit'>
        <div className={styles.contentWrapper}>
          <h2>Make a reservation</h2>
          <div className={styles.inputGroup}>
            <input type='text' name='name' />
            <span>Name</span>
          </div>
          <div className={styles.inputGroup}>
            <input type='number' name='phone' />
            <span>Phone</span>
          </div>
          <div className={styles.inputGroups}>
            <div className={styles.col}>
              <input type='date' name='checkin' />
              <span>Checkin</span>
            </div>
            <div className={styles.col}>
              <input type='date' name='checkout' />
              <span>Checkout</span>
            </div>
          </div>
          <div className={styles.inputGroups}>
            <div className={styles.qty}>
              <span>Guests</span>
              <div className={styles.qtyAction}>
                <FontAwesomeIcon className={styles.actionButton} icon={faMinus} />
                <input type='number' name='checkin' value='1' />
                <FontAwesomeIcon className={styles.actionButton} icon={faPlus} />
              </div>
            </div>
            <div className={styles.qty}>
              <span>Rooms</span>
              <div className={styles.qtyAction}>
                <FontAwesomeIcon className={styles.actionButton} icon={faMinus} />
                <input type='number' name='checkin' value='1' />
                <FontAwesomeIcon className={styles.actionButton} icon={faPlus} />
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <Nationality />
            <span>Nationality</span>
          </div>
          <div className={styles.inputGroup}>
                <div className={styles.checkboxes}>
                  <input id='newsletter' name='newsletter' type='checkbox' />
                  <label htmlFor='newsletter'>Newsletter</label>
                </div>
              </div>
          <Button value={'Make Reservation'} buttonType={'submit'}/>
        </div>
      </form>
    </>
  );
}
 
export default Reservation;