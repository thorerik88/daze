import styles from '../styles/components/Button.module.scss';

const Button = ({ value }) => { 
  return  ( <a className={styles.button}>{value}</a> ) 
}
 
export default Button;