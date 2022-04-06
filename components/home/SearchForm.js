import styles from '../../styles/pages/home/SearchForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

import Button from '../layout/Button';
import { useState } from 'react';

const SearchForm = (establishments) => {
  
  const [results, setResults] = useState([]);

  let list = establishments.children.props.data;

  const handleSearch = (e) => {

    let searchValue = e.target.value.trim().toLowerCase();

    const filteredEst = list.filter((item) => {
      if (item.attributes.name.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    if (filteredEst) {
      setResults(filteredEst)
    }
    if (searchValue.length === 0) {
      setResults([]);
    }
  }

  return ( 
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <div className={styles.searchWrap}>
          <FontAwesomeIcon className={styles.icon} icon={faBed} />
          <input type='text' onKeyUp={handleSearch} placeholder="Establishment..."/>
          <ul>
            {results.map(item => {
              return <li key={item.id}>{`${item.attributes.name}`}</li>
            })}
          </ul>
        </div>
        <Button value={'Search'} buttonType={'submit'} type='button'/>
      </form>
    </div>
   );
}
export default SearchForm;