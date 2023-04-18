import styles from './tMenuProfis.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import Notificacao from '../../icones/Doorbell.png';
import Agenda from '../../icones/Tear-Off Calendar.png';
import Perfil from '../../icones/perfilCliente.png';

import { Link } from "react-router-dom";


const telaMenuProfissional = () => {

    document.title = "Menu Profissional";

    return (
        <div className={styles.fMenuProfissional}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><Link to="../../tLoginFunc"><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
            </nav>
            <div className={styles.fPreto}></div>
            <div className={styles.texto}>Bem-Vindo(a)<br></br>Profissional<br></br><div className={styles.nome}>Nome</div></div>
            <div className={styles.botoes}>
                <div className={styles.linha}>
                    <img src={Agenda} alt="agenda" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tAgendamentoProfis'
                    }}><p>Meus Agendamentos</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Perfil} alt="perfil" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tMenuFotoProf'
                    }}><p>Perfil</p></button>
                </div>
            </div>
        </div>
    )
}

export default telaMenuProfissional