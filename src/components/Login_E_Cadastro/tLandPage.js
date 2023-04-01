import './tLandPage.css';

import Logo from '../../img/2-removebg-preview.png';
import Mulher from '../../img/Component87.png';
import Botao from '../../img/Component85.png';
import Contato from '../../img/Headset.png';
//import logo from '../../img/logo.PNG';


const telaLandPage = () => {

   document.title = "Bem-Vindo!";

   return (
        <div className = "fLandPage">
            <nav id='cabecalho'>
                <span className='logo'>
                    <img src={Logo} alt = "Logo da Empresa" />
                </span>
                <span className='linkLogin'><a href='./Landpage.js'>Acessar minha conta</a></span>
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
                <a href = "/">Entre em contato com <br></br>a nossa equipe</a>
            </div>        
            
            <div className='moca'>
                <img src={Mulher} alt = "Mulher" />
            </div>

            <div className='segFundo'></div>
            
            <div className='botaoPlay'>
                <a href='./Landpage.js'><img src={Botao} alt='Botao'/></a><br></br>
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