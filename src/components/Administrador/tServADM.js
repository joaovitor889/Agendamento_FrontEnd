import styles from './tServADM.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import newServ from '../../img/Component 88.png'

import lixeira from '../../icones/trash-2.png'
//import logo from '../../img/logo.PNG';


const telaMenuADM = () => {

    document.title = "Menu do Administrador";

   return (
        <div className = {styles.fMenuADM}>
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
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
                <div className={styles.interprise}>
                    <h3>Qual empresa?</h3>
                </div>
            </div>
            {/* sidebar  final */}
            <main>
            <div className = {styles.container}> 
                    <div className={styles.header_container}>
                        <input type="text" placeholder='categoria' className={styles.texto} />
                        <img src={newServ} alt="" className={styles.newServ}/>
                    </div>
                    <div  className={styles.card}>
                        <h4 className={styles.card_header}>Corte de cabelo channel</h4>
                        <p className={styles.card_body}>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>

                    <div  className={styles.card}>
                        <h4 className={styles.card_header}>Corte de cabelo channel</h4>
                        <p className={styles.card_body}>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>

                    <div  className={styles.card}>
                        <h4 className={styles.card_header}>Corte de cabelo channel</h4>
                        <p className={styles.card_body}>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                   
                </div>
            </main>
            
            

        </div>
    )
}

export default telaMenuADM