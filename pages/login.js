import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import Container from "../components/layout/Container";
import styles from '../styles/pages/login/Login.module.scss';
import Button from '../components/layout/Button';
import Head from '../components/layout/Head';
import { useState } from 'react';
import { FormValidation } from "../constants/FormValidation";
import { LoginCall } from "../api/LoginCall";
import { save } from "../storage/storage";

const Login = () => {

  const [message, setMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [callType, setCallType] = useState('');

  const {register, handleSubmit} = useForm();

  const loginVal = async (e) => {
    
    let username = e.username;
    let password = e.password;

    let checkUsername = FormValidation(username, 'string');
    let checkPassword = FormValidation(password, 'password');

    if (!checkUsername || !checkPassword) {
      return setMessage('Please type username and password'), setLoginSuccess(false)
    } else {
      const loginResult = await LoginCall(username, password);
      
      console.log(loginResult)

      if (loginResult.error) {
        setMessage('Wrong username and/or password')
        setLoginSuccess(false);
      } else {
        setMessage('You are now logged in');
        setLoginSuccess(true);
        save('token', loginResult.jwt);
        window.location.href = '/admin';
      }
    }
  }

  return ( 
    <>
      <Head title={'Admin'} />
      <Container>
        <div className={styles.wrapper}>
          <h1>Admin</h1>
          <form className={styles.form} name='login' onSubmit={handleSubmit(loginVal)}>
            <div className={styles.heading}>
            <FontAwesomeIcon icon={faLock} />
              <h2>ADMIN LOGIN</h2>
            </div>
            <div className={styles.formWrapper}>
              <div className={styles.inputs}>
                <div className={styles.username}>
                  <FontAwesomeIcon icon={faUser} />
                  <input type='text' name='username' placeholder='Username' {...register('username')}/>
                </div>
                <div className={styles.password}>
                  <FontAwesomeIcon icon={faLock} />
                  <input type='password' name='password' placeholder='Password' {...register('password')} />
                </div>
              </div>
              <Button className={styles.button} value={'Login'} buttonType={'submit'} />
              <div className={loginSuccess ? styles.success : styles.error}>{message}</div>
            </div>
          </form>
        </div>
      </Container>
    </>
   );
}
 
export default Login;