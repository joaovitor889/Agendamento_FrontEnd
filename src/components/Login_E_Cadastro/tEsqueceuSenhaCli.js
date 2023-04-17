import styles from './tEsqueceuSenhaCli.module.css';

const telaEsqueceuSenhaCli = () => {

    document.title = "Recuperar Senha";

    return (
        <div className={styles.fEsqueceuSenhaCli}>
            <form id={styles["formSenha"]}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1><center>Recuperar a Senha</center></h1>
                <center>
                    <div id={styles["conteudo"]}>
                        <input type="email" placeholder="E-mail" title="Digite seu E-mail" id={styles["email"]} name="email" required />
                        <input type="submit" id={styles["btnEnviar"]} name="btnEnviar" onClick={() => alert('Envia a senha por email se os dados estiverem corretos!')} value="Enviar" />
                    </div>
                </center>
            </form>
        </div>
    )
}

export default telaEsqueceuSenhaCli