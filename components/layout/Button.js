import styles from '../../styles/components/reuse/Button.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const Button = ({ value, buttonType, icon, linkData }) => { 

  return  ( 
    <div className={buttonType === 'submit' ? styles.submit : styles.book}>
      {icon ? 
        <div className={styles.buttonWrapper}>
          <Link href={'/establishments/' + linkData} key={linkData}>
          <a>
            <div className={styles.iconBg}>
              <FontAwesomeIcon className={styles.icon} icon={ faBellConcierge } />
            </div>
            <div className={styles.button}>
              
              <span>{value}</span>
              
            </div>
          </a>
          </Link>
        </div>
        :
        <div className={styles.buttonWrapper}>
          <a>
            <input type={buttonType} value={value} />
          </a>
        </div>
      }
    </div>
  ) 
}
 
export default Button;