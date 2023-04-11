import './tMenuEnderecoCli.css';
//import logo from '../../img/logo.PNG';

import { Link } from "react-router-dom";

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';


const telaEnderecoCliente = () => {

   document.title = "Endereço do Cliente";

   return (
        <div className = "fEnderecoCliente">
            <div id="menuLatCli">
                <div id="menuDesk">
                    <ul id="ulDesk">
                        <br></br>
                        <br></br>
                        <div id = "perfilLateral">
                            <img src={Perfil} alt="perfil" />
                        </div>
                        <a href='/'>
                            <li><p>Dados Básicos</p></li>
                        </a>

                        <a href='/'>
                            <li style={{ backgroundColor: '#505050'}}><p>Endereço</p></li>
                        </a>

                        <a href='/'>
                            <li><p>Foto</p></li>
                        </a>                      
                    </ul>
                </div>
            </div>
            <div id="menuHorCli">

                {/* Menu Mobile */}
                <input type="checkbox" id="ch" name="ch" />
                <div id="mslin">
                    <label htmlFor="ch">
                        <span id="bt">|||</span>
                    </label>
                </div>

                <div id="menu">
                    <label htmlFor="ch"><span id='bt2'>+</span></label>
                    <ul id="u">
                        <br></br>
                        <br></br>
                        <a href='/'>
                            <li><div className="txtHambMenu"><p>Dados Básicos</p></div></li>
                        </a>

                        <a href='/'>
                            <li><div style={{ backgroundColor: '#505050' }} className="txtHambMenu"><p>Endereço</p></div></li>
                        </a>

                        <a href='/'>
                            <li><div className="txtHambMenu"><p>Foto</p></div></li>
                        </a>

                        <a href='/'>
                            <li><div className="txtHambMenu"><p>Voltar ao Menu</p></div></li>
                        </a>
                    </ul>
                </div>

                <div className="perfil"><a href="/"><img src={Perfil} alt="perfil" /></a></div>
                <div className="notificacao"><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className="logoMenuCli"><p></p></div>
                <div id="voltar"><Link to="../../tLoginCli"><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>

            <div id="conteudoCli">
                <h2><center>Endereço</center></h2>
                <form id="formEN">
                    <div className = "linha">
                        <div>
                            <input type="text" placeholder="CEP:" title="Digite o seu CEP" name="cep" id="cep" maxLength = "8"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Rua:" title="Digite a sua Rua" name="rua" id="rua" className = "segColuna" /> 
                        </div>
                    </div>
                    <div className = "linha">
                        <div>
                            <input type="number" placeholder="Número:" title="Digite o seu Número" name="numero" id="numero" /> <br></br>
                        </div>        
                        <div>
                            <input type="text" placeholder="Complemento:" title="Digite o seu Complemento" name="comple" id="comple" className = "segColuna" /> <br></br>
                        </div>        
                    </div>
                    <div className = "linhaUnica">
                        <input type="text" placeholder="Bairro:" title="Digite o seu Bairro" name="bairro" id="bairro" /> <br></br>                    
                        <input type="text" placeholder="Cidade:" title="Digite a sua Cidade" name="cidade" id="cidade" /> <br></br>
                        <input type="text" placeholder="Estado:" title="Digite o seu Estado" name="estado" id="estado" /> <br></br>
                    </div>
                    <div id="btnDBSalvar">
                        <input type="submit" id="btnSalvarDDBSalvar" name="btnSalvarDDBSalvar" onClick={() => alert('Dados Salvos!')} value="Salvar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default telaEnderecoCliente