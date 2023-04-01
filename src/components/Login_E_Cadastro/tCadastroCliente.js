import './tCadastroCliente.css';
//import logo from '../../img/logo.PNG';


const telaCadastroUsuario = () => {

    document.title = "Cadastrar Cliente";

    return (
        <div className="fCadCliente">
            <div className="fCadastro">
                <nav id = "cabecalho">
                        <p>Shostners & Shostners</p>                
                </nav>               
                <div className="cadCliLogo">Cadastro de Cliente</div>            
                <div className="container">                
                    <div className="row">
                        <div className="fundo">
                            <form id="formCadastro">                                                    
                                <div className="entrada">
                                    <input type="email" placeholder="E-mail" title="Digite seu E-mail" required /><br></br><br></br>
                                    <input type="password" placeholder="Senha" title="Digite sua Senha" required />
                                </div>
                                <div className="links">
                                    <a href="./tLogin.js">Criar uma conta</a><br></br>
                                    <a href="./tLogin.js">Esqueceu a senha?</a>
                                </div><br></br>
                                <div className="botoes">
                                    <input type="submit" id="btnCadastro" name="btnCadastro" onClick={() => alert('Cadastra Dados!')} value="Cadastrar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default telaCadastroUsuario