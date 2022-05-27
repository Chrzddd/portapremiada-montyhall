import styles from "../styles/CardSelect.module.css"

interface CartaoSelectProps{
    bgcolor?:string
    children?:any

}    
export default function CardSelect(props:CartaoSelectProps){
return (
       <div className={styles.cartao}
       style={{backgroundColor:props.bgcolor?? "#fff"}}>
            {props.children}
       </div>
   )
}