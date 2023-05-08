import styles from './tMenuFotoProf.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';


const TelaFotoProfissional = () => {

    document.title = "Foto do Profissional";

    return (
        <div className={styles.fFotoCliente}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <div id={styles["perfilLateral"]}>
                            <img src={Perfil} alt="perfil" />
                        </div>
                        <div id={styles["textoLL"]}>
                            <a href="./tMenuFotoCli" rel="noreferrer">
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Foto</p></li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Foto (Funcionário)</center></h2>
                <form id={styles["formFoto"]}>
                    <center><img src={FotoPerfil} alt="Foto Perfil" /></center>
                    <center><input type="file" id={styles["fotoCli"]} name="fotoCli" accept="image/jpeg, image/jpg, image/png" required /></center>
                    <div id={styles["fbtnSalvarotoCli"]}>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" onClick={() => alert('Dados Salvos!')} value="Salvar" />
                    </div>
                </form>
            </div>

            <div id={styles["menuHorCli"]}>


                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div id={styles["voltar"]}><a href="./tMenuProfis" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>
        </div>
    )
}

export default TelaFotoProfissional