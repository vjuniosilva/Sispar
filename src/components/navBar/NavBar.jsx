import Historico from "../../assets/Header/Botão - Histórico.png"
import Home from "../../assets/Header/Botão - Home.png"
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png"
import Reembolso from "../../assets/Header/Botão - Reembolso.png"
import Sair from "../../assets/Header/Botão - Sair.png"
import Perfil from "../../assets/Header/image.png"
import Fechar from "../../assets/Header/imagem-fechar-header.png"
import styles from "./NavBar.module.scss"
import {useNavigate} from "react-router-dom"

function NavBar(){

    const navigate = useNavigate()


    
    return(
        <nav className={styles.navBarEstilo}>

        <button>
            <img src={Fechar} alt="Close/Open" />
        </button>

        <section>
            <img src={Perfil} alt="Foto de Perfil" />
        
        <div>
        <button onClick={()=>{navigate("/reembolsos")}}>
            <img src={Home} alt="Close/Open" />
        </button>

        <button onClick={()=>{navigate("/solicitacao")}}>
            <img src={Reembolso} alt="Close/Open" />
        </button>

        <button onClick={()=>{navigate("/reembolsos")}}>
            <img src={Pesquisa} alt="Close/Open" />
        </button>

        <button onClick={()=>{navigate("/solicitacao")}}>
            <img src={Historico} alt="Close/Open" />
        </button>
        </div>
        </section>

        <button className={styles.buttonSair} onClick={()=>{navigate("/")}}>
            <img src={Sair} alt="Sair" />
        </button>

        </nav>

    )
}

export default NavBar;