import styles from './alterarSenhaAdm.module.css';

import Logo from '../../img/logo-site.png';
import Senha from '../../img/Lock.png';

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

//import agFetch from '../../axios/config.js';

const EsqSenhaAdm = () => {
    document.title = "Esquceu a Senha";

    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    const navigate = useNavigate();

    const envSenha = async (senha) => {
        alert(senha);

        //logica para alterar a senha no banco de dados
        navigate("/tLoginAdm");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (senha !== confSenha) {
            alert("A senha e a confirmação de senha devem ser iguais!");
            return;
        } else {
            envSenha(senha);
        }
    };

    return (
        <div className="fCadastroAdm">
            <div className='container'>
                <div className='logo'>
                    <br />
                    <br />
                    <br />
                    <img src={Logo} alt="Logo do site" />
                </div>
                <div className='campo-de-Cadastro'>
                    <div className='Form'>
                        <br />
                        <form id="formEsqSenhaAdm" onSubmit={handleSubmit}>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Senha' title='Digite sua senha' onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Confirmar Senha' title='Confirme sua senha' onChange={(e) => setConfSenha(e.target.value)} required />
                            </div>
                            <input type="submit" id={styles["btnEnviarSenhaAdm"]} name="btnEnviarSenhaAdm" value="Enviar" />
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EsqSenhaAdm