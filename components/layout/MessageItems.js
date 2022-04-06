import styles from '../../styles/components/reuse/MessageItems.module.scss';

const MessageItems = ({ headings }) => {

  return ( 
    <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p>{headings[0]}</p>
          <p>{headings[1]}</p>
          <p>{headings[2]}</p>
        </div>
        <div className={styles.item}>
          <p>Elaine Twitchamount Forest</p>
          <p>2</p>
          <p>01.01.22</p>
        </div>
      </div>
   );
}
 
export default MessageItems;