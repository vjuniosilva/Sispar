import Home from "../../assets/Dashboard/Vector (1).png"
import Seta from "../../assets/Dashboard/Vector.png"
import Plus from "../../assets/Solicitacao/+.png"
import Calendario from "../../assets/Solicitacao/calendario.png"
import Check from "../../assets/Solicitacao/check.png"
import Delete from "../../assets/Solicitacao/deletar.png"
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png"
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
                                    <option value="">Selecionar</option>

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
                                    <option value="">Selecionar</option>
                                    <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                                    <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    <option value="">1100110102 - FIN CONTABILIDADE MTZ</option>

                                </select>
                            </div>

                            <div className={styles.inputOrdem}>
                                <label>Ord. Int.</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputDiv}>
                                <label>Div</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputPep}>
                                <label>PEP</label>
                                <input type="number" />
                            </div>

                            <div className={styles.inputMoeda}>
                                <label>Moeda</label>
                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">BRL</option>
                                    <option value="">ARS</option>
                                    <option value="">USD</option>
                                </select>
                            </div>

                            <div className={styles.inputDistKm}>
                                <label htmlFor="">Dist/Km</label>
                                <input type="text" />
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

                            <div className={styles.botoes}>
                                <button className={styles.salvar}>+ Salvar</button>
                                <button className={styles.botaoDeletar}><img src={Delete} alt="" /></button>
                            </div>

                        </div>

                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Colaboradores</th>
                                <th>Empresa</th>
                                <th>NºPrest</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo de despesa</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int</th>
                                <th>Div</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. Km</th>
                                <th>Val. Km</th>
                                <th>Val. Faturado</th>
                                <th>Despesa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <img src={Lixeira} alt="" /></td>
                                <td>Vitor Carvalho de Souza</td>
                                <td>WSS001</td>
                                <td>329456</td>
                                <td>08/01/2025</td>
                                <td><img src={Motivo} alt="" /></td>
                                <td>Desp. de viagem administrativa</td>
                                <td>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</td>
                                <td>0003</td>
                                <td>002</td>
                                <td>001</td>
                                <td>BRL</td>
                                <td>434Km</td>
                                <td>0.65</td>
                                <td>242.10</td>
                                <td>40.05</td>
                            </tr>
                            <tr>
                                <td> <img src={Lixeira} alt=""/> </td>
                                <td>Vanessa Portugal</td>
                                <td>WSS002</td>
                                <td>987789</td>
                                <td>01/01/2025</td>
                                <td><img src={Motivo} alt="" /></td>
                                <td>Desp. de viagem administrativa</td>
                                <td>1100110102 - FIN CONTABILIDADE MTZ</td>
                                <td>0002</td>
                                <td>005</td>
                                <td>001</td>
                                <td>ARS</td>
                                <td>289Km</td>
                                <td>0.37</td>
                                <td>106.93</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <td><img src={Lixeira} alt=""/></td>
                                <td>Washington Klinglon</td>
                                <td>WSS003</td>
                                <td>546791</td>
                                <td>03/01/2025</td>
                                <td><img src={Motivo} alt="" /></td>
                                <td>Eventos de apresentação</td>
                                <td>1100109002 - FIN CONTROLES INTERNOS MTZ</td>
                                <td>0001</td>
                                <td>005</td>
                                <td>001</td>
                                <td>USD</td>
                                <td>197Km</td>
                                <td>0.75</td>
                                <td>109.75</td>
                                <td>29.97</td>
                            </tr>
                        </tbody>
                    </table>

                </main>
            </div>

        </div>
    )
}

export default Solicitacao