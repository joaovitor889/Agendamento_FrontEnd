import styles from './tPesqFunc.module.css';
import menu from '../../img/Menu Rounded.png'
import perfilF from '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'


//import logo from '../../img/logo.PNG';
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";

import agFetch from '../../axios/config';


//import { useState } from "react";

const TelaPesqFunc = () => {

    document.title = "Funcionários";

    var { uid } = useParams();
    const { token } = useParams();

    const [elementos, setElementos] = useState([]);


    agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + uid).then(response => {
        const nome = response.data.nome; // Declaração do nome da empresa
        var titulo = document.getElementById('emp'); //identifica o titulo da navbar

        console.log(response.data.id);

        titulo.innerHTML = nome; // passando o nome da empresas para o titulo

    }).catch(error => {
        console.log(error);
    })

    useEffect(() => {
        agFetch.get('http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/todosFunc/' + uid)
            .then(response => {
                setElementos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    //Pegar funcionarios
    const [funcionarios, setFuncionarios] = useState([]);
    useEffect(() => {
        // Fazer a requisição GET para obter a lista de funcionários
        async function PegaFuncionarios() {
            try {
                //const funcResonse = await agFetch.get(`/estabelecimento/todosFunc/${uid}`);
                const funcResonse = await agFetch.get(`/estabelecimento/todosFunc/${uid}`);
                setFuncionarios(funcResonse.data);
            } catch (error) {
                console.log(error);
            }
        }
        PegaFuncionarios();
    }, []);

    const addFuncionario = () => {
        window.open(`/tCadFunc/${token}/${uid}`, '_blank');
    }   

    const [selectedValue, setSelectedValue] = useState('');
    const navegate = useNavigate();

    function handleSelectChange(event) {
        const value = event.target.value;

        setSelectedValue(value);
        console.log(value)
        navegate(`/tPesqFunc/${token}/${value}`)
    }


    return (
        <div className={styles.fPesqFunc} >
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
                        <img src={perfilF} alt="perfil" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <Link to ={`/tPesqFunc/${token}/${uid}`} style={{color: '#7c807d'}}>Profissionais</Link>
                <Link to ={`/tPesqCli/${token}/${uid}`}>Clientes</Link>
                <Link to ={`/tAgendamentosADM/${token}/${uid}`}>Agendamentos</Link>
                <Link to ={`/tAgendarADM/${token}/${uid}`}>Agendar</Link>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <Link to ={`/tServADM/${token}/${uid}`}>Serviços</Link>
                <Link to ={`/tMenuDBADM/${token}/${uid}`}>Perfil</Link>
                <Link to={`/tLoginAdm`}>Sair</Link>
                <select name='qual empresa?' className={styles.interprise} onChange={handleSelectChange}>
                    <option value="WLShVu"> <a href="/tPesqFunc/WLShVu">Empresa1</a> </option>
                    <option value="jMQqNo"> <a href="/tPesqFunc/jMQqNo">Empresa2</a> </option>
                </select>
            </div>
            {/* sidebar  final */}
            <div className={styles.container}>
                <div className={styles.header_main}>
                    <div className={styles.filter}>
                        <img src={filter} alt="" id='icon-filter' />
                        <h4>Filtre</h4>
                        <select name="func" className={styles.texto}>
                            <option value="funcionarios">Todos os funcionários</option>
                            {funcionarios.map(funcionario => (
                                <option key={funcionario.id} value={funcionario.id}>
                                    {funcionario.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.funcionarios}>
                        <p onClick={addFuncionario}><img src={add} alt="" /></p>
                    </div>
                </div>
                <div className={styles.cards}>


                    {elementos.map((elemento, index) => (
                        <div className={styles.card}>
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
