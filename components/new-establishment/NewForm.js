import Container from '../../components/layout/Container';
import styles from '../../styles/pages/new-establishment/NewEst.module.scss';
import Button from '../../components/layout/Button';

import Router from 'next/router'

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { clientCredentials } from "../../firebaseConfig";
import { doc, setDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, uploadBytes, ref } from 'firebase/storage';


const NewForm = () => {

  initializeApp(clientCredentials);
  const db = getFirestore();    

  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [townError, setTownError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [altError, setAltError] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    submitNewEstblishment(data);
  };

  const submitNewEstblishment = async (data) => {
    setNameError(false);
    setPriceError(false);
    setStreetError(false);
    setZipError(false);
    setTownError(false);
    setDescriptionError(false);
    setRatingError(false);
    setFileError(false);
    setAltError(false);
    setErrorMessage(false);


    // check if all information is present
    if (data.name && data.price && data.street && data.zip && data.town && data.description && data.rating && data.alt_text && data.file.length > 0) {

      // save image referenace to storage
      const storage = getStorage()
      const imageRef = ref(storage, data.file[0].name)


      // save file to storage
      const storageRef = ref(storage, imageRef)
      uploadBytes(storageRef, data.file[0]).then((snapshot) => {
        return snapshot
      })

      // save data to establishments
      const newEstablishment = doc(collection(db, 'establishments'))
      await setDoc(newEstablishment, {
        name: data.name,
        price: data.price,
        street: data.street,
        zip: data.zip,
        town: data.town,
        description: data.description,
        image_url: data.file[0].name,
        rating: data.rating,
        breakfast: data.breakfast,
        dogs: data.dogs,
        cancelation: data.cancelation,
        alt_text: data.alt_text,
      })
      setSuccessMessage(true);
      setTimeout(function() {
        Router.reload(window.location.pathname)
      }, 3000)
      alert("Success! New establishment added.")
    } else {
      setErrorMessage(true);
      if (!data.name) {
        setNameError(true);
      }
      if (!data.price) {
        setPriceError(true);
      }
      if (!data.street) {
        setStreetError(true);
      }
      if (!data.zip) {
        setZipError(true);
      }
      if (!data.town) {
        setTownError(true);
      }
      if (!data.description) {
        setDescriptionError(true);
      }
      if (data.file.length === 0) {
        setFileError(true);
      }
      if (!data.rating) {
        setRatingError(true);
      }
      if (!data.alt_text) {
        setAltError(true);
      }
    }
  }

  return ( 
    <Container>
      <div className={styles.wrapper}>
        <h1>New Establishment</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.heading}>
            <h2>Add new</h2>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.inputGroup}>
              <input className={nameError ? styles.danger : ''} type='text' name='name' {...register('name')} />
              <span>Name</span>
            </div>
            <div className={styles.inputGroup}>
              <input className={priceError ? styles.danger : ''} type='number' name='price' {...register('price')} />
              <span>Price</span>
            </div>
            <div className={styles.inputGroup}>
              <input className={streetError ? styles.danger : ''} type='text' name='street' {...register('street')} />
              <span>Street</span>
            </div>
            <div className={styles.addressGroup}>
              <div className={styles.inputGroup}>
                <input className={zipError ? styles.danger : ''} type='number' name='zip' {...register('zip')} />
                <span>Zip</span>
              </div>
              <div className={styles.inputGroup}>
                <input className={townError ? styles.danger : ''} type='text' name='town' {...register('town')} />
                <span>Town</span>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <textarea className={descriptionError ? styles.danger : ''} type='text' name='description' {...register('description')} />
              <span>Description</span>
            </div>
            <div className={styles.inputGroup}>
              <input className={ratingError ? styles.danger : ''} type='number' name='rating' {...register('rating')} />
              <span>Rating (1-10)</span>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.upload}>
                <input className={fileError ? styles.danger : ''} type='file' name='filename' {...register('file')} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <input className={altError ? styles.danger : ''} type='text' name='alt_text' {...register('alt_text')} />
              <span>Alt Text</span>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.checkboxes}>
                <input id='breakfast' name='breakfast' type='checkbox' {...register('breakfast')} />
                <label htmlFor='breakfast'>Breakfast included</label>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.checkboxes}>
                <input id='dogs' name='dogs' type='checkbox' {...register('dogs')} />
                <label htmlFor='dogs'>Dogs allowed</label>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.checkboxes}>
                <input id='cancelation' type='checkbox' {...register('cancelation')} />
                <label htmlFor='cancelation'>Free cancelation</label>
              </div>
            </div>
            <div className={errorMessage ? styles.messageError : styles.message}>
              <p>Required fields</p>
            </div>
            <div className={successMessage ? styles.messageSuccess : styles.message}>
              <p>New establishment successfully added, refreshing</p>
            </div>
            <Button value={'Submit New'} buttonType={'submit'}/>
          </div>
        </form>
      </div>
    </Container> 
  );
}
 
export default NewForm;