import styles from './tPesqCli.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'

//import { useState } from "react";

//import { Link, useNavigate } from "react-router-dom";

//import Modal from '../modal/tCategoria';

const TelaPesqCli = () => {

   document.title = "Pesquisar Cliente";

   //const [openModalCategoria, setOpenModalCategoria] = useState(false);

   return (
        <div className = {styles.fPesqCli}>
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
                   <a href="/" className="btn_noticia">
                       {/* <img src= {notificar} alt="notificar" /> */}
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
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
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
                        <input type="text" placeholder='nome Cliente'/>
                        <button> Pesquisar</button>
                   </div>
                   <div className={styles.funcionarios}> 
                       <img src={add} alt="" />
                   </div>
               </div>
               <div className={styles.cards}>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                   <div  className={styles.card}>
                       <h4>Cliente: Joana Joaquina</h4>
                       <div className={styles.card_footer}>
                           <h4>Telefone: (XX) 0000-0000</h4>
                           <img src={lixeira} alt="" />
                       </div>
                   </div>
                 
               </div>
               
           </div>
           {/*<Modal isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
       </div>
    )
}

export default TelaPesqCli