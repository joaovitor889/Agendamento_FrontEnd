import styles from './tAgendamentoProfis.module.css';
import menu from '../../icones/chevron-left.png';
import perfil from '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import block from '../../img/block-func.png'
import filtro from '../../img/filter.png'
import Foto from './FotoPerfilFunc/fotoAgdsFunc';
//import logo from '../../img/logo.PNG';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";
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

const TelaCalendarioProfissional = () => {

    document.title = "Agendamentos Profissional";

    const [backgroundColor, setBackgroundColor] = useState('');
    const { uid } = useParams();
   const { token } = useParams();

   const [agendamentos, setAgendamentos] = useState([]);
   const [index, setIndex] = useState('');

   const [nomeEmp, setNomeEmp] = useState();

    const CarregamentoInicial = (e) =>{
        agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + uid).then(response => {
            setNomeEmp(response.data.nome); // Declaração do nome da empresa
            setBackgroundColor(response.data.tema);

        }).catch(error => {
            console.log(error);
        })
    }

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
             `/funcionario/todoAgendamentosToken/`, 
             periodo, {headers}
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
   
     const headers = {
        Authorization: `Bearer ${token}`,
    };

    function getFormattedTime(dateTimeString) {
        const dateObj = new Date(dateTimeString);
        const hour = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedTime;
    }

    return (
        <div className={styles.fAgendProfissional} onLoad={CarregamentoInicial} style={{ backgroundColor }}>
            <input type='checkbox' id={styles["check_rigth"]} />
            {/* header  começo */}
            <header style={{ backgroundColor }}>
                <div className={styles.esquerda}>
                    <label htmlFor={styles["check"]}>
                    <Link to={`/tMenuProfis/${token}/${uid}`}>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </Link>
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3>{nomeEmp}</h3>
                </div>
                <Foto/>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar_rigth}>
                <h1>Filtros</h1>
                <br />
                <p>Nome do cliente</p>
                <input type="text" placeholder='Ex: Lara' />
                <br />
                <p>CPF do Cliente</p>
                <input type="text" placeholder='CPF:' />

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
                <a href='/' className={styles.block}> <img src={block} alt="bloquear" /></a>
                <div className={styles.Container}>
                {agendamentos.map((age, index) => (
                        <div key={index} onClick={() => {setIndex(index)}} className={styles.Card}>
                            <div className={styles.Card_Header}>
                                <h2>Cliente: {age.cliente.nome}</h2>
                                <p>Serviço: {age.servico.nome}</p>
                            </div>
                            <div className={styles.Card_Body}>
                                <h3>{getFormattedTime(age.data_inicio)} - {getFormattedTime(age.data_fim)}</h3>
                                <div className={styles.Status}>
                                    <h3>Status</h3>
                                    <a href="/">{age.status}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                
            </div>
        </div>
    )
}

export default TelaCalendarioProfissional