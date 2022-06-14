import styles from '../../styles/components/nav/DesktopMenu.module.scss';
import Link from 'next/link';


const DesktopMenu = (listObject) => {

  const listItems = listObject.value;
  return ( 
    <div className={styles.menuWrapper}>
      <ul className={styles.menu}>
        {listItems.map(item => {
          return <li key={item.id}>
                    <Link href={`${item.href}`}>
                      <a>{item.name}</a>
                    </Link>
                </li>
          })}
      </ul>
    </div> );
}
 
export default DesktopMenu;