import styles from './tEsqueceuSenhaFunc.module.css';

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const TelaEsqueceuSenhaCli = () => {

    document.title = "Esquceu a Senha";

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const envEmail = async (email) => {
        alert(email);

        //logica para verificar se o email existe no banco de dados
        navigate("/tAlterarSenhaFunc");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        envEmail(email);
    };

    return (
        <div className={styles.fEsqueceuSenhaCli}>
            <form id={styles["formSenhaFunc"]} onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1><center>Recuperar a Senha</center></h1>
                <center>
                    <div id={styles["conteudo"]}>
                        <input type="email" placeholder="E-mail" title="Digite seu E-mail" id={styles["email"]} name="email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="submit" id={styles["btnEnviar"]} name="btnEnviar" value="Enviar" />
                    </div>
                </center>
            </form>
        </div>
    )
}

export default TelaEsqueceuSenhaCli