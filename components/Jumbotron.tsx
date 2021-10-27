import styles from '../styles/Jumbotron.module.scss'
import Image from "next/image"
import iphone from "../public/iphone.png"

const Jumbotron = () => {
    return (
        <div>
        <div className={styles.backgroundimage}>
            <Image  src={iphone}></Image>
        </div>
        <div className={styles.promotionalmessage}>
            <h3>SHOP</h3>
            <h2>iphone</h2>
            <p>C'est exclusif, c'est Iphone.</p>
        </div>
        </div>
    )
}

export default Jumbotron