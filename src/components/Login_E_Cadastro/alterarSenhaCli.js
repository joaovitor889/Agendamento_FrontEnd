import styles from './alterarSenhaCli.module.css';

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const TelaEsqueceuSenhaCli = () => {

    document.title = "Recuperar Senha";

    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    const navigate = useNavigate();

    const envSenha = async (senha) => {
        alert(senha);

        //logica para alterar a senha no banco de dados
        navigate("/tLoginCli");
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
        <div className={styles.fEsqueceuSenhaCli}>
            <form id={styles["formSenhaCli"]} onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1><center>Recuperar a Senha</center></h1>
                <center>
                    <div id={styles["conteudo"]}>
                        <input type="password" placeholder="Senha" title="Digite sua Senha" id={styles["email"]} name="email" onChange={(e) => setSenha(e.target.value)} required /> 
                        <input type="password" placeholder="Confirmar Senha" title="Confirme sua Senha" id={styles["email"]} name="email" onChange={(e) => setConfSenha(e.target.value)} required />
                        <input type="submit" id={styles["btnEnviar"]} name="btnEnviar" value="Enviar" />
                    </div>
                </center>
            </form>
        </div>
    )
}

export default TelaEsqueceuSenhaCli