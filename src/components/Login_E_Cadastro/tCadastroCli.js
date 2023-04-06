import './tCadastroCli.css';
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
                                    {/*<input type="email" placeholder="E-mail" title="Digite seu E-mail" required /><br></br><br></br>*/}
                                    <input type = "text" placeholder = "*Nome:" title = "Digite o seu nome" name = "nome" id = "nome" required />
                                    <input type = "text" placeholder = "*Sobrenome:" title = "Digite o seu sobrenome" name = "sobrenome" id = "sobrenome" required />
                                    <input type = "text" placeholder = "*CPF:" title = "Digite o seu CPF" name = "cpf" id = "cpf"  maxLength = "11" required />
                                    <input type = "phone" placeholder = "Telefone:" title = "Digite o seu Telefone" name = "tel" id = "tel" />
                                    <input type = "email" placeholder = "E-mail:" title = "Digite o seu E-mail" name = "email" id = "email" />

                                    <div className="senha">
                                        <input type = "password" placeholder = "*Senha:" title = "Crie uma Senha" name = "senha" id = "senha" required/>
                                        <input type = "password" placeholder = "*Confirmar Senha:" title = "Confirme sua Senha" name = "confSenha" id = "confSenha" required/>
                                    </div>
  
                                </div>
                                <div className="rodape">
                                    <span className="condicoes">
                                        <input type = "checkbox" id = "termos" required />
                                        <a href = "/" target={'_blank'}>Aceitar termos</a>
                                    </span>
                                    <div className="botoes">
                                        <input type="submit" id="btnCadastro" name="btnCadastro" onClick={() => alert('Cadastra Dados!')} value="Cadastrar" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rodFundo"></div>
        </div>
    )
}

export default telaCadastroUsuario