import './tMenuCli.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import Notificacao from '../../icones/Doorbell.png';
import AddAgenda from '../../icones/CalendarPlus.png';
import Agenda from '../../icones/Tear-Off Calendar.png';
import Perfil from '../../icones/perfilCliente.png';

import { Link } from "react-router-dom";

const telaMenuCliente = () => {

   document.title = "Menu do Cliente";    

   return (
        <div className = "fMenuCliente">            
            <nav id = "cabecalhoMenuCli">
                <div className = "voltar"><Link to = "../../tLoginCli"><img src = {Voltar} alt = "voltar" title = "Voltar"/></Link></div>                
                <div className = "logoMenuCli"><p></p></div>                
                <div className = "notificacao"><a href = "/"><img src = {Notificacao} alt = "notificacao" /></a></div>
                <div className = "perfil"><a href = "/"><img src = {Perfil} alt = "perfil" /></a></div>                
            </nav>              
            <div className = "fPreto"></div>
            <div className = "texto">Bem-Vindo(a)<br></br>Profissional<br></br><div className = "nome">Nome</div></div>
            <div className = "botoes">
                <div className = "linha">
                    <img src = {AddAgenda} alt = "addAgenda" />
                    <button type = "button" className = "btn" onClick={(e) => {
                            e.preventDefault();                                
                                window.location.href = '/'
                            }}><p>Agendar</p></button>
                </div>
                <div className = "linha">
                    <img src = {Agenda} alt = "agenda" />
                    <button type = "button" className = "btn" onClick={(e) => {
                            e.preventDefault();                                
                                window.location.href = '/'
                            }}><p>Meus Agendamentos</p></button>
                </div>
                <div className = "linha">
                    <img src = {Perfil} alt = "perfil" />
                    <button type = "button" className = "btn" onClick={(e) => {
                            e.preventDefault();                                
                                window.location.href = '/'
                            }}><p>Perfil</p></button>
                </div>
            </div>
        </div>
    )
}

export default telaMenuCliente