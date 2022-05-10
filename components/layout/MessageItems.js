import styles from '../../styles/components/reuse/MessageItems.module.scss';

const MessageItems = ({ data }) => {
  console.log(data)
  return ( 
    <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p>Name</p>
          <p>Rooms</p>
          <p>Date</p>
        </div>
        <div className={styles.item}>
          <p>{data[0]}</p>
          <p>{data[1]}</p>
          <p>{data[2]}</p>
        </div>
      </div>
   );
}
 
export default MessageItems;