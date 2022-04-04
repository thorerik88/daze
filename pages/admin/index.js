import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import Container from "../../components/layout/Container";
import styles from '../../styles/components/Admin.module.scss';
import Button from '../../components/layout/Button';
import Head from '../../components/layout/Head';
import { useState, useRef } from "react";
import { FormValidation } from "../../constants/FormValidation";
import { apiCall } from "../../api/ApiCall";



const Admin = () => {

  const [message, setMessage] = useState('');

  const {register, handleSubmit} = useForm();
  const loginVal = (e) => {
    const username = e.username;
    const password = e.password;
    let checkUsername = FormValidation(username, 'string');
    let checkPassword = FormValidation(password, 'password');
    
    if (!checkUsername || !checkPassword) {
      setMessage('Min. 8 chars long please')
    } else {
      setMessage('');
      apiCall(username, password, 'POST');
    }

  }

  

  return ( 
    <>
      <Head title={'Admin'} />
      <Container>
        <form className={styles.form} name='login' onSubmit={handleSubmit(loginVal)}>
          <div className={styles.heading}>
          <FontAwesomeIcon icon={faLock} />
            <h2>ADMIN LOGIN</h2>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.inputs}>
              <div className={styles.username}>
                <FontAwesomeIcon icon={faUser} />
                <input type='text' name='username' value='admin' placeholder='Username' {...register('username')}/>
              </div>
              <div className={styles.password}>
                <FontAwesomeIcon icon={faLock} />
                <input type='password' name='password' value='Admin1234' placeholder='Password' {...register('password')} />
              </div>
            </div>
            <Button className={styles.button} value={'Login'} buttonType={'submit'} />
            <div className={styles.loginMessage}>{message}</div>
          </div>
        </form>
      </Container>
    </>
  );
}
 
export default Admin;