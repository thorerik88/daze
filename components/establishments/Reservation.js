import styles from '../../styles/pages/establishments/Reservation.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Button from "../layout/Button";
import Nationality from './Nationality';
import { NationalityContext } from '../../context/Context';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormValidation } from '../../constants/FormValidation';


const Reservation = () => {

  const [nat, setNat] = useState('');
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // submit form
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({});

  useEffect(() => {
    console.log('guests: ' + guests, 'rooms: ' + rooms)
    setValue('guests', guests)
    setValue('rooms', rooms)
  }, [rooms, guests])

  // change input value on decrement
  const handleDecrement = (e) => {
    let button = e.currentTarget.dataset.name;
    if (button === 'guests') {
      if (guests < 2) {
        setGuests(1)
      } else {
        setGuests(prevCount => prevCount - 1)
      }
        

    } else if (button === 'rooms') {
      if (rooms < 2) {
        setRooms(1)
      } else {
        setRooms(prevCount => prevCount - 1)
      }
    }
  }
  // change input value on increment

  const handleIncrement = (e) => {
    let button = e.currentTarget.dataset.name;
    if (button === 'guests') {
      if (guests < 8 ) {
        setGuests(prevCount => prevCount + 1)
      }
    } else if (button === 'rooms') {
      if (rooms < 8) {
        setRooms(prevCount => prevCount + 1)
      }
    }
  }

  const onSubmit = (data) => {
    let nationality = {'nationality': nat}
    data = {...data, ...nationality}
    makeReservation(data);
  };

  
  const makeReservation = async (data) => {
    setNameError(false);
    setPhoneError(false);
    setEmailError(false);

    let checkName = FormValidation(data.name, 'string');
    let checkPhone = FormValidation(data.phone, 'number');
    let checkEmail = FormValidation(data.email, 'email');

    if (checkName && checkPhone && checkEmail) {
      console.log(data)
    }
     
    if (!checkName) {
      setNameError(true);
    }
    if (!checkPhone) {
      setPhoneError(true);
    } 
    if(!checkEmail) {
      setEmailError(true);
    }

  }

  return (   
    <form className={styles.form} name='contact' onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.contentWrapper}>
        <h2>Make a reservation</h2>
        <div className={styles.inputGroup}>
          <input className={nameError ? styles.danger : ''} type='text' name='name' {...register('name')} />
          <span>Name</span>
        </div>
        <div className={styles.inputGroup}>
          <input className={phoneError ? styles.danger : ''} type='number' name='phone' {...register('phone')} />
          <span>Phone</span>
        </div>
        <div className={styles.inputGroup}>
          <input className={emailError ? styles.danger : ''} type='email' name='email' {...register('email')} />
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
              <div className={styles.actionButton} data-name={'guests'} onClick={handleDecrement}><FontAwesomeIcon icon={faMinus} /></div>
              <input type='number' name='guests' readOnly='defaultValue' value={guests} {...register('guests', {valueAsNumber: true})}/>
              <div className={styles.actionButton} data-name={'guests'} onClick={handleIncrement}><FontAwesomeIcon icon={faPlus} /></div>
            </div>
          </div>
          <div className={styles.qty}>
            <span>Rooms</span>
            <div className={styles.qtyAction}>
                <div className={styles.actionButton} data-name={'rooms'} onClick={handleDecrement} ><FontAwesomeIcon icon={faMinus} /></div>
                <input type='number' name='rooms' readOnly='defaultValue' value={rooms} {...register('rooms', {valueAsNumber: true})}/>
                <div className={styles.actionButton} data-name={'rooms'} onClick={handleIncrement}><FontAwesomeIcon icon={faPlus} /></div>
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