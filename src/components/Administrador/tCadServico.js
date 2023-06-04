import styles from'./tCadServico.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png'

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaCadServico = () => {
    document.title ="Cadastrar Serviço";

    return (
        <div className={styles.fCadServico}>
             <input type='checkbox' id={styles["check"]}/>
             {/* header  começo */}
             <header className={styles.body_header}>
                <div className={styles.esquerda}>
                    <label  for = {styles["check"]}>
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
                    
                </div>
            </header>
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
            <div className={styles.main}>
                <div className={styles.Container}>
                  <h1>Cadastro de Serviços</h1>
                  <div className={styles.dados}>
                    <input type="text" className={styles.texto} placeholder='Categoria'/>
                    <input type="text" className={styles.texto} placeholder='Nome'/>
                    <textarea placeholder='Descrição'  className={styles.desc}/>
                    <input type="text" className={styles.texto} placeholder='Tempo'/>
                  </div>
                  <div className={styles.finsh}>
                    <input type="text" className={styles.texto} placeholder='R$'/>
                    <br/>
                    <br/>
                    <a href="/">Cadastrar</a>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default TelaCadServico