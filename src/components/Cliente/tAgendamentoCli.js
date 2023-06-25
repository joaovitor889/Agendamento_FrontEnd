import styles from './tAgendamentoCli.module.css';
import menu from '../../icones/chevron-left.png';
import perfil from '../../img/perfil.png'
import notificar from '../../img/Component 24.png'
import block from '../../img/block-func.png'
import filtro from '../../img/filter.png'
//import logo from '../../img/logo.PNG';
import FotoCliente from './FotoPerfilCliente/fotoAgdsCli';

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

const TelaAgendamento = () => {

   document.title = "Agendamento";
   
   const { uid } = useParams();
   const { token } = useParams();

   const [agendamentos, setAgendamentos] = useState([]);
   const [index, setIndex] = useState('');

   const [nomeEmp, setNomeEmp] = useState();

   const CarregamentoInicial = (e) =>{
       agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + uid).then(response => {
           setNomeEmp(response.data.nome); // Declaração do nome da empresa

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
             `/cliente/todoAgendamentosToken/`, 
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
    
   return (
        <div className={styles.fAgendamento} onLoad={CarregamentoInicial}>
            <input type="checkbox" id={styles["check"]} />
            {/* header  começo */}
            <header>
                <div className={styles.esquerda}>
                    <a href='./tMenuCli'>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </a>
                </div>
                <div className={styles.Centro}>
                    <h3>{nomeEmp}</h3>
                </div>
                <FotoCliente/>
            </header>
            {/* final do header */}
            <div className={styles.filter}>
                    <img src={filtro} alt="filtro" />
                    <h4>Filtro</h4>
                    <input type="text" placeholder='Nome do funcionário'/>
            </div>
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
                                <h2>Profissional: {age.funcionario.nome}</h2>
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
        </div>
    )
}

export default TelaAgendamento