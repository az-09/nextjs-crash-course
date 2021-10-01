import Card from '../ui/Card'
import styles from './MeetupItem.module.css'
import Image from 'next/image'

export default function MeetupItem(props){
    return(
        <li className={styles.item}>
            <Card>
                {console.log(props)}
                <div className={styles.image}>
                <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                <h3>{props.title}</h3>
          <address>{props.address}</address>
                </div>
                <div className={styles.actions}>
                <button>Show Details</button>
                </div>
            </Card>
        </li>
    )
}