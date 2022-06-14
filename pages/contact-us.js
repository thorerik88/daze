import styles from '../styles/pages/contact-us/Contact.module.scss';

import Container from '../components/layout/Container';
import Button from '../components/layout/Button';
import Head from '../components/layout/Head';

import { useForm } from 'react-hook-form';
import { FormValidation } from '../constants/FormValidation';

import Router from 'next/router'

import { initializeApp } from "firebase/app";
import { clientCredentials } from "../firebaseConfig";
import { doc, setDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { timestamp } from '../constants/date';

const Contact = () => {
  initializeApp(clientCredentials);
  const db = getFirestore();  

  // set inital states and values
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);
  const [statusMessage, setStatusMessage] = useState([]);

  // submit form
  const { register, handleSubmit, setValue } = useForm({});
  const onSubmit = (data) => {
    sendMessage(data);
  };  

  // handle submit data
  const sendMessage = async (data) => {
    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);
    setError(false);

    // validate fields
    let checkName = FormValidation(data.name, 'string');
    let checkEmail = FormValidation(data.email, 'email'); 
    let statusMessages = [];

    // submit if validation is ok

    let todaysDate = Math.round((new Date()).getTime() / 1000);
    let currentTime = timestamp();

    if (checkName && checkEmail && data.subject && data.message) {
      const newMessage = doc(collection(db, 'contact'))
      await setDoc(newMessage, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        date: todaysDate,
        time: currentTime,
      })
      setSuccess(true);
      statusMessages.push('Your message has been sent, redirecting to homepage')
      setTimeout(function() {
        Router.push('/')
      }, 3000)
      
      // display correct error messages
    } else {
      if (!checkName) {
        setNameError(true);
        statusMessages.push('Name is required');
      }
      if (!checkEmail) {
        setEmailError(true)
        statusMessages.push('Valid email is required');
      }
      if (!data.subject) {
        setSubjectError(true);
        statusMessages.push('Subject required')
      }
      if (!data.message) {
        setMessageError(true)
        statusMessages.push('Message is required')
      }
      setError(true);
    }

    // display only one error at the time
    if (statusMessages.length > 1) {
      let message = [];
      message.push('Please fill out required fields')
      setStatusMessage(message)
    } else {
      setStatusMessage(statusMessages)
    }
  }

  return ( 
    <>
      <Head title={'Contact Us'} />
      <Container>
        <div className={styles.wrapper}>
          <h1>Contact Us</  h1>
          <form className={styles.form} name='contact' onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.heading}>
              <h2>Contact form</h2>
            </div>
            <div className={styles.contentWrapper}>
              <input className={nameError ? styles.danger : ''} type='text' name='name' placeholder='Your name' {...register('name')} />
              <input className={emailError ? styles.danger : ''} type='email' name='email' placeholder='Your email' {...register('email')}/>
              <input className={subjectError ? styles.danger : ''} type='text' name='subject' placeholder='Subject' {...register('subject')}/>
              <textarea className={messageError ? styles.danger : ''} name='message' rows='5' placeholder='Your message' {...register('message')}/>
              <ul className={success || error ? styles.messageVisible : styles.message}>
                {statusMessage.map(message => {
                  return <p key={message + '1'} className={error ? styles.error : styles.success}>{`${message}`}</p>
                  })}
              </ul>
              <Button value={'Send'} buttonType={'submit'}/>
            </div>
          </form>
        </div>
      </Container>
    </>
   );
}
 
export default Contact;