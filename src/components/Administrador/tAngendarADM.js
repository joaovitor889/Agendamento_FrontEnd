import styles from './tAgendarADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png'

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";


const TelaAgendarADM = () => {
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
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <main>
                <div className={styles.Container}>
                  <h1>Agendar</h1>
                  <div className={styles.dados}>
                        <select name="cars" className={styles.texto}>
                                <option value="corte">Categorias</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                        </select>
                        <select name="cars" className={styles.texto}>
                                <option value="corte">Serviços</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                        </select>
                        
                        <select   select name="func" className={styles.texto}>
                                <option value="corte">Profissional</option>
                                <option value="corte">João</option>
                                <option value="corte">Bruno</option>
                                <option value="sombrancelha">Antônio</option>
                                <option value="manicure">Guilherme</option>
                                <option value="hidratação">Jean</option>
                        </select>
                    <div className={styles.dois_campos}>
                        <input type="text" className={styles.texto} placeholder='Data'/>
                        <select name="cars" className={styles.texto}>
                                <option value="corte">Horários</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                        </select>
                    </div>
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

export default TelaAgendarADM