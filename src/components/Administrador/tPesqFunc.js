import styles from './tPesqFunc.module.css';
import menu from '../../img/Menu Rounded.png'
import perfilF from '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'
import FotoAdm from './FotoPerfilAdm/fotoAdm';


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

    const { uid } = useParams();
    const { token } = useParams();

    const [elementos, setElementos] = useState([]);
    const [nomeEmp, setNomeEmp] = useState();
 
    const CarregamentoInicial = (e) =>{
        agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + uid).then(response => {
            setNomeEmp(response.data.nome); // Declaração do nome da empresa

        }).catch(error => {
            console.log(error);
        })

        carregarServicos();
    }

    

    useEffect(() => {
        agFetch.get('http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/todosFunc/' + uid)
            .then(response => {
                setElementos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
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
        console.log(value);

        renderContent(value);

    }

    
  const renderContent = (value) => {

        agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + value).then(response => {
            setNomeEmp(response.data.nome); // Declaração do nome da empresa

        }).catch(error => {
            console.log(error);
        })

    
        agFetch.get('http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/todosFunc/' + value)
            .then(response => {
                setElementos(response.data);
            })
            .catch(error => {
                console.error(error);
            });

            console.log("CHAMAAAAA!!!");
            
            
    
  };

  

  function carregarServicos (){
    var nomesServ = []
    var IdsFunc = []
    for(var i = 0; i < elementos.length; i++){
        IdsFunc[i] = elementos[i].id;
        console.log(IdsFunc[i])
        agFetch.get(`http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/funcionario/servicos/19`).then(
            response => {
                console.log(response.data)
                for(var x = 0; x < response.data.length; x++){
                    nomesServ[0] =  response.data[x].nome;
                }
            }
        )
    }
    console.log(nomesServ[0]);
  }


    


    return (
        <div className={styles.fPesqFunc} onLoad={CarregamentoInicial}>
            <input type='checkbox' id={styles["check"]} />

            {/* header  começo */}
            <header>
                <div className={styles.esquerda}>
                    <label for={styles["check"]}>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3 id='emp'>{nomeEmp}</h3>
                </div>
                <FotoAdm/>
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
                    <option value="">Escolha a empresa</option>
                    {empresas.map(empresa => (
                        <option key={empresa.id} value={empresa.uid}>
                            {empresa.nome}
                        </option>
                    ))}
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
                            <span >{elemento.id}</span>
                            <div className={styles.card_footer}>
                                <h4 id='ganhosFunc'>Faturamento Mensal: R$ 400,00</h4>
                                <img src={lixeira} alt="" />
                            </div>
                        </div>
                    ))}

                   {/* {renderContent()} */}
                </div>

            </div>
            {/*<Modal isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
        </div>
    )
}

export default TelaPesqFunc;
