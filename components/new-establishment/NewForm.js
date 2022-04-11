import Container from '../../components/layout/Container';
import styles from '../../styles/pages/new-establishment/NewEst.module.scss';
import Button from '../../components/layout/Button';

const NewForm = () => {
  return ( 
    <Container>
        <div className={styles.wrapper}>
          <h1>New Establishment</h1>
          <form className={styles.form} name='contact' type='submit'>
            <div className={styles.heading}>
              <h2>Add new</h2>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.inputGroup}>
                <input type='text' name='name' />
                <span>Name</span>
              </div>
              <div className={styles.inputGroup}>
                <input type='number' name='price' />
                <span>Price</span>
              </div>
              <div className={styles.inputGroup}>
                <input type='text' name='street' />
                <span>Street</span>
              </div>
              <div className={styles.addressGroup}>
                <div className={styles.inputGroup}>
                  <input type='number' name='zip' />
                  <span>Zip</span>
                </div>
                <div className={styles.inputGroup}>
                  <input type='text' name='town' />
                  <span>Town</span>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <textarea type='text' name='description' />
                <span>Description</span>
              </div>
              <div className={styles.inputGroup}>
                <input type='number' name='rating' />
                <span>Rating (1-10)</span>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.upload}>
                  <input type='file' name='filename' />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.checkboxes}>
                  <input id='breakfast' name='breakfast' type='checkbox' />
                  <label htmlFor='breakfast'>Breakfast included</label>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.checkboxes}>
                  <input id='dogs' name='dogs' type='checkbox' />
                  <label htmlFor='dogs'>Dogs allowed</label>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.checkboxes}>
                  <input id='cancelation' type='checkbox' />
                  <label htmlFor='cancelation'>Free cancelation</label>
                </div>
              </div>
              <Button value={'Send'} buttonType={'submit'}/>
            </div>
          </form>
        </div>
      </Container>
   );
}
 
export default NewForm;