import styles from '../styles/components/Contact.module.scss';

import Container from '../components/layout/Container';
import Button from '../components/layout/Button';

const Contact = () => {
  return ( 
    <Container>
      <h1>Contact Us</h1>
      <form className={styles.form} name='contact' type='submit'>
        <div className={styles.heading}>
          <h2>Contact form</h2>
        </div>
        <div className={styles.wrapper}>
          <input type='text' name='name' placeholder='Your name' />
          <input type='email' name='email' placeholder='Your email' />
          <input type='text' name='subject' placeholder='Subject' />
          <textarea name='message' rows='5' placeholder='Your message' />
          <Button value={'Send'} buttonType={'submit'}/>
        </div>
      </form>
    </Container>
   );
}
 
export default Contact;