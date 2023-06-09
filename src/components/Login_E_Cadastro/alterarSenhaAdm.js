import styles from './alterarSenhaAdm.module.css';

import Logo from '../../img/logo-site.png';
import Senha from '../../img/Lock.png';

import { useState } from "react";

import { useNavigate, useParams } from 'react-router-dom';

import agFetch from '../../axios/config.js';

const EsqSenhaAdm = () => {
    document.title = "Esqueceu a Senha";

    const token = useParams().token;

    //alert(token);

    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    const navigate = useNavigate();

    const envSenha = async (senha) => {
        //alert(senha);
        const txtData = {
            token: token,
            senha: senha
        }
        try {
            //Autorizar o envio dos dados
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const altSenhaResponse = await agFetch.post('/auth/proprietario/mudarSenha', txtData, { headers });
            if (altSenhaResponse.status >= 200 && altSenhaResponse.status <= 299) {
                alert("Senha Alterada!");
                navigate("/tLoginAdm");
            }
        } catch (error) {
            console.log(error);
            if (error.status === 400 || error.status === 404) {
                alert("Erro ao alterar a senha!");
            }
        }

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