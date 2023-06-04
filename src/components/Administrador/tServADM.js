import styles from './tServADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png';
import newServ from '../../img/Component 88.png';
import filtro from '../../img/filter.png';

import lixeira from '../../icones/trash-2.png';
//import logo from '../../img/logo.PNG';

import Modal from '../modal/EditServ';
import { useState } from 'react';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaMenuADM = () => {

    document.title = "Menu do Administrador";

    document.title = "Agendamentos";

    const [openModal, setOpenModal] = useState(false)

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
                            <img src={filtro} alt="" />
                            <select name="cars" className={styles.texto}>
                                <option value="corte">Todas as categorias</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                            </select>
                        </div>
                        
                        <img src={newServ} alt="" className={styles.newServ}/>
                    </div>
                    <div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Corte de cabelo persobalizado</h4>
                        <p className={styles.card_body}>Descrição: Nossa equipe de cabeleireiros especializados oferece um serviço de corte de cabelo personalizado, levando em consideração suas preferências, tipo de cabelo e estilo desejado. Com habilidade e criatividade, trabalhamos para realçar sua aparência e ressaltar sua individualidade.</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>

                    <div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Coloração e mechas</h4>
                        <p className={styles.card_body}>Descrição: Se você está buscando uma transformação de cor ou simplesmente deseja realçar seu tom natural, nossos cabeleireiros estão prontos para ajudar. Com conhecimento sobre as últimas tendências em coloração e técnicas de mechas, podemos criar resultados deslumbrantes e personalizados, adaptados às suas preferências e estilo.</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>

                    <div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Tratamentos capilares revitalizantes</h4>
                        <p className={styles.card_body}>Descrição: Oferecemos uma variedade de tratamentos capilares que ajudam a melhorar a saúde e a aparência do seu cabelo. Desde hidratação intensa até tratamentos para fortalecimento e reparação dos fios, nossa equipe de cabeleireiros utiliza produtos de alta qualidade para revitalizar seu cabelo e deixá-lo com uma aparência radiante.</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>

                </div>
            </main>
            
            

        </div>
    )
}

export default TelaMenuADM