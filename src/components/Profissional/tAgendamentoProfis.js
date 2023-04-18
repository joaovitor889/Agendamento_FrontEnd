import styles from './tAgendamentoProfis.module.css';
//import logo from '../../img/logo.PNG';


const telaCalendarioProfissional = () => {

    document.title = "Agendamentos Profissional";

    return (
        <div className={styles.fAgendProfissional}>
            <p>Agendamentos do Profissional</p>
        </div>
    )
}

export default telaCalendarioProfissional