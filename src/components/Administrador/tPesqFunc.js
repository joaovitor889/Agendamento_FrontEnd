import './tPesqFunc.css';
import voltar from '../../icones/Return.png';
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
//import logo from '../../img/logo.PNG';


const telaPesqFunc = () => {

   document.title = "Pesquisar Funcionário";

   return (
        <div className = "fPesqFunc">
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
        </div>
    )
}

export default telaPesqFunc