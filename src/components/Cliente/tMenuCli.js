import styles from './tMenuCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import Notificacao from '../../icones/Doorbell.png';
import AddAgenda from '../../icones/CalendarPlus.png';
import Agenda from '../../icones/Tear-Off Calendar.png';
import Perfil from '../../icones/perfilCliente.png';

import { Link } from "react-router-dom";

const telaMenuCliente = () => {

    document.title = "Menu do Cliente";

    return (
        <div className={styles.fMenuCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><Link to="../../tLoginCli"><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
            </nav>
            <div className={styles.fPreto}></div>
            <div className={styles.texto}>Bem-Vindo(a)<br></br>Profissional<br></br><div className={styles.nome}>Nome</div></div>
            <div className={styles.botoes}>
                <div className={styles.linha}>
                    <img src={AddAgenda} alt="addAgenda" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tAgendarCli'
                    }}><p>Agendar</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Agenda} alt="agenda" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tAgendamentoCli'
                    }}><p>Meus Agendamentos</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Perfil} alt="perfil" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tMenuDBCli'
                    }}><p>Perfil</p></button>
                </div>
            </div>
        </div>
    )
}

export default telaMenuCliente