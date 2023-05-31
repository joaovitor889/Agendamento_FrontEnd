import styles from './tPesqCli.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'


const telaPesqCli = () => {

   document.title = "Pesquisar Cliente";

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
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
               <div className={styles.interprise}>
                   <h3>Qual empresa?</h3>
               </div>
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
           
       </div>
    )
}

export default telaPesqCli