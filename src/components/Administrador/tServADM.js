import styles from './tServADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfilF from '../../img/perfil.png';
import newServ from '../../img/Component 88.png';
import filtro from '../../img/filter.png';
import FotoAdm from './FotoPerfilAdm/fotoAdm';

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
import { set } from 'date-fns';

const TelaMenuADM = () => {

    document.title = "Serviços";

    const { token } = useParams();
    const { uid } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [services, setServices] = useState([]);

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [index, setIndex] = useState('');

    //const [openModalCategoria, setOpenModalCategoria] = useState(false);

    const navigate = useNavigate();

    const handleADD = (e) => {
        e.preventDefault();
        navigate(`/tCadServico/${token}/${uid}`);
    }

    const [nomeEmp, setNomeEmp] = useState();

    //nome da empresa
    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmp(empResponse.data.nome);
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

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
    }, [uid]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    console.log(services);

    const clickServ = (e)  =>{
        setOpenModal(true);
        
    }

    function BloueioServ (id, nome, preco, ativo, tempo, descricao, categoria) {
        
        var service = {
            UIDEstabelecimento: uid,
            nome: nome,
            preco: preco,
            ativo: !(ativo),
            tempoMedioMin: tempo,
            descricao: descricao,
            categoria: categoria
        }


        const blockServ = async () => {
            try {
                //const response = await agFetch.get('/estabelecimento/todasCat/WLShVu');
                const response = await agFetch.patch(`/servicos/${id}`, service);
                alert('serviço bloqueado')
            } catch (error) {
                console.log(error);
            }
        };
        blockServ();

        
    
    }

    const [display, setDisplay] = useState('');

    function getDisplay (ativo) {
        if(ativo){
            setDisplay('flex');
        }else{
            setDisplay('none');
        }
        return display
    }
    
    const filteredList = services.filter((item) =>
        item.ativo === true   
    );

    const [empresas, setEmpresas] = useState([]);
    useEffect(()=> {
        async function PegaEmpresas(){
            try{
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const funcResonse = await agFetch.get(`/estabelecimento/prop/`, {headers});
                setEmpresas(funcResonse.data);
            }
            catch(error){
                console.log(error)
            }
        }
        PegaEmpresas();
    })

    const [novoUID,  setNovoUID] = useState('');    
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        setNovoUID(value); // Atualiza o estado de novoUID
      
        // Não é necessário chamar renderContent aqui
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
                    <h3>{nomeEmp}</h3>
                </div>
                <FotoAdm/>
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
                <select name='qual empresa?' className={styles.interprise} onChange={handleSelectChange}>
                    <option value="">Escolha a empresa</option>
                    {empresas.map(empresa => (
                        <option key={empresa.id} value={empresa.uid}>
                            {empresa.nome}
                        </option>
                    ))}
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

                    {filteredList.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <h4 data-value = {index} className={styles.card_header} onClick={() => {setOpenModal(true); setIndex(index)}}>{service.nome}</h4>
                            <p className={styles.card_body}>{service.descricao}</p>
                            <span >{service.id}</span>
                            <div className={styles.card_footer}>
                                <h4>Preço: {service.preco.toLocaleString('pt-BR')}</h4>
                                <img src={lixeira} alt="" onClick={() => BloueioServ(service.id, service.nome, service.preco, service.ativo, service.tempoMedioMin, service.descricao, service.categoria)}/>
                            </div>
                        </div>
                    ))}

                    <br />
                    <br />
                    <br />

                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} categori={services} index={index} />
                    {/*<Categoria isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
                </div>
            </main>



        </div>
    )
}

export default TelaMenuADM