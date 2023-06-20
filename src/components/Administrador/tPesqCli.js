import styles from './tPesqCli.module.css';
import menu from '../../img/Menu Rounded.png'
import perfilF from '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import agFetch from '../../axios/config';

//import { useState } from "react";

//import { Link, useNavigate } from "react-router-dom";

//import Modal from '../modal/tCategoria';

const TelaPesqCli = () => {

    document.title = "Pesquisar Cliente";

    const { uid } = useParams();
    const { token } = useParams();

    const [elementos, setElementos] = useState([]);

    //const [openModalCategoria, setOpenModalCategoria] = useState(false);

    const adcionarCli = () => {
        window.open(`/tCadastroCli/${uid}`, '_blank');
    }

    agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + uid).then(response => {
        const nome = response.data.nome; // Declaração do nome da empresa
        var titulo = document.getElementById('emp'); //identifica o titulo da navbar

        console.log(response.data.id);

        titulo.innerHTML = nome; // passando o nome da empresas para o titulo

    }).catch(error => {
        console.log(error);
    })
    useEffect(() => {
        agFetch.get('http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/todosClientes/' + uid)
            .then(response => {
                setElementos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div className={styles.fPesqCli}>
            <input type='checkbox' id={styles["check"]} />

            {/* header  começo */}
            <header>
                <div className={styles.esquerda}>
                    <label for={styles["check"]}>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3 id='emp'></h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src={perfilF} alt="notificar" />
                    </a>
                    <a href="/" className="btn_noticia">
                        {/* <img src= {notificar} alt="notificar" /> */}
                    </a>
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <Link to ={`/tPesqFunc/${token}/${uid}`}>Profissionais</Link>
                <Link to ={`/tPesqCli/${token}/${uid}`} style={{color: '#7c807d'}}>Clientes</Link>
                <Link to ={`/tAgendamentosADM/${token}/${uid}`}>Agendamentos</Link>
                <Link to ={`/tAgendarADM/${token}/${uid}`}>Agendar</Link>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <Link to ={`/tServADM/${token}/${uid}`}>Serviços</Link>
                <Link to ={`/tMenuDBADM/${token}/${uid}`}>Perfil</Link>
                <Link to={`/tLoginAdm`}>Sair</Link>
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <div className={styles.container}>
                <div className={styles.header_main}>
                    <div className={styles.filter}>
                        <img src={filter} alt="" id='icon-filter' />
                        <h4>Filtre</h4>
                        <input type="text" placeholder='nome Cliente' />
                        <button> Pesquisar</button>
                    </div>
                    <div className={styles.funcionarios}>
                        <img src={add} alt="" onClick={adcionarCli} />
                    </div>
                </div>
                <div className={styles.cards}>

                    {elementos.map((elemento, index) => (
                        <div className={styles.card}>
                            <h4 key={index} id='nomeCli'>Cliente: {elemento.nome}</h4>
                            <div className={styles.card_footer}>
                                <h4 id='teleCli'>{elemento.telefone}</h4>
                                <img src={lixeira} alt="" />
                            </div>
                        </div>
                    ))}
                    
                    
                    

                </div>

            </div>
            {/*<Modal isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
        </div>
    )
}

export default TelaPesqCli