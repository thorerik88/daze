import styles from '../styles/pages/contact-us/Contact.module.scss';

import Container from '../components/layout/Container';
import Button from '../components/layout/Button';
import Head from '../components/layout/Head';

const Contact = () => {
  return ( 
    <>
      <Head title={'Contact Us'} />
      <Container>
        <div className={styles.wrapper}>
        <h1>Contact Us</h1>

        <form className={styles.form} name='contact' type='submit'>
          <div className={styles.heading}>
            <h2>Contact form</h2>
          </div>
          <div className={styles.contentWrapper}>
            <input type='text' name='name' placeholder='Your name' />
            <input type='email' name='email' placeholder='Your email' />
            <input type='text' name='subject' placeholder='Subject' />
            <textarea name='message' rows='5' placeholder='Your message' />
            <Button value={'Send'} buttonType={'submit'}/>
          </div>
        </form>
        </div>
      </Container>
    </>
   );
}
 
export default Contact;