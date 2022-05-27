import styles from "../styles/Formulario.module.css"
import CardSelect from "../componentes/CardSelect"
import Link from "next/link"
import Head from "next/head"
import EntradaNumerica from "../componentes/EntradaNumerica"
import {useState} from "react"

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.formulario}>
        <Head>
          <title>Monty Hall</title> 
        </Head>
        <div >
            <CardSelect bgcolor="#444">
               <h1>Monty Hall</h1>
            </CardSelect>
            <CardSelect >
                <EntradaNumerica text="Qtde Portas?" 
                value={qtdePortas} 
                onChange={novaQtde=> setQtdePortas(novaQtde)}/> 
            </CardSelect>
        </div>
        <div >
            <CardSelect >
                <EntradaNumerica text="Porta com Presente" 
                    value={comPresente} 
                    onChange={novaPortaComPresente=> setComPresente(novaPortaComPresente)}/>
            </CardSelect>
            <CardSelect bgcolor="#87b67c" >
                 <Link href={`/jogo/${qtdePortas}/${comPresente}`} >
                      <h2 className={styles.link}>Iniciar</h2>
                 </Link>
            </CardSelect>
        </div>
    </div>
  )
}
