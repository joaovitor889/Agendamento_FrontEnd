import styles from './tCategoria.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png';
import newCat from '../../img/Component 88.png';

import lixeira from '../../icones/trash-2.png';
//import logo from '../../img/logo.PNG';

import Modal from '../modal/EditCat';
import { useState } from 'react';

import CadCat from '../modal/CadCat';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaCategoriasADM = () => {

    document.title = "Categorias";

    const [openModal, setOpenModal] = useState(false);
    const [openCadCat, setOpenCadCat] = useState(false);

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
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <main>
            <div className = {styles.container}> 
                    <div className={styles.header_container}>
                        <div className={styles.filter}>
                        </div>
                        
                        <img src={newCat} alt="" className={styles.newCat} onClick={()=> setOpenCadCat(true)}/>
                    </div>
                    <div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Corte</h4>
                        
                        <div className={styles.card_footer}>
                            <h4></h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>

                    <div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Barba</h4>
                        
                        <div className={styles.card_footer}>
                            <h4></h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>

                    <div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Manicure</h4>
                        
                        <div className={styles.card_footer}>
                            <h4></h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
                    <CadCat isOpen={openCadCat} setOpenCadCat={() => setOpenCadCat(!openCadCat)}/>
                </div>
            </main>
            
            

        </div>
    )
}

export default TelaCategoriasADM