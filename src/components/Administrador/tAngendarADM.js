import styles from './tAgendarADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfilF from '../../img/perfil.png';

//import Modal from '../modal/tCategoria';

import { useState, useEffect, useRef } from "react";

import agFetch from '../../axios/config.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";

//import { Link, useNavigate } from "react-router-dom";


const TelaAgendarADM = () => {
    document.title = "Agendar";

    const uid = "jMQqNo";

    const { token } = useParams();

    //dados do banco
    const [categorias, setCategorias] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [profissionais, setProfissionais] = useState([]);
    const [datas, setDatas] = useState([]);
    const [horarios, setHorarios] = useState([]);

    //dados que serao cadastrados
    const [categoria, setCategoria] = useState();
    const [servico, setServico] = useState();
    const [profissional, setProfissional] = useState();
    const [diaSemana, setDiaSemana] = useState();
    const [data, setData] = useState();
    const [horario, setHorario] = useState();
    const [nome, setNome] = useState();
    const [telefone, setTelefone] = useState();
    const [cpf, setCPF] = useState();
    const [preco, setPreco] = useState();

    const fCPF = useRef(null);
    const fTelefone = useRef(null);

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cpf = fCPF.current;
        const telefone = fTelefone.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (cpf) {
            cpf.addEventListener('wheel', bloquearRolagem);
        }

        if (telefone) {
            telefone.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (cpf) {
                cpf.removeEventListener('wheel', bloquearRolagem);
            }

            if (telefone) {
                telefone.removeEventListener('wheel', bloquearRolagem);
            }
        };
    }, []);

    //pegar os dados do banco
    async function PegaCategorias() {
        try {
            const catResponse = await agFetch.get(`/estabelecimento/todasCat/${uid}`);
            setCategorias(catResponse.data);
        } catch (error) {
            console.log(error);
        }
    }
    PegaCategorias();

    useEffect(() => {
        async function PegaServicos() {
            try {
                if (categoria) {
                    const srvResponse = await agFetch.get(`/servicos/pegarServCat?id=${categoria}`);
                    setServicos(srvResponse.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        PegaServicos();
    }, [categoria]);

    useEffect(() => {
        async function PegaProfissionais() {
            try {
                const profResponse = await agFetch.get(`/servicos/pegarFuncionarios?id=${servico}`);
                setProfissionais(profResponse.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (servico) {
            PegaProfissionais();
        }
    }, [servico]);

    useEffect(() => {
        async function PegarDiaSemana() {
            try {
                //pega o dia da semana
                const novaData = new Date(data);
                novaData.setDate(novaData.getDate() + 1);
                const ds = new Date(novaData).toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase();
                setDiaSemana(ds);            
            } catch (error) {
                console.log(error);
            }
        }

        if (data && profissional) {
            PegarDiaSemana();
        }
    }, [data, profissional]);





    useEffect(() => {
        async function PegaPreco() {
            try {
                const precResponse = await agFetch.get(`/servicos/acharUm/${servico}`);
                setPreco(precResponse.data.preco);
            } catch (error) {
                console.log(error);
            }
        }
        PegaPreco();
    }, [servico])

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(JSON.stringify({categoria, servico, profissional, data, horario, nome, telefone, cpf}));
        alert(diaSemana);
    }

    const navigate = useNavigate();

    const tprofissionais = () => {
        navigate(`/tPesqFunc/${token}/${uid}`);
    }
    const addFuncionarioNovaAba = (rotaFunc) => {
        window.open(rotaFunc, '_blank');
    }
    const addFuncionario = () => {
        const rotaFunc = `/tCadFunc/${token}/${uid}`; // Substitua pela rota desejada
        addFuncionarioNovaAba(rotaFunc);
    }
    const clientes = () => {
        navigate(`/tPesqCli/${token}/${uid}`);
    }
    const agendamentos = () => {
        navigate(`/tAgendamentosADM/${token}/${uid}`);
    }
    const tservicos = () => {
        navigate(`/tServADM/${token}/${uid}`);
    }
    const agendar = () =>{
        navigate(`/tAgendarADM/${token}/${uid}`)
    }
    const perfil = () =>{
        navigate(`/tMenuDBADM/${token}/${uid}`)
    }

    return (
        <div className={styles.fAgendar}>
            <input type='checkbox' id={styles["check"]} />
            {/* header  começo */}
            <div className={styles.body_header}>
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
                        <img src={perfilF} alt="perfil" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </div>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <p onClick={tprofissionais}>Profissionais</p>
                <p onClick={clientes}>Clientes</p>
                <p onClick={agendamentos}>Agendamentos</p>
                <p onClick={agendar}>Agendar</p>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <p onClick={tservicos}>Serviços</p>
                <p onClick={perfil}>Perfil</p>
                <a href="/">Sair</a>
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <main>
                <div className={styles.Container}>
                    <form onSubmit={handleSubmit}>
                        <h1>Agendar</h1>
                        <div className={styles.dados}>
                            <select name="categoria" className={styles.texto} required onChange={(e) => setCategoria(e.target.value)}>
                                <option value="cat">Categorias</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.nome}
                                    </option>
                                ))}
                            </select>
                            <select name="servico" className={styles.texto} required onChange={(e) => setServico(e.target.value)}>
                                <option value="serv">Serviços</option>
                                {categoria !== "cat" && servicos.map(servico => (
                                    <option key={servico.id} value={servico.id}>
                                        {servico.nome}
                                    </option>
                                ))}
                            </select>

                            <select name="profissional" className={styles.texto} required onChange={(e) => setProfissional(e.target.value)}>
                                <option value="profis">Profissionais</option>
                                {categoria !== "serv" && profissionais.map(profissional => (
                                    <option key={profissional.id} value={profissional.id}>
                                        {profissional.nome}
                                    </option>
                                ))}
                            </select>
                            <div className={styles.dois_campos}>
                                <input type="date" className={styles.texto} onChange={(e) => setData(e.target.value)} />
                                <select name="horario" className={styles.texto} onChange={(e) => setHorario(e.target.value)}>
                                    <option value="">Horários</option>
                                    {horarios.map((horario, index) => (
                                        <option key={index} value={`${horario.inicio} - ${horario.fim}`}>
                                            {horario.inicio} - {horario.fim}
                                        </option>
                                    ))}
                                </select>


                            </div>
                        </div>
                        <div className={styles.cliente}>
                            <input type="text" className={styles.texto} placeholder='Nome do Cliente' />
                            <input type="number"
                                ref={fTelefone}
                                placeholder="Telefone"
                                title="Digite o seu Telefone"
                                className={styles.texto}
                                maxLength="11"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} />
                            <input type="number"
                                ref={fCPF}
                                placeholder="CPF"
                                title="Digite o seu CPF"
                                className={styles.texto}
                                maxLength="11"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                required
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)} />
                        </div>
                        <div className={styles.finsh}>
                            <input type="text" className={styles.texto_demonstrativo} placeholder='Preço (R$)' value={preco} disabled />
                            <br />
                            <input type="submit" name="btnCadastro" value="Agendar" />
                        </div>
                    </form>
                </div>
            </main >
            {/*<Modal isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
        </div >
    )
}

export default TelaAgendarADM