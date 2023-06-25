import styles from './tPesqCli.module.css';
import menu from '../../img/Menu Rounded.png'
import perfilF from '../../img/perfil.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import lixeira from '../../icones/trash-2.png'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import FotoAdm from './FotoPerfilAdm/fotoAdm';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useNavigate,
} from "react-router-dom";

import agFetch from '../../axios/config';

//import { useState } from "react";

//import { Link, useNavigate } from "react-router-dom";

//import Modal from '../modal/tCategoria';

const TelaPesqCli = () => {

    document.title = "Pesquisar Cliente";

    const { uid } = useParams();
    const { token } = useParams();

    const [searchTerm, setSearchTerm] = useState("");

    const [elementos, setElementos] = useState([]);
    const [nomeEmp, setNomeEmp] = useState();
 
    const [novoUID,  setNovoUID] = useState('');

    //const [openModalCategoria, setOpenModalCategoria] = useState(false);

    const adcionarCli = () => {
        window.open(`/tCadastroCli/${novoUID}`, '_blank');
    }

    const CarregamentoInicial = (e) =>{
        setNovoUID(uid);
        agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + uid).then(response => {
            setNomeEmp(response.data.nome); // Declaração do nome da empresa

        }).catch(error => {
            console.log(error);
        })

        // carregarServicos();
    }

    useEffect(() => {
        agFetch.get('http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/todosClientes/' + uid)
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
    
    const [selectedValue, setSelectedValue] = useState('');
    const navegate = useNavigate();

    useEffect(() => {
        renderContent(novoUID); // Executa o código relevante quando novoUID for atualizado
        renderFuncionarios(novoUID);
      }, [novoUID]);
      
      const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        setNovoUID(value); // Atualiza o estado de novoUID
      
        // Não é necessário chamar renderContent aqui
      };
      
      const renderContent = (value) => {
        agFetch.get("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/" + value)
          .then(response => {
            setNomeEmp(response.data.nome);
            // Outro código relevante aqui
          })
          .catch(error => {
            console.log(error);
          });
      };

      const renderFuncionarios = (value) => {
        agFetch.get('http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/estabelecimento/todosClientes/' + value)
            .then(response => {
                setElementos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
      }


      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };

      const filteredList = elementos.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.fPesqCli} onLoad={CarregamentoInicial}>
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
                <Link to ={`/tPesqFunc/${token}/${novoUID}`}>Profissionais</Link>
                <Link to ={`/tPesqCli/${token}/${novoUID}`} style={{color: '#7c807d'}}>Clientes</Link>
                <Link to ={`/tAgendamentosADM/${token}/${novoUID}`}>Agendamentos</Link>
                <Link to ={`/tAgendarADM/${token}/${novoUID}`}>Agendar</Link>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <Link to ={`/tServADM/${token}/${novoUID}`}>Serviços</Link>
                <Link to ={`/tMenuDBADM/${token}/${novoUID}`}>Perfil</Link>
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
                        <input type="text"value={searchTerm} onChange={handleSearchChange} placeholder='nome Cliente' />
                        {/* <button> Pesquisar</button> */}
                    </div>
                    <div className={styles.funcionarios}>
                        <img src={add} alt="" onClick={adcionarCli} />
                    </div>
                </div>
                <div className={styles.cards}>

                    {filteredList.map((elemento, index) => (
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