import styles from './tCadFunc.module.css';
import agFetch from '../../axios/config.js';
//import menu from '../../icones/chevron-left.png';
import perfil from '../../img/perfil.png';

//import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { useState } from 'react';

const TelaCadFunc = () => {

    document.title = "Cadastrar Funcionário";

    const navigate = useNavigate();
    const uid =  useParams().id;
    const token = useParams().token;
    console.log(uid);
    console.log(token);

    const [jsNome, setNome] = useState('');
    const [jsEmail, setEmail] = useState('');
    const [jsSenha, setSenha] = useState('');
    const [jsConfSenha, setConfSenha] = useState('');
    const [jsCPF, setCPF] = useState('');
    const [jsTelefone, setTelefone] = useState('');
    const [jsSobrenome, setSobrenome] = useState('');
    const [jsUF, setUF] = useState('');
    const [jsCidade, setCidade] = useState('');
    const [jsBairro, setBairro] = useState('');
    const [jsLogradouro, setLogradouro] = useState('');

    const[segInicio, setSegInicio] = useState('');
    const[terInicio, setTerInicio] = useState('');
    const[quarInicio, setQuarInicio] = useState('');
    const[quinInicio, setQuinInicio] = useState('');
    const[sexInicio, setSexInicio] = useState('');
    const[sabInicio, setSabInicio] = useState('');
    const[domInicio, setDomInicio] = useState('');

    const[segFim, setSegFim] = useState('');
    const[terFim, setTerFim] = useState('');
    const[quarFim, setQuarFim] = useState('');
    const[quinFim, setQuinFim] = useState('');
    const[sexFim, setSexFim] = useState('');
    const[sabFim, setSabFim] = useState('');
    const[domFim, setDomFim] = useState('');

       
         

    /*const signup = async (nome, telefone, cpf, email, senha) => {
        navigate("/tLoginFunc");
    }*/
    const cadFuncionario = async(funcionarioFile) => {

        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const responseText = await agFetch.post('/funcionario/criar', funcionarioFile, {headers});
            console.log('Resposta de Texto:', responseText.data)
            if (responseText.status === 201)
                alert("Estabelecimento Cadastrado!");

            } catch (error) {
                console.error('Erro ao enviar requisições:', error);
                alert("Dados Inválidos!");
            }
    }


    const handleSubmit = (e) => {
        // e.preventDefault();

        if(jsSenha === jsConfSenha){
            

            var jsHorarios = [
                {diaSemana:"segunda", inicio: segInicio, fim: segFim },
                {diaSemana: "terça", inicio: terInicio, fim: terFim},
                {diaSemana:"quarta", inicio: quarInicio, fim: quarFim },
                {diaSemana: "quinta", inicio: quinInicio, fim: quinFim},
                {diaSemana: "sexta", inicio: sexInicio, fim: sexFim},
                {diaSemana:"sábado", inicio: sabInicio, fim: sabFim },
                {diaSemana: "domingo", inicio: domInicio, fim: domFim},
            ]
    
            var funcionario = {
                UIDEstabelecimento: uid,
                nome: jsNome+ " " + jsSobrenome,
                email: jsEmail,
                senha: jsSenha,
                cpf: jsCPF,
                cnpj: "",
                telefone: jsTelefone,
                uf: jsUF,
                cidade: jsCidade,
                bairro: jsBairro,
                logradouro: jsLogradouro,
                numero: "12",
                complemento: "",
    
                horarios: jsHorarios,
                servicoIds: [10, 2]
                
            }

            cadFuncionario(funcionario);
    
            console.log(funcionario);
        

            alert("Executa a função de cadastro e vai para a tela de Login");

        }else(
            alert("Senhas diferentes!")
        )


        

        //testa se os dados foram pegos
        //alert(JSON.stringify({ nome, telefone, cpf, email, senha }));

        // Chamar a função de cadastro
        //signup(nome, telefone, cpf, email, senha);
    };

    return (
        <div className={styles.fCadFunc}>
            <div className={styles.body_header}>
                <div className={styles.esquerda}>
                    {/*<img src={menu} alt="retunr" className='sidebar_btn' />*/}
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src={perfil} alt="notificar" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </div>
            {/* final do header */}
            <div className={styles.Container}>
                <h2>Cadastro de Funcionário</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className={styles.Container_DB}>
                        <input type="text" className={styles.dados_basicos} placeholder='Nome:' id='nomeInput' onChange={(e) => setNome(e.target.value)}/>
                        <input type="text" className={styles.dados_basicos} placeholder='Sobrenome:' id='sobrenomeInput' onChange={(e) => setSobrenome(e.target.value)}/>
                        <input type="text" className={styles.dados_basicos} placeholder='E-mail:'  id='emailInput' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" className={styles.dados_basicos} placeholder='Telefone:' id='telefoneInput' onChange={(e) => setTelefone(e.target.value)}/>
                    </div>
                    <div className={styles.endereco}>
                        <input type="text" className={styles.cep} placeholder='CEP' id='cepInput' />
                        <input type="text" className={styles.rua} placeholder='Rua' id='ruaInput' onChange={(e) => setLogradouro(e.target.value)}/>
                        <input type="text" className={styles.bairro} placeholder='Bairro' id='bairroInput' onChange={(e) => setBairro(e.target.value)}/>
                        <input type="text" className={styles.cidade} placeholder='Cidade' id='cidadeInput' onChange={(e) => setCidade(e.target.value)}/>
                        <input type="text" className={styles.estado} placeholder='Estado' id='estadoInput' onChange={(e) => setUF(e.target.value)}/>
                    </div>
                    <div className={styles.doc}>
                        {/*<input type="text" className={styles.documentos} placeholder='RG:' />*/}
                        <input type="text" className={styles.documentos} placeholder='CPF:' id='cpfInput' onChange={(e) => setCPF(e.target.value)}/>
                    </div>
                    <div className={styles.final}>
                        <div className={styles.horarios}>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Segunda  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSegInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSegFim(e.target.value)}/>
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Terça inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setTerInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setTerFim(e.target.value)}/>
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Quarta  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuarInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuarFim(e.target.value)}/>
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Quinta  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuinInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuinFim(e.target.value)}/>
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Sexta  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSexInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSexFim(e.target.value)}/>
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Sábado  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSabInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSabFim(e.target.value)}/>
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Domingo  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setDomInicio(e.target.value)}/>
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setDomFim(e.target.value)}/>
                            </div>
                        </div>
                        <div className={styles.funcoes}>
                            <h5>Funções do funcionário</h5>
                            <select name="cars" className={styles.texto}>
                                <option value="corte">Serviços</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                            </select>
                            <button>Adicionar</button>
                            <div className={styles.atividades}></div>
                        </div>
                        <div className={styles.senhas}>
                            <input type="password" className={styles.senha} placeholder='Senha' id='senhaInput' onChange={(e) => setSenha(e.target.value)} />
                            <input type="password" className={styles.senha} placeholder='Confirmar Senha' id='confSenhaInput' onChange={(e) => setConfSenha(e.target.value)}/>
                        </div>
                    </div>
                    <button className={styles.cadfunc}>Cadastrar</button>
                </form>
            </div>

        </div>
    )


}

export default TelaCadFunc