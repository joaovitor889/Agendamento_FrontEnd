import './tLoginFunc.css';
import Logo from '../../img/Logo.png';


const telaLogin = () => {

    document.title = "Login Funcionario";

    return (
        <div className="fLoginFunc">
            <div className="containerFunc">
                <div className="row">
                    <div className="logo"><h1 title="Bem-Vindo!"><center>Shostners & shostners</center></h1></div>
                </div>
                <div className="row" id="imagem">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="row">
                    <div className="fundoFunc">
                        <form id="formLogin">
                            <h1 title="Bem-Vindo!"><center>Login de Funcionário</center></h1>
                            <div className="entrada">
                                <input type="email" placeholder="E-mail" title="Digite seu E-mail" required /><br></br><br></br>
                                <input type="password" placeholder="Senha" title="Digite sua Senha" required />
                            </div>
                            <div className="links">
                                {/*<a href = "./tLogin.js">Criar uma conta</a><br></br>*/}
                                <a href="./tEsqueceuSenhaFunc" rel="noreferrer">Esqueceu a senha?</a>
                            </div><br></br>
                            <div className="botoes">
                                <input type="submit" id="btnLoginFunc" name="btnLogin" onClick={() => alert('Entra na sua conta se os dados estiverem corretos!')} value="Login" /><br></br>
                                {/*<center><div id="voltFunc"><button type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/'
                                    }}>Voltar
                                </button></div></center>*/}<br></br><br></br>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <p id="textoLateral">Powered by SNET</p>
        </div>
    )
}

export default telaLogin