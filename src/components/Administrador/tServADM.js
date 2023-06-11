import styles from './tServADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from '../../img/perfil.png';
import newServ from '../../img/Component 88.png';
import filtro from '../../img/filter.png';

import lixeira from '../../icones/trash-2.png';
//import logo from '../../img/logo.PNG';

import Modal from '../modal/EditServ';
//import Categoria from '../modal/tCategoria';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

import agFetch from '../../axios/config';

const TelaMenuADM = () => {

    document.title = "Serviços";

    const [openModal, setOpenModal] = useState(false);
    const [services, setServices] = useState([]);

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    //const [openModalCategoria, setOpenModalCategoria] = useState(false);

    const navigate = useNavigate();

    const handleADD = (e) => {
        e.preventDefault();
        navigate("/tCadServico");
    }

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await agFetch.get('/servicos/todos');
                setServices(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchServices();

        const fetchCategories = async () => {
            try {
                const response = await agFetch.get('/servicos/todos');
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className={styles.fMenuADM}>
            <input type='checkbox' id={styles["check"]} />
            {/* header  começo */}
            <header>
                <div className={styles.esquerda}>
                    <label for={styles["check"]}>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src={perfil} alt="notificar" />
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
            <main>
                <div className={styles.container}>
                    <div className={styles.header_container}>
                        <div className={styles.filter}>
                            <img src={filtro} alt="" />
                            {/*<select name="cars" className={styles.texto}>
                                <option value="corte">Todas as categorias</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                            </select>*/}

                            <select name="category" className={styles.texto} value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="">Todas as categorias</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.nome}>{category.nome}</option>
                                ))}
                            </select>
                        </div>

                        <img src={newServ} alt="" className={styles.newServ} onClick={handleADD} />
                    </div>
                    {/*<div  className={styles.card} onClick={()=> setOpenModal(true)}>
                        <h4 className={styles.card_header}>Corte de cabelo persobalizado</h4>
                        <p className={styles.card_body}>Descrição: Nossa equipe de cabeleireiros especializados oferece um serviço de corte de cabelo personalizado, levando em consideração suas preferências, tipo de cabelo e estilo desejado. Com habilidade e criatividade, trabalhamos para realçar sua aparência e ressaltar sua individualidade.</p>
                        <div className={styles.card_footer}>
                            <h4>Preço: R$ 60,00</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>*/}

                    {services.map((service) => (
                        <div key={service.id} className={styles.card} onClick={() => setOpenModal(true)}>
                            <h4 className={styles.card_header}>{service.nome}</h4>
                            <p className={styles.card_body}>{service.descricao}</p>
                            <div className={styles.card_footer}>
                                <h4>Preço: {service.preco.toLocaleString('pt-BR')}</h4>
                                <img src={lixeira} alt="" />
                            </div>
                        </div>
                    ))}

                    <br />
                    <br />
                    <br />

                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                    {/*<Categoria isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
                </div>
            </main>



        </div>
    )
}

export default TelaMenuADM