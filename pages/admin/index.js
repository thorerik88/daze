import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Container from "../../components/layout/Container";
import styles from '../../styles/components/Admin.module.scss';
import Button from '../../components/layout/Button';

const Admin = () => {
  return ( 
    <Container>
      <form className={styles.form} name='login' type='submit'>
        <div className={styles.heading}>
        <FontAwesomeIcon icon={faLock} />
          <h2>ADMIN LOGIN</h2>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.inputs}>
            <div className={styles.username}>
              <FontAwesomeIcon icon={faUser} />
              <input type='text' name='name' placeholder='Username' />
            </div>
            <div className={styles.password}>
              <FontAwesomeIcon icon={faLock} />
              <input type='password' name='password' placeholder='Password' />
            </div>
          </div>
          <Button className={styles.button} value={'Login'} buttonType={'submit'}/>
        </div>
      </form>
    </Container>
  );
}
 
export default Admin;