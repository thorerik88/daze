import styles from '../../styles/components/reuse/Button.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';

const Button = ({ value, buttonType, icon }) => { 

  return  ( 
    <div className={buttonType === 'submit' ? styles.submit : styles.book}>
      {icon ? 
        <div className={styles.buttonWrapper}>
          <div className={styles.iconBg}>
            <FontAwesomeIcon className={styles.icon} icon={ faBellConcierge } />
          </div>
          <div className={styles.button}>
            <a>{value}</a>
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