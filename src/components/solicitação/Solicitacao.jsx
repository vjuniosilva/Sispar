import Home from "../../assets/Dashboard/Vector (1).png"
import Seta from "../../assets/Dashboard/Vector.png"
import Plus from "../../assets/Solicitacao/+.png"
import Calendario from "../../assets/Solicitacao/calendario.png"
import Check from "../../assets/Solicitacao/check.png"
import Delete from "../../assets/Solicitacao/deletar.png"
import styles from "./Solicitacao.module.scss"
import NavBar from "../navBar/NavBar.jsx"

function Solicitacao(){

    //const navigate = useNavigate()


    return(
        <div className={styles.bodySolicitacao}>
        <NavBar/>

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
                        <input type="text" />
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

                <div className={styles.inputDespesas}>
                    <select name="" id=""></select>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </div>

                </div>
            </form>

        </main>
        </div>

        </div>
    )
}

export default Solicitacao