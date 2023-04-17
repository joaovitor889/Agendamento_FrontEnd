import styles from './tMenuOpcLogin.module.css';

const telaMenuOpcaoLogin = () => {

    document.title = "Opção de Login";

    return (
        <div className={styles.fOpcLogin}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2><center>Escolha uma Opção de Login: </center></h2>

            <div id={styles["btnsOpcLogin"]}>
                <button type="button" className={styles.btn} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = './tLoginCli'
                }}><p>Cliente</p></button>

                <button type="button" className={styles.btn} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = './tLoginFunc'
                }}><p>Funcionário</p></button>

                <button type="button" className={styles.btn} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = './tLoginAdm'
                }}><p>Empresa {"("}ADM{")"}</p></button>

            </div>
        </div>
    )
}

export default telaMenuOpcaoLogin