import styles from '../../styles/pages/establishments/Reservation.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Container from "../layout/Container";
import Button from "../layout/Button";
import Nationality from './Nationality';
import { NationalityContext } from '../../context/Context';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


const Reservation = () => {

  const [nat, setNat] = useState('');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let nationality = {'nationality': nat}
    console.log(data, nationality)
  };

  return (   
    <form className={styles.form} name='contact' onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.contentWrapper}>
        <h2>Make a reservation</h2>
        <div className={styles.inputGroup}>
          <input type='text' name='name' {...register('name')} />
          <span>Name</span>
        </div>
        <div className={styles.inputGroup}>
          <input type='number' name='phone' {...register('phone')} />
          <span>Phone</span>
        </div>
        <div className={styles.inputGroup}>
          <input type='email' name='email' {...register('email')} />
          <span>Email</span>
        </div>
        <div className={styles.inputGroups}>
          <div className={styles.col}>
            <input type='date' name='checkin' {...register('checkin')} />
            <span>Checkin</span>
          </div>
          <div className={styles.col}>
            <input type='date' name='checkout' {...register('checkout')} />
            <span>Checkout</span>
          </div>
        </div>
        <div className={styles.inputGroups}>
          <div className={styles.qty}>
            <span>Guests</span>
            <div className={styles.qtyAction}>
              <FontAwesomeIcon className={styles.actionButton} icon={faMinus} />
              <input type='number' name='guests' readOnly='defaultValue' value='1' {...register('guests')}/>
              <FontAwesomeIcon className={styles.actionButton} icon={faPlus} />
            </div>
          </div>
          <div className={styles.qty}>
            <span>Rooms</span>
            <div className={styles.qtyAction}>
              <FontAwesomeIcon className={styles.actionButton} icon={faMinus} />
              <input type='number' name='rooms' readOnly='defaultValue' value='1' {...register('rooms')}/>
              <FontAwesomeIcon className={styles.actionButton} icon={faPlus} />
            </div>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <NationalityContext.Provider value={{ nat, setNat }}>
            <Nationality />
          </NationalityContext.Provider>
          <span>Nationality</span>
        </div>
        <div className={styles.inputGroup}>
              <div className={styles.checkboxes}>
                <input id='newsletter' name='newsletter' type='checkbox' {...register('newsletter')}/>
                <label htmlFor='newsletter'>Newsletter</label>
              </div>
            </div>
        <Button value={'Make Reservation'} buttonType={'submit'}/>
      </div>
    </form>
  
  );
}
 
export default Reservation;