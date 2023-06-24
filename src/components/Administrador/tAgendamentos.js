import styles from './tAgendamentos.module.css';
import menu from '../../img/Menu Rounded.png';
import perfilF from '../../img/perfil.png';
import block from '../../img/block-func.png';
import filtro from '../../img/filter.png';

import Bloquear from '../modal/Bloquear';
import DetalhesAge from '../modal/DetalhesAge';
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";
import { arEG } from 'date-fns/locale';
import agFetch from '../../axios/config';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaAgendamentos = () => {

    document.title = "Agendamentos";

    const [openModal, setOpenModal] = useState(false)
    const [openAgeda, setDetalheOpen] = useState(false)

    const { uid } = useParams();
    const { token } = useParams();

    const [agendamentos, setAgendamentos] = useState([]);
    const [index, setIndex] = useState('');
;
    const [periodo, setPeriodo] = useState({
        data_inicio: "2023-06-26T00:00:00.000Z",
        data_fim: "2023-06-26T23:00:00.000Z"
      });
    
      const setDataInicio = (dataInicio) => {
        setPeriodo(prevPeriodo => ({
          ...prevPeriodo,
          data_inicio: dataInicio + 'T00:00:00.000Z'
        }));
      };
    
      const setDataFim = (dataFim) => {
        setPeriodo(prevPeriodo => ({
          ...prevPeriodo,
          data_fim: dataFim + 'T23:00:00.000Z'
        }));
      };

      useEffect(() => {
        const fetchAgendamentos = async () => {
          try {
            const response = await agFetch.post(
              `/estabelecimento/todosAgendamentos/${uid}`,
              periodo
            );
            setAgendamentos(response.data);
            console.log(response.data)
            console.log(periodo)
            console.log(uid)

          } catch (error) {
            console.log(error);
          }
        };
      
        fetchAgendamentos();
      }, [periodo.data_inicio, periodo.data_fim]);

    const handleDataClick = (dataValue) => {
        setDataInicio(dataValue);
        setDataFim(dataValue);
      };
    

    

    return (
        <main>
            <div className={styles.fAgends}>
                <input type='checkbox' id={styles["check"]} />
                <input type='checkbox' id={styles["check_rigth"]} />
                {/* header  começo */}
                <header>
                    <div className={styles.esquerda}>
                        <label htmlFor={styles["check"]}>
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
                        <img src={notificar} alt="notificar" />
                    </a> */}
                    </div>
                </header>
                {/* final do header */}
                {/* sidebar começo */}
                <div className={styles.sidebar}>
                    <Link to={`/tPesqFunc/${token}/${uid}`}>Profissionais</Link>
                    <Link to={`/tPesqCli/${token}/${uid}`}>Clientes</Link>
                    <Link to={`/tAgendamentosADM/${token}/${uid}`} style={{ color: '#7c807d' }}>Agendamentos</Link>
                    <Link to={`/tAgendarADM/${token}/${uid}`}>Agendar</Link>
                    {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                    <Link to={`/tServADM/${token}/${uid}`}>Serviços</Link>
                    <Link to={`/tMenuDBADM/${token}/${uid}`}>Perfil</Link>
                    <Link to={`/tLoginAdm`}>Sair</Link>
                    <select name='qual empresa?' className={styles.interprise}>
                        <option value="emp1">Shostners and Shostners</option>
                        <option value="emp2">Show de bola</option>
                    </select>
                </div>
                {/* sidebar  final */}
                {/* sidebar começo */}
                <div className={styles.sidebar_rigth}>
                    <h1>Filtros</h1>
                    <br />
                    <p>Nome do cliente</p>
                    <input type="text" placeholder='Ex: Lara' />
                    <br />
                    <p>CPF do Cliente</p>
                    <input type="text" placeholder='CPF:' />
                    <br />
                    <p>Nome do Profissional</p>
                    <select name="func" className={styles.texto}>
                        <option value="corte">Todos os funcionários</option>
                        <option value="corte">João</option>
                        <option value="corte">Bruno</option>
                        <option value="sombrancelha">Antônio</option>
                        <option value="manicure">Guilherme</option>
                        <option value="hidratação">Jean</option>
                    </select>

                    <button className='btn_fill'>Filtrar</button>
                </div>
                {/* sidebar  final */}
                <label htmlFor={styles["check_rigth"]} className={styles.filter}>
                    <img src={filtro} alt="filtro" />
                    <h4>Filtro</h4>
                </label>
                <div className='calendario'>
                    <div className={styles.rowTop}>
                        <h4>Seg</h4>
                        <h4>Ter</h4>
                        <h4>Quar</h4>
                        <h4>Quin</h4>
                        <h4>Sex</h4>
                        <h4>Sab</h4>
                        <h4>Dom</h4>
                    </div>
                    <div className={styles.rowBotton}>
                        <h4 data-value="2023-06-26" onClick={() => handleDataClick("2023-06-26")}>26/06</h4>
                        <h4 data-value="2023-06-27" onClick={() => handleDataClick("2023-06-27")}>27/06</h4>
                        <h4 data-value="2023-06-28" onClick={(e) => {setDataInicio(e.target.getAttribute('data-value')); setDataFim(e.target.getAttribute('data-value'));}}>28/06</h4>
                        <h4 data-value="2023-06-29" onClick={(e) => {setDataInicio(e.target.getAttribute('data-value')); setDataFim(e.target.getAttribute('data-value'));}}>29/06</h4>
                        <h4 data-value="2023-06-30" onClick={(e) => {setDataInicio(e.target.getAttribute('data-value')); setDataFim(e.target.getAttribute('data-value'));}}>30/06</h4>
                        <h4 data-value="2023-07-01" onClick={(e) => {setDataInicio(e.target.getAttribute('data-value')); setDataFim(e.target.getAttribute('data-value'));}}>01/07</h4>
                        <h4 data-value="2023-07-02" onClick={(e) => {setDataInicio(e.target.getAttribute('data-value')); setDataFim(e.target.getAttribute('data-value'));}}>02/07</h4>
                    </div>
                </div>
                <a onClick={() => setOpenModal(true)} className={styles.block}> <img src={block} alt="bloquear" /></a>
                <div className={styles.Container}>
                    {agendamentos.map((age, index) => (
                        <div key={index} onClick={() => {setDetalheOpen(true);setIndex(index)}} className={styles.Card}>
                            <div className={styles.Card_Header}>
                                <h2>Cliente: {age.cliente.nome}</h2>
                                <p>Serviço: {age.servico.nome}</p>
                            </div>
                            <div className={styles.Card_Body}>
                                <h3>14:00 - 16:00</h3>
                                <div className={styles.Status}>
                                    <h3>Status</h3>
                                    <a href="/">{age.status}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>

                <Bloquear isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                <DetalhesAge isOpen={openAgeda}  setDetalheOpen={() => setDetalheOpen(!openAgeda)} agendamento={agendamentos} index = {index}/>
            </div>
        </main>
    )
}

export default TelaAgendamentos