import styles from './tServADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfilF from '../../img/perfil.png';
import newServ from '../../img/Component 88.png';
import filtro from '../../img/filter.png';

import lixeira from '../../icones/trash-2.png';
//import logo from '../../img/logo.PNG';

import Modal from '../modal/EditServ';
//import Categoria from '../modal/tCategoria';
import { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

import agFetch from '../../axios/config';

const TelaMenuADM = () => {

    document.title = "Serviços";

    const { uid } = useParams();
    const { token } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [services, setServices] = useState([]);

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    //const [openModalCategoria, setOpenModalCategoria] = useState(false);

    const navigate = useNavigate();

    const handleADD = (e) => {
        e.preventDefault();
        navigate(`/tCadServico/${token}/${uid}`);
    }

    useEffect(() => {
        //fazer uma variavel global que pegue o ID do estabelecimento
        const fetchServices = async () => {
            try {
                //const response = await agFetch.get('/estabelecimento/todosServ/WLShVu');
                const response = await agFetch.get(`/estabelecimento/todosServ/${uid}`);
                setServices(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchServices();

        const fetchCategories = async () => {
            try {
                //const response = await agFetch.get('/estabelecimento/todasCat/WLShVu');
                const response = await agFetch.get(`/estabelecimento/todasCat/${uid}`);
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

    console.log(services);

    const clickServ = (e)  =>{
        setOpenModal(true);
        
    }

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
                        <img src={perfilF} alt="notificar" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <Link to={`/tPesqFunc/${token}/${uid}`}>Profissionais</Link>
                <Link to={`/tPesqCli/${token}/${uid}`}>Clientes</Link>
                <Link to={`/tAgendamentosADM/${token}/${uid}`}>Agendamentos</Link>
                <Link to={`/tAgendarADM/${token}/${uid}`}>Agendar</Link>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <Link to={`/tServADM/${token}/${uid}`} style={{ color: '#7c807d' }}>Serviços</Link>
                <Link to={`/tMenuDBADM/${token}/${uid}`}>Perfil</Link>
                <Link to={`/tLoginAdm`}>Sair</Link>
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

                    {services.map((service, index) => (
                        <div key={index} className={styles.card} onClick={() => setOpenModal(true)}>
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

                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} categori={services}  nome="corte no degrau" descricao="Corte degrade na zero"/>
                    {/*<Categoria isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
                </div>
            </main>



        </div>
    )
}

export default TelaMenuADM