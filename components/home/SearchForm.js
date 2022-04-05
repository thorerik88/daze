import styles from '../../styles/pages/SearchForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

import Button from '../layout/Button';
import VisitorCall from '../../api/VisitorCall';
import { useState, useEffect } from 'react';
import { BASE_URL, ESTABLISHMENT_URL } from '../../api/api';

const SearchForm = ({ establishments }) => {

  console.log(establishments)

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

const getStaticProps = async () => {
  const res = await fetch(BASE_URL + ESTABLISHMENT_URL);
  const establishments = await res.json();

  return {
    props: {
      establishments: establishments,
    },
  }
}