import './tLandPage.css';

import Logo from '../../img/2-removebg-preview.png';
import Mulher from '../../img/Component87.png';
import Botao from '../../img/Component85.png';
import Contato from '../../img/Headset.png';
//import logo from '../../img/logo.PNG';

import { Link } from "react-router-dom";

import { useState } from 'react';

import ContSuporte from '../modal/tConatoSuporte';

const TelaLandPage = () => {

    document.title = "Bem-Vindo!";

    const [openModalContSuporte, setOpenModalContSuporte] = useState(false);

    return (
        <div className="fLandPage">
            <nav id='cabecalho'>
                <span className='logo'>
                    <img src={Logo} alt="Logo da Empresa" />
                </span>
                <span className='linkLogin'>
                    <Link to="./tLoginADM">Acessar minha conta</Link>
                </span>
                <span className='btnCadastro'>
                    <button type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            //window.location.href = './tMenuOpcCadastro'
                            window.location.href = './tCadastroADM'
                        }}>Comece grátis
                    </button>
                </span>
            </nav>

            <div className="txtLatLand">                
                <h2>MAIS ORGANIZAÇÃO PARA SEUS NEGÓCIOS</h2>
                <h3>Feito para: </h3>
                <ul type="disc">
                    <li><span>Microempreendedores</span></li>
                    <li><span>Profissionais</span></li>
                    <li><span>Clientes</span></li>
                </ul>

                <button type="button" className='btnCdtr'
                    onClick={(e) => {
                        e.preventDefault();
                        //window.location.href = './tMenuOpcCadastro'
                        window.location.href = './tCadastroADM'
                    }}>Comece grátis
                </button>

                <div className='contato'>
                    <img src={Contato} alt='Contato' />
                    <p onClick={() => setOpenModalContSuporte(true)}>Entre em contato com <br></br>a nossa equipe</p>
                </div>
            </div>

            <div className='moca'>
                <img src={Mulher} alt="Mulher" />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='segFundo'></div>

            <div className='botaoPlay'>
                <a href='./Landpage.js' target="_blank" rel="noreferrer"><img src={Botao} alt='Botao' /></a><br></br>
                <center>Venha conhcer a nossa plataforma</center>
            </div>

            <div className='rodape'>
                <center>
                    Agradecemos o seu acesso
                </center>
            </div>
            <ContSuporte isOpen={openModalContSuporte} setOpenModalContSuporte={() => setOpenModalContSuporte(!openModalContSuporte)}/>
        </div>
    )
}

export default TelaLandPage