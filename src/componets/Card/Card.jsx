//Importar el archivo de Css
//import "./styles.css"
import styles from "./Card.module.scss"
const Card = () =>{
return(
    <div className={styles.card}>
        Soy una card!
    </div>
)
}

export default Card;