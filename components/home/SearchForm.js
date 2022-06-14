import styles from '../../styles/pages/home/SearchForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

import { useState } from 'react';

const SearchForm = ({ ...establishments }) => {
  
  const [results, setResults] = useState([]);

  let list = Object.values(establishments.children.props);

  const handleSearch = (e) => {

    let searchValue = e.target.value.trim().toLowerCase();

    const filteredEst = list.filter((item) => {
      if (item.name.toLowerCase().startsWith(searchValue)) {
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
      <div className={styles.heading}>
          <h1>Find your hotel today</h1>  
      </div>        
      <form className={styles.form}>
        <div className={styles.searchWrap}>
          <FontAwesomeIcon className={styles.icon} icon={faBed} />
          <input type='text' onKeyUp={handleSearch} placeholder="Establishment..."/>
          <ul>
            {results.map(item => {
              return ( 
                <li key={`${item.docID}`} >
                  <Link href={'/establishments/' + `${item.docID}`}>
                    <a>{item.name}</a>
                  </Link>
                </li>)
            })}
          </ul>
        </div>
      </form>
    </div>
   );
}
export default SearchForm;