import styles from './tPesqFunc.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'
//import logo from '../../img/logo.PNG';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaPesqFunc = () => {

   document.title = "Pesquisar Funcionário";

   return (
        <div className = {styles.fPesqFunc}>
           <input type='checkbox' id={styles["check"]}/>
           
            {/* header  começo */}
            <header>
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
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <a href="/tPesqFunc">Profissionais</a>
                <a href="/tPesqCli">Clientes</a>
                <a href="/tAgendamentosADM">Agendamentos</a>
                <a href="/tAgendarADM">Agendar</a>                
                <a href="/tCategoriaADM">Categorias</a>
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
                <a href="/">Sair</a>
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <div className = {styles.container}> 
                <div className={styles.header_main}>
                    <div className={styles.filter}>
                        <img src= {filter} alt="" id='icon-filter' />
                        <h4>Filtre</h4>
                        <select name="func" className={styles.texto}>
                                <option value="corte">Todos os funcionários</option>
                                <option value="corte">João</option>
                                <option value="corte">Bruno</option>
                                <option value="sombrancelha">Antônio</option>
                                <option value="manicure">Guilherme</option>
                                <option value="hidratação">Jean</option>
                            </select>
                    </div>
                    <div className={styles.funcionarios}> 
                        <img src={add} alt="" />
                    </div>
                </div>
                <div className={styles.cards}>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div><div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div><div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div><div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div><div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div><div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div><div  className={styles.card}>
                        <h4>Joana Joaquina</h4>
                        <p>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4>Faturamento Mensal: R$ 400,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default TelaPesqFunc