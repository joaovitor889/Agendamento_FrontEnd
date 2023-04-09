import './tCadFunc.css';
import voltar from '../../icones/Return.png';
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'


const telaCadFunc = () => {

    document.title = "Cadastrar Funcionário";

<<<<<<< HEAD
   return (
        <div className = "fCadFunc">
            {/* header  começo */}
            <header>
                <div className="esquerda">
                    <a href="/">
                    <img src = {voltar} alt = "retunr" />
                    </a>
                </div>
                <div className="Centro">
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className="direita">
                    <a href="" className="btn_perfil">
                        <img src= {perfil} alt="notificar" />
                    </a>
                    <a href="" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a>
                </div>
            </header>
            {/* final do header */}
            <div></div>
=======
    return (
        <div className="fCadFunc">
            <div className="fCadastro">
                <nav id="cabecalho">
                    <p>Shostners & Shostners</p>
                </nav>
                <div className="cadCliLogo">Cadastro de Funcionário</div>
                <div className="container">
                    <div className="row">
                        <div className="fundo">
                            <form id="formCadFunc">
                                <div className="entrada">
                                    <div class="linha">
                                        <div>
                                            <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id="nome" required />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id="sobrenome" required />
                                        </div>
                                    </div>
                                    <div class="linha">
                                        <div>
                                            <input type="email" placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" />
                                        </div>
                                        <div>
                                            <input type="phone" placeholder="*Telefone:" title="Digite o seu Telefone" name="tel" id="tel" />
                                        </div>
                                    </div>
                                    <div class="linha">
                                        <div>
                                            <input type="text" placeholder="*CEP:" title="Digite o seu CEP" name="cep" id="cep" maxLength="8" required />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="*Rua:" title="Digite o nome da Rua" name="rua" id="rua" required />
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="linha">
                                        <div>
                                            <input type="text" placeholder="*Bairro:" title="Digite o nome o seu Bairro" name="bairro" id="bairro" required />
                                        </div>
                                        <div>
                                            <input type="number" placeholder="*Número:" title="Digite o seu número" name="numero" id="numero" required />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="*Cidade:" title="Digite a sua Cidade" name="cidade" id="cidade" required />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="*Estado:" title="Digite o seu Estado" name="estado" id="estado" required />
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="*RG:" title="Digite o seu RG" name="rg" id="rg" maxLength="9" required />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="*CPF:" title="Digite o seu CPF" name="cpf" id="cpf" maxLength="11" required />                                    
                                    </div>


                                    <div className="senha">
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required />
                                    </div>

                                </div>
                                <div className="rodape">
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
>>>>>>> b6c250b2c5d1b29501e8ac78255fc7fea16ea715
        </div>
    )
        
        
}

export default telaCadFunc