import styles from './tAgendarADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png'




const telaAgendarADM = () => {
    document.title ="Cadastrar Serviço";

    return (
        <div className={styles.fAgendar}>
            <input type='checkbox' id={styles["check"]}/>
             {/* header  começo */}
             <div className={styles.body_header}>
                <div className={styles.esquerda}>
                    <label  htmlFor = {styles["check"]}>
                        <img src = {menu} alt = "retunr"  className='sidebar_btn'/>
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src= {perfil} alt="notificar" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </div>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <a href="/tPesqFunc">Profissionais</a>
                <a href="/tPesqCli">Clientes</a>
                <a href="/tAgendamentosADM">Agendamentos</a>
                <a href="/tAgendarADM">Agendar</a>
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
                <div className={styles.interprise}>
                    <h3>Qual empresa?</h3>
                </div>
            </div>
            {/* sidebar  final */}
            <main>
                <div className={styles.Container}>
                  <h1>Agendar</h1>
                  <div className={styles.dados}>
                    <input type="text" className={styles.texto} placeholder='Categoria'/>
                    <input type="text" className={styles.texto} placeholder='Serviço'/>
                    <input type="text" className={styles.texto} placeholder='Profissional'/>
                    <div className={styles.dois_campos}>
                        <input type="text" className={styles.texto} placeholder='Data'/>
                        <input type="text" className={styles.texto} placeholder='Horario de atendimento'/>
                    </div>
                    <input type="text" className={styles.texto} placeholder='Local'/>
                  </div>
                  <div className={styles.cliente}>
                    <input type="text" className={styles.texto} placeholder='Nome do Cliente'/>
                    <input type="text" className={styles.texto} placeholder='Telefone'/>
                    <input type="text" className={styles.texto} placeholder='CPF'/>
                  </div>
                  <div className={styles.finsh}>
                    <input type="text" className={styles.texto_demonstrativo} placeholder='Preço (R$)'/>
                    <br/>
                    <a href="/tAgendamentosADM">Agendar</a>
                  </div>
                </div>
            </main>
        </div>
    )
}

export default telaAgendarADM