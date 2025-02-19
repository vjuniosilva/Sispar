import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss" //importando o componente de estilização do login

function Login() {

    const navigate = useNavigate()  //Iniciando o hook useNagivate

    const irParaReembolsos = () => {
      navigate("/reembolsos")  //Redirecionar para a página de reembolso
    }

    return (
        <main>
            <section className={styles.containerLogin}>
               
            </section>

            <section className={styles.containerLoginForm}>
                <img src={Logo} alt="Logo da WS" />
                <h1>Boas vindas ao novo Portal SISPAR</h1>
                <h2>Sistema de Emissão de Boletos e Parcelamento</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="Senha" /><p>Esqueci minha senha</p>
                <div className={styles.boxButton}>
                        
                <button onClick={irParaReembolsos} className={styles.entrar}>Entrar</button>
                <button className={styles.criar}>Criar conta</button>
                </div>
                </form>
                
                    
                
            </section>
        </main>
    )
}
export default Login