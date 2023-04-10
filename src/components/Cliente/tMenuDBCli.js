import './tMenuDBCli.css';
//import logo from '../../img/logo.PNG';

import { Link } from "react-router-dom";

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

const telaDadosBasicosCliente = () => {

    document.title = "Dados Básicos";

    return (
        <div className="fDBCliente">
            <div id="menuLatCli"></div>
            <div id="menuHorCli">
                
                {/* Menu Mobile */}
                <input type="checkbox" id = "ch" name = "ch" />                
                <div id = "mslin">                
                    <label htmlFor = "ch">
                        <span id = "bt">|||</span>
                    </label>
                </div>

                <div id = "menu">
                    <label htmlFor = "ch"><span id='bt2'>+</span></label>
                    <ul id = "u"> 
                        <br></br>
                        <br></br>
                        <a href='/'>                        
                            <li><div style={{backgroundColor:'#505050'}} className = "txtHambMenu"><p>Dados Básicos</p></div></li>
                        </a>

                        <a href='/'>
                            <li><div className = "txtHambMenu"><p>Endereço</p></div></li>
                        </a>

                        <a href='/'>
                            <li><div className = "txtHambMenu"><p>Foto</p></div></li>
                        </a>

                        <a href='/'>
                            <li><div className = "txtHambMenu"><p>Voltar ao Menu</p></div></li>
                        </a>
                    </ul>
                </div>

                <div className = "menuDesk"></div>

                <div className = "perfil"><a href = "/"><p>NS</p></a></div>
                <div className = "notificacao"><a href = "/"><img src = {Notificacao} alt = "notificacao" /></a></div>
                <div className = "logoMenuCli"><p></p></div>  
                <div id = "voltar"><Link to = "../../tLoginCli"><img src = {Voltar} alt = "voltar" title = "Voltar"/></Link></div>                                           
            </div>
            
            <div id="conteudoCli">
                <h2><center>Dados Básicos</center></h2>
                <form id = "formDB">
                    <input type = "text" placeholder = "*Nome:" title = "Digite o seu nome" name = "nome" id = "nome" required /> <br></br>
                    <input type = "text" placeholder = "*Sobrenome:" title = "Digite o seu sobrenome" name = "sobrenome" id = "sobrenome" required /> <br></br>
                    <input type = "text" placeholder = "*CPF:" title = "Digite o seu CPF" name = "cpf" id = "cpf"  maxLength = "11" required /> <br></br>
                    <input type = "phone" placeholder = "Telefone:" title = "Digite o seu Telefone" name = "tel" id = "tel" /> <br></br>
                    <input type = "email" placeholder = "*E-mail:" title = "Digite o seu E-mail" name = "email" id = "email" required/> <br></br>
                    <div id = "btnDBSalvar">
                        <input type="submit" id="btnSalvarDDBSalvar" name="btnSalvarDDBSalvar" onClick={() => alert('Dados Salvos!')} value="Salvar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default telaDadosBasicosCliente