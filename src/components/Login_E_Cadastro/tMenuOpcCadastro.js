import styles from './tMenuOpcCadastro.module.css';

const telaMenuOpcaoCadastro = () => {
    return (
        <div className={styles.fOpcCad}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2><center>Escolha uma Opção de Cadastro: </center></h2>

            <div id={styles["btnsOpcCad"]}>
                <button type="button" className={styles.btn} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = './tCadastroCli'
                }}><p>Cliente</p></button>

                <button type="button" className={styles.btn} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = './tCadastroAdm'
                }}><p>Empresa {"("}ADM{")"}</p></button>                
            </div>
            <center><p id={styles["obs"]}>*Somente empresas podem cadastrar Funcionários</p></center>
        </div>
    )
}

export default telaMenuOpcaoCadastro