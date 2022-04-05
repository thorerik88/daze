import styles from '../../styles/pages/SearchForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

import Button from '../layout/Button';

const SearchForm = () => {

  return ( 
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <div className={styles.inputWrap}>
          <FontAwesomeIcon className={styles.icon} icon={faBed} />
          <input type='text' placeholder="Establishment..."/>
        </div>
        <Button value={'Search'} buttonType={'submit'} type='button'/>
      </form>
    </div>
   );
}
 
export default SearchForm;