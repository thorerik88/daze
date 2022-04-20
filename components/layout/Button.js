import styles from '../../styles/components/reuse/Button.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const Button = ({ value, buttonType, icon, linkData }) => { 

  return  ( 
    <div className={buttonType === 'submit' ? styles.submit : styles.book}>
      {icon ? 
        <div className={styles.buttonWrapper}>
          <div className={styles.iconBg}>
            <FontAwesomeIcon className={styles.icon} icon={ faBellConcierge } />
          </div>
          <div className={styles.button}>
            <Link href={'/establishments/' + linkData} key={linkData}>
            <a>{value}</a>
            </Link>
          </div>
        </div>
        :
        <div>
          <input type={buttonType} value={value} />
        </div>
      }
    </div>
  ) 
}
 
export default Button;