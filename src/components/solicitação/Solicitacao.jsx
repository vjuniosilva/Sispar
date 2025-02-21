import Home from "../../assets/Dashboard/Vector (1).png"
import Seta from "../../assets/Dashboard/Vector.png"
import Plus from "../../assets/Solicitacao/+.png"
import Calendario from "../../assets/Solicitacao/calendario.png"
import Check from "../../assets/Solicitacao/check.png"
import Delete from "../../assets/Solicitacao/deletar.png"
import styles from "./Solicitacao.module.scss"
import NavBar from "../navBar/NavBar.jsx"

function Solicitacao() {

    //const navigate = useNavigate()


    return (
        <div className={styles.bodySolicitacao}>
            <NavBar />

            <div className={styles.principalSolicitacao}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="Casinha da header" />
                    <img src={Seta} alt="Setinha da header" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="Setinha da header" />
                    <p>Solicitação de Reembolso</p>
                </header>

                <main className={styles.mainSolicitacao}>
                    <form className={styles.formSolicitacao}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome completo</label>
                                <input type="text" />
                            </div>

                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" />
                            </div>

                            <div className={styles.inputPrestacao}>
                                <label htmlFor="">N° Prest. Contas</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <textarea name="" id=""></textarea>
                            </div>

                        </div>

                        <div className={styles.barraVertical}>

                        </div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input type="date" />
                            </div>

                            <div className={styles.inputTiposDespesas}>
                                <label htmlFor="">Tipo de Despesa</label>
                                <select id="">
                                    <option value=""></option>
                                    <option value="alimentacao">Alimentação</option>
                                    <option value="combustivel">Combustível</option>
                                    <option value="conducao">Condução</option>
                                    <option value="estacionamento">Estacionamento</option>
                                    <option value="viagem_admin">Viagem admin.</option>
                                    <option value="viagem_operacional">Viagem operacional</option>
                                    <option value="eventos">Eventos de representação</option>
                                </select>
                            </div>

                            <div className={styles.inputCusto}>
                                <label htmlFor="">Centro de Custo</label>
                                <select id="">
                                    <option value=""></option>
                                    <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>

                                </select>
                            </div>

                            <div className={styles.inputOrdem}>
                                <label htmlFor="">Ord. Int.</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputDiv}>
                                <label htmlFor="">Div</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputPep}>
                                <label htmlFor="">PEP</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputMoeda}>
                                <label htmlFor="">Moeda</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputDistKm}>
                                <label htmlFor="">Dist/Km</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputValorKm}>
                                <label htmlFor="">Valor/Km</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputValorFaturado}>
                                <label htmlFor="">Val. Faturado</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputDespesa}>
                                <label htmlFor="">Despesa</label>
                                <input type="number" />
                            </div>

                            <button className={styles.salvar}>Entrar</button>
                            <button className={styles.apagar}></button>

                        </div>

                    </form>

                </main>
            </div>

        </div>
    )
}

export default Solicitacao