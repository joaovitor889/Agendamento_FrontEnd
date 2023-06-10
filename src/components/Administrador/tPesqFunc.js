import styles from './tPesqFunc.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'
//import logo from '../../img/logo.PNG';
import React, {useEffect, useState } from 'react';
import axios from '../../axios/configAuthCli.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

//import { useState } from "react";

const TelaPesqFunc = () => {

   document.title = "Pesquisar Funcionário";

   let uid =  useParams();

    console.log(uid.id);
    const [elementos, setElementos] = useState([]);
    


    
      axios.get("http://ec2-34-234-67-50.compute-1.amazonaws.com:4000/estabelecimento/" + uid.id).then(response => {
        const nome = response.data.nome; // Declaração do nome da empresa
        var titulo = document.getElementById('emp'); //identifica o titulo da navbar
        
        console.log(response.data.id);

        titulo.innerHTML = nome; // passando o nome da empresas para o titulo

        }).catch(error => {
            console.log(error);
        } )

    useEffect(() => {
        axios.get('http://ec2-34-234-67-50.compute-1.amazonaws.com:4000/estabelecimento/todosFunc/' + uid.id)
          .then(response => {
            setElementos(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    
    

   return (
        <div className = {styles.fPesqFunc} >
           <input type='checkbox' id={styles["check"]}/>
           
            {/* header  começo */}
            <header>
                <div className={styles.esquerda}>
                    <label  for = {styles["check"]}>
                        <img src = {menu} alt = "retunr"  className='sidebar_btn'/>
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3 id='emp'></h3>
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
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
                <select name='qual empresa?' className={styles.interprise} >
                    <option value="WLShVu"> <a href="/tPesqFunc/WLShVu">Pepino Legal</a> </option>
                    <option value="jMQqNo"> <a href="/tPesqFunc/jMQqNo">Pepino legal</a> </option>
                </select>
            </div>
            {/* sidebar  final */}
            <div className = {styles.container}> 
                <div className={styles.header_main}>
                    <div className={styles.filter}>
                        <img src= {filter} alt="" id='icon-filter' />
                        <h4>Filtre</h4>
                        <select name="func" className={styles.texto}>
                                <option value="corte">Todos os funcionários</option>
                                <option value="corte">João</option>
                                <option value="corte">Bruno</option>
                                <option value="sombrancelha">Antônio</option>
                                <option value="manicure">Guilherme</option>
                                <option value="hidratação">Jean</option>
                        </select>
                    </div>
                    <div className={styles.funcionarios}>
                        <a href="/tCadFunc"><img src={add} alt="" /></a> 
                    </div>
                </div>
                <div className={styles.cards}>


                {elementos.map((elemento, index) => (
                    <div  className={styles.card}>
                        <h4 key={index} id='nomeFunc'>{elemento.nome}</h4>
                        <p id='servFunc'>Serviços: cabelereira, manicure</p>
                        <div className={styles.card_footer}>
                            <h4 id='ganhosFunc'>Faturamento Mensal: R$ 400,00</h4>
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

export default TelaPesqFunc;
