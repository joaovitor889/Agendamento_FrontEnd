import './tMenuCliente.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';


const telaMenuCliente = () => {

   document.title = "Menu do Cliente";    

   return (
        <div className = "fMenuCliente">
            <div className = "fPreto"></div>
            <div className = "voltar"><img src = {Voltar} alt = "voltar" /></div>
            <div className = "texto"></div>
        </div>
    )
}

export default telaMenuCliente