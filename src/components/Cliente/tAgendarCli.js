import styles from './tAgendarCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import Notificacao from '../../icones/Doorbell.png';
import Perfil from '../../icones/perfilCliente.png';

const telaAgendarCliente = () => {

    document.title = "Agendar Cliente";

    return (
        <div className={styles.fAgendarCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><a href = "./tMenuCli" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id={styles["conteudo"]}>
                <form id={styles["formAgendarCli"]}>
                    <div className={styles.tituloAgendar}>
                        <p>Agendar</p>
                    </div>
                    <br></br>

                    <select id={styles["servico"]} required>
                        <option value="srv">*Servico</option>
                        <option value="corte">Corte</option>
                    </select>

                    <br></br>

                    <select id={styles["profss"]} required>
                        <option value="prof">*Profissional</option>
                        <option value="prof1">José</option>
                    </select>

                    <br></br>
                    <div id={styles["linha"]}>
                        <div>
                            <input type="date" placeholder="*Data:" title="Escolha uma data" name="dtAgendCli" id={styles["dtAgendCli"]} required />
                        </div>

                        <div id={styles["direita"]}>
                            <select id={styles["horAtend"]} required>
                                <option value="hor">*Horário de atendimento</option>
                                <option value="hor1">14:30</option>
                            </select>
                        </div>
                    </div>
                    <select id={styles["empresa"]} required>
                        <option value="emprs">*Empresa</option>
                        <option value="emp1">Shostners & shostners</option>
                    </select>
                    <div id={styles["rodape"]}>
                        <div id={styles["preco"]}>
                            <p>Preço (R$)</p>
                        </div>
                        <div id={styles["btn"]}>
                            <input type="submit" id={styles["btnAgendarCli"]} name="btnSAgendarCli" onClick={() => alert('Realiza o Agendamento!')} value="Agendar" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default telaAgendarCliente