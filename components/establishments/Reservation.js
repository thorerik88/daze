import styles from '../../styles/pages/establishments/Reservation.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Button from "../layout/Button";

import Router from 'next/router'

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormValidation } from '../../constants/FormValidation';
import { timestamp } from '../../constants/date';

import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { doc, setDoc, collection, getFirestore } from "firebase/firestore";



const Reservation = (hotelName) => {
  initializeApp(clientCredentials);
  const db = getFirestore();  

  // set initial states
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [checkinError, setCheckinError] = useState(false);
  const [checkoutError, setCheckoutError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // submit form
  const { register, handleSubmit, setValue } = useForm({});

  useEffect(() => {
    setValue('guests', guests)
    setValue('rooms', rooms)
  }, [rooms, guests])

  // change input value on decrement
  const handleDecrement = (e) => {
    const button = e.currentTarget.dataset.name;
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
    const button = e.currentTarget.dataset.name;
    if (button === 'guests') {
      if (guests < 9 ) {
        setGuests(prevCount => prevCount + 1)
      }
    } else if (button === 'rooms') {
      if (rooms < 9) {
        setRooms(prevCount => prevCount + 1)
      }
    }
  }

  // submit data
  const onSubmit = (data) => {
    makeReservation(data);
  };

  
  const makeReservation = async (data) => {
    // reset error
    setNameError(false);
    setPhoneError(false);
    setEmailError(false);
    setCheckinError(false);
    setCheckoutError(false);
    setErrorMessage(false);

    // Field validation
    const checkName = FormValidation(data.name, 'string');
    const checkPhone = FormValidation(data.phone, 'number');
    const checkEmail = FormValidation(data.email, 'phone');
    
    const todaysDate = Math.round((new Date()).getTime() / 1000);
    const currentTime = timestamp();

    // make sure checkin is before checkout
    if (data.checkin > data.checkout) {
      setCheckinError(true);
      setCheckoutError(true)
    } else {
      setCheckinError(false)
      setCheckoutError(false)
    }
    

    // submit data if OK
    if (checkName && checkPhone && checkEmail && data.checkin && data.checkout) {
      const newEnquiry = doc(collection(db, 'enquiries'))
      await setDoc(newEnquiry, {
        hotel_name: hotelName.value,
        checkin: data.checkin,
        checkout: data.checkout,
        email: data.email,
        guests: data.guests,
        name: data.name,
        newsletter: data.newsletter,
        phone: data.phone,
        rooms: data.rooms,
        date: todaysDate,
        time: currentTime,
      })
      setSuccessMessage(true);
      setTimeout(function() {
        Router.push('/')
      }, 3000)
      
      // set individual error effects
    } else {
      setErrorMessage(true);
      if (!checkName) {
        setNameError(true);
      }
      if (!checkPhone) {
        setPhoneError(true);
      } 
      if(!checkEmail) {
        setEmailError(true);
      }
      if(!data.checkin) {
        setCheckinError(true);
      }
      if(!data.checkout) {
        setCheckoutError(true);
      }
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
            <input className={checkinError ? styles.danger : ''} type='date' name='checkin' {...register('checkin')} />
            <span>Checkin</span>
          </div>
          <div className={styles.col}>
            <input className={checkoutError ? styles.danger : ''} type='date' name='checkout' {...register('checkout')} />
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
          <div className={styles.checkboxes}>
            <input id='newsletter' name='newsletter' type='checkbox' {...register('newsletter')}/>
            <label htmlFor='newsletter'>Newsletter</label>
          </div>
        </div>
        <div className={errorMessage ? styles.messageError : styles.message}>
          <p>Required fields</p>
        </div>
        <div className={successMessage ? styles.messageSuccess : styles.message}>
          <p>Enquiry successfully sent, redirection to home page</p>
        </div>
        <Button value={'Make Reservation'} buttonType={'submit'}/>
      </div>
    </form>
  
  );
}
 
export default Reservation;