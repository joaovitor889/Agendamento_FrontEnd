import './tLandPage.css';

import Logo from '../../img/2-removebg-preview.png';
import Mulher from '../../img/Component87.png';
import Botao from '../../img/Component85.png';
import Contato from '../../img/Headset.png';
//import logo from '../../img/logo.PNG';

import { Link } from "react-router-dom";

const telaLandPage = () => {

   document.title = "Bem-Vindo!";

   return (
        <div className = "fLandPage">
            <nav id='cabecalho'>
                <span className='logo'>
                    <img src={Logo} alt = "Logo da Empresa" />
                </span>
                <span className='linkLogin'>
                        <Link to = "./tLoginAdm">Acessar minha conta</Link>
                </span>
                <span className='btnCadastro'>
                    <button  type="button"
                        onClick={(e) => {
                            e.preventDefault();
                                window.location.href='./Landpage.js';
                            }}>Comece grátis
                    </button>
                </span>
            </nav>

            <h1>MAIS ORGANIZAÇÃO PARA SEUS NEGÓCIOS</h1> 
            <h2>Feito para: </h2>
            <ul type = "disc">
                <li><span>Microempreendedores</span></li>
                <li><span>Profissionais</span></li>
                <li><span>Clientes</span></li>
            </ul>

            <button  type="button" className='btnCdtr'
                        onClick={(e) => {
                            e.preventDefault();
                                window.location.href='./Landpage.js';
                            }}>Comece grátis
                    </button>

            <div className='contato'>
                <img src={Contato} alt='Contato' />
                <a href = "/" target="_blank" rel="noreferrer">Entre em contato com <br></br>a nossa equipe</a>
            </div>        
            
            <div className='moca'>
                <img src={Mulher} alt = "Mulher" />
            </div>

            <div className='segFundo'></div>
            
            <div className='botaoPlay'>
                <a href='./Landpage.js' target="_blank" rel="noreferrer"><img src={Botao} alt='Botao'/></a><br></br>
                <center>Venha conhcer a nossa plataforma</center>
            </div>
            
            <div className='rodape'>
                <center>
                    Agradecemos o seu acesso
                </center>
            </div>
        </div>
    )
}

export default telaLandPage