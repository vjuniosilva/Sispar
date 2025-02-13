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
function Reembolsos() {
    return (
        <div>
            <header>
                <img src={Home} alt="Casinha da header" />
                <img src={Seta} alt="Setinha da header" />
                <p>Reembolsos</p>
            </header>
            <main>
                <section className={styles.sistemReembolso}>
                    <div className={styles.tituloSubtitulo}>
                        <h2>Sistema de Reembolsos</h2>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </div>

                    <div className={styles.cards}>

                        <section >
                            <img src={SolicitarReembolso} alt="Caderninho +" />
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
                        <img src={NumeroSolicitados} alt="Numero de Solicitados" />
                        <p>Solicitados</p>
                    </section>

                    <section>
                        <img src={NumeroAnalises} alt="em analise" />
                        <p>Em análise</p>
                    </section>

                    <section>
                        <img src={NumeroAprovados} alt="numero dos aprovados" />
                        <p>Aprovados</p>
                    </section>

                    <section>
                        <img src={NumeroRejeitados} alt="numero dos rejeitados" />
                        <p>Rejeitados</p>

                    </section>
                    </div>

                </section>


            </main>
        </div>
    )
}

export default Reembolsos