import {useNavigate} from "react-router-dom"
import styles from "./Reembolsos.module.scss"
import Home from "../../assets/Dashboard/Vector (1).png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png"
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"
import NavBar from "../navBar/NavBar"

function Reembolsos() {

    const navigate = useNavigate()  //Iniciando o hook useNagivate

    const irParaSolicitacao = () => {
      navigate("/solicitacao")
    }

    return (
        

        <div className={styles.bodyCompleta}>

            <NavBar/>
            <header>
                <img src={Home} alt="Casinha da header" />
                <img src={Seta} alt="Setinha da header" />
                <p>Reembolsos</p>
            </header>
            <main className={styles.mainReembolsos}>
                <section className={styles.sistemReembolso}>
                    <div className={styles.tituloSubtitulo}>
                        <h2>Sistema de Reembolsos</h2>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </div>

                    <div className={styles.cards}>

                        <section >
                            <img onClick={irParaSolicitacao} src={SolicitarReembolso} alt="Caderninho +" />
                            <p>Solicitar Reembolso</p>
                        </section>

                        <section >
                            <img src={Analises} alt="Analises" />
                            <p>Verificar análises</p>
                        </section>

                        <section >
                            <img src={SolicitarHistorico} alt="historico" />
                            <p>Histórico</p>
                        </section>

                    </div>

                    <div className={styles.estatistica}>
                        <section>
                        <img className={styles.imgSolicitados} src={NumeroSolicitados} alt="Numero de Solicitados" />
                        <h4>182</h4>
                        <p>Solicitados</p>
                    </section>

                    <section>
                        <img className={styles.imgAnalise} src={NumeroAnalises} alt="em analise" />
                        <h4>74</h4>
                        <p>Em análise</p>
                    </section>

                    <section>
                        <img className={styles.imgAprovados} src={NumeroAprovados} alt="numero dos aprovados" />
                        <h4>195</h4>
                        <p>Aprovados</p>
                    </section>

                    <section>
                        <img className={styles.imgRejeitados} src={NumeroRejeitados} alt="numero dos rejeitados" />
                        <h4>41</h4>
                        <p>Rejeitados</p>

                    </section>
                    </div>

                </section>


            </main>
        </div>
    )
}

export default Reembolsos