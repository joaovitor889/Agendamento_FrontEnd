import styles from './esqSenhaAdm.module.css';

import Logo from '../../img/logo-site.png';
import Email from '../../img/Mail.png';

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import agFetch from '../../axios/config.js';

const EsqSenhaAdm = () => {
    document.title = "Esqueceu a Senha";

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const envEmail = async (email) => {
        //alert(email);
        const txtData = {
            email: email
        }
        //logica para verificar se o email existe no banco de dados
        try {
            const envEmailResponse = await agFetch.post('/auth/proprietario/recuperarSenha', txtData);
            if (envEmailResponse.status >= 200 && envEmailResponse.status <= 201) {
                const token = envEmailResponse.data;
                console.log("Logou no Proprietário " + token);
                navigate(`/tAlterarSenhaAdm/${token}`);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Email não encontrado!");
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        envEmail(email);
    };

    return (
        <div className={styles.fCadastroAdm}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <br />
                    <br />
                    <br />
                    <img src={Logo} alt="Logo do site" />
                </div>
                <div className='campo-de-Cadastro'>
                    <div className='Form'>
                        <form id={styles["formEsqSenhaAdm"]} onSubmit={handleSubmit}>
                            <br />
                            <div className='E-mail'>
                                <img src={Email} alt="" />
                                <input type="email" placeholder='E-mail' title='Digite seu E-mail' id={styles["email"]} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <input type="submit" id={styles["btnEnviarEmailAdm"]} name="btnEnviarEmailAdm" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EsqSenhaAdm