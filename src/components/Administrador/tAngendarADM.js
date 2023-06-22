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

import FotoAdm from './FotoPerfilAdm/fotoAdm';


const TelaAgendarADM = () => {
    document.title = "Agendar";    

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5AZXhhbXBsZS5jb20iLCJpZCI6Miwicm9sZSI6IlByb3AiLCJpYXQiOjE2ODQ3MDg0NTcsImV4cCI6OTMzMTIwMDAwMDE2ODQ3MDAwMDB9.1C8kf7GvIDT1GbbpMPScTcwy19CvgHOUkGtxuXFwV9I";

    //const uid = "jMQqNo";
    
    const { token } = useParams();

    const { uid } = useParams();

    //dados do banco
    const [categorias, setCategorias] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [profissionais, setProfissionais] = useState([]);
    const [horarios, setHorarios] = useState([]);

    //dados que serao cadastrados
    const [categoria, setCategoria] = useState();
    const [servico, setServico] = useState();
    const [profissional, setProfissional] = useState();
    const [diaSemana, setDiaSemana] = useState();
    const [data, setData] = useState();
    const [horario, setHorario] = useState();
    const [agendamentos, setAgendamentos] = useState([]);
    const [horarioInicioEst, setHorarioInicioEst] = useState([]);
    const [horarioFimEst, setHorarioFimEst] = useState([]);
    const [inicExp, setInicExp] = useState();
    const [fimExp, setFimExp] = useState();
    const [nomeEmp, setNomeEmp] = useState();
    const [nome, setNome] = useState();
    const [telefone, setTelefone] = useState();
    const [cpf, setCPF] = useState();
    const [preco, setPreco] = useState();

    //nome da empresa
    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmp(empResponse.data.nome);
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    //pegar os dados do banco
    useEffect(() => {
        async function fetchCategorias() {
            try {
                const catResponse = await agFetch.get(`/estabelecimento/todasCat/${uid}`);
                setCategorias(catResponse.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategorias();
    }, [uid]);

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

    const [dataAmericana, setDataAmericana] = useState('');
    console.log(dataAmericana);
    const [dtfim, setDataFim] = useState('');

    useEffect(() => {
        const converterData = () => {
            if (data) {
                const partes = data.split('/');
                const dataConvertida = new Date(partes[2] + '-' + partes[1] + '-' + partes[0]);
                const obj = new Date(dataConvertida)
                obj.setDate(obj.getDate() + 1);
                setDataAmericana(dataConvertida);
                const dataFim = obj.toLocaleDateString();
                const dtFinal = dataFim.replace(/\//g, '-');
                setDataFim(dtFinal);
            } else {
                setDataAmericana('');
            }
        };

        converterData();
    }, [data]);


    useEffect(() => {
        async function PegaAgendamentos() {
            //const funcID = 5;

            try {
                const datas = {
                    data_inicio: data,
                    data_fim: "2050-06-24"
                }
                if (data) {
                    const agendResponse = await agFetch.post(`/funcionario/todoAgendamentos?idFunc=${profissional}`, datas);
                    setAgendamentos(agendResponse.data);
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }

        PegaAgendamentos();
    }, [data, dtfim]);


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

    if (diaSemana === "segunda-feira")
        setDiaSemana("segunda");
    else if (diaSemana === "terça-feira")
        setDiaSemana("terça");
    else if (diaSemana === "quarta-feira")
        setDiaSemana("quarta");
    else if (diaSemana === "quinta-feira")
        setDiaSemana("quinta");
    else if (diaSemana === "sexta-feira")
        setDiaSemana("sexta");

    //horario do estabelecimento        
    useEffect(() => {
        async function PegarHorInicEsta() {
            const estabelecimentoResponse = await agFetch.get(`/estabelecimento/${uid}`);
            const horarios = estabelecimentoResponse.data.horarios;

            // Encontra o horário de início para o dia da semana especificado
            const horarioInicio = horarios.find(horario => horario.diaSemana === diaSemana)?.inicio;

            setHorarioInicioEst(horarioInicio);
        }
        PegarHorInicEsta();


        async function PegarHorFimEsta() {
            const estabelecimentoResponse = await agFetch.get(`/estabelecimento/${uid}`);
            const horarios = estabelecimentoResponse.data.horarios;

            // Encontra o horário de início para o dia da semana especificado
            const horarioFim = horarios.find(horario => horario.diaSemana === diaSemana)?.fim;

            setHorarioFimEst(horarioFim);
        }
        PegarHorFimEsta();
    }, [diaSemana]);



    //horario do expediente do funcionario        
    // Importe as bibliotecas necessárias e defina as constantes necessárias

    useEffect(() => {
        async function PegarHorarioExpediente() {
            //const profid = 8;
            const funcionarioResponse = await agFetch.get(`/funcionario/pegarPorId?id=${profissional}`);

            const expedientes = funcionarioResponse.data.expedientes;

            const expedienteEncontrado = expedientes.find(expediente => expediente.diaSemana === diaSemana);

            const inicioExpediente = expedienteEncontrado.inicio;

            const fimExpediente = expedienteEncontrado.fim;

            //alert(inicioExpediente);
            //alert(fimExpediente);

            setInicExp(inicioExpediente);
            setFimExp(fimExpediente);
        }

        PegarHorarioExpediente();
    }, [diaSemana]);


    //logica do horario
    const intervalo = 30;

    useEffect(() => {
        var horariosDisponiveis;
        console.log(horariosDisponiveis);
        function criarArrayHorarios(inicio, fim, intervalominutos) {
            const horarioInicio = new Date().setHours(
                Number(inicio.split(":")[0]),
                Number(inicio.split(":")[1]),
                0
            );
            const horarioFim = new Date().setHours(
                Number(fim.split(":")[0]),
                Number(fim.split(":")[1]),
                0
            );

            const horarios = [];
            let horarioAtual = horarioInicio;

            while (horarioAtual < horarioFim) {
                horarios.push(
                    new Date(horarioAtual).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                );
                horarioAtual += intervalominutos * 60 * 1000; // 30 minutos em milissegundos
            }

            return horarios;
        }

        //---------------
        function removerHorariosNaoTrabalhados(
            horarios,
            inicioExpediente,
            fimExpediente
        ) {
            // Converte os horários de início e término do expediente para minutos
            const inicio = converterParaMinutos(inicioExpediente);
            const fim = converterParaMinutos(fimExpediente);

            // Filtra os horários que estão dentro do expediente
            const horariosTrabalhados = horarios.filter((horario) => {
                const minutos = converterParaMinutos(horario);
                return minutos >= inicio && minutos <= fim;
            });
            horariosTrabalhados.splice(-1, 1);
            return horariosTrabalhados;
        }

        // Função auxiliar para converter um horário no formato HH:MM para minutos
        function converterParaMinutos(horario) {
            const [hora, minuto] = horario.split(":");
            return parseInt(hora) * 60 + parseInt(minuto);
        }

        function removerHorariosAgendados(horariosDisponiveis, agendamentos) {
            for (const agendamento of agendamentos) {
                const horarioInicioAgendado =
                    new Date(agendamento.data_inicio).getHours() +
                    ":" +
                    new Date(agendamento.data_inicio).getMinutes();
                const horarioFimAgendado =
                    new Date(agendamento.data_fim).getHours() +
                    ":" +
                    new Date(agendamento.data_fim).getMinutes();

                const indexInicio = horariosDisponiveis.indexOf(horarioInicioAgendado);
                const indexFim = horariosDisponiveis.indexOf(horarioFimAgendado);

                if (indexInicio !== -1 && indexFim !== -1) {
                    horariosDisponiveis.splice(indexInicio, indexFim - indexInicio + 1);
                }
            }

            return horariosDisponiveis;
        }
        //usa todas as funcoes em sequencia
        function pegarTudo(
            stabeInicio,
            stabeFim,
            intervalo,
            expIncioFunc,
            expFimFunc,
            agendaFunc
        ) {
            const horariosEstabe = criarArrayHorarios(stabeInicio, stabeFim, intervalo);
            console.log("horariosEstabe " + horariosEstabe);
            const horariosTrabalhados = removerHorariosNaoTrabalhados(
                horariosEstabe,
                expIncioFunc,
                expFimFunc
            );
            console.log("horariosTrabalhados " + horariosTrabalhados);
            return (horariosDisponiveis = removerHorariosAgendados(
                horariosTrabalhados,
                agendaFunc
            ));
        }

        //exemplo
        /*const horariosDisp = pegarTudo(
          "08:00",
          "17:00",
          10,
          "10:00",
          "15:00",
          agendamentos
        );*/

        const estIni = horarioInicioEst ? horarioInicioEst.toString() : '';
        const estFim = horarioFimEst ? horarioFimEst.toString() : '';
        const expIni = inicExp ? inicExp.toString() : '';
        const expFim = fimExp ? fimExp.toString() : '';

        const horariosDisp = pegarTudo(estIni, estFim, intervalo, expIni, expFim, agendamentos);

        console.log(horariosDisp);

        setHorarios(horariosDisp);
    }, [horarioInicioEst, horarioFimEst, intervalo, inicExp, fimExp, agendamentos]);


    useEffect(() => {
        async function PegaPreco() {
            try {
                const precResponse = await agFetch.get(`/servicos/acharUm/${servico}`);
                const precoEmReal = precResponse.data.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  });
                  setPreco(precoEmReal);
            } catch (error) {
                console.log(error);
            }
        }
        PegaPreco();
    }, [servico])

    const realizarAgendamento = async (dataAg, servico, profissional, nome, telefone, cpf) => {
        const txtData = {
            UIDEstabelecimento: uid,
            data_inicio: dataAg,
            servicoId: servico,
            funcionarioId: profissional,
            nome: nome,
            telefone: telefone,
            cpf: cpf
        }
        console.log(txtData);
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        try {
            const agResponse = await agFetch.post('/agendamento/criarAdm', txtData, {headers});
            if (agResponse.status >= 200 && agResponse.status <= 299) {
                alert("Agendamento Realizado com Sucesso!");
            }
        } catch (error) {
            console.log();
            if (error.status === 400) {
                alert("Dados Incorretos!");
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(JSON.stringify({categoria, servico, profissional, data, horario, nome, telefone, cpf}));
        //alert(diaSemana);
        //alert(horarioInicioEst);
        //alert(horarioFimEst);
        //alert(inicExp);
        //alert(fimExp);
        //alert(agendamentos);
        //alert(horarios);
        //alert(JSON.stringify(agendamentos));
        //alert(data);
        //alert(dtfim);
        //alert(JSON.stringify({ horarioInicioEst, horarioFimEst, intervalo, inicExp, fimExp, agendamentos }));
        //alert(horarios);

        //logica do envio
        const dataAg = data + "T" + horario + ":00Z";

        const servicoId = parseInt(servico);

        const profId = parseInt(profissional);

        //alert(JSON.stringify({dataAg, servicoId, profId, nome, telefone, cpf}));

        realizarAgendamento(dataAg, servicoId, profId, nome, telefone, cpf);


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
                    <h3>{nomeEmp}</h3>
                </div>
                <FotoAdm />              
            </div>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <Link to={`/tPesqFunc/${token}/${uid}`}>Profissionais</Link>
                <Link to={`/tPesqCli/${token}/${uid}`}>Clientes</Link>
                <Link to={`/tAgendamentosADM/${token}/${uid}`}>Agendamentos</Link>
                <Link to={`/tAgendarADM/${token}/${uid}`} style={{ color: '#7c807d' }}>Agendar</Link>
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
                                <input type="date" className={styles.texto} value={data} onChange={(e) => setData(e.target.value)} />
                                <select name="horario" className={styles.texto} onChange={(e) => setHorario(e.target.value)}>
                                    <option value="hors">Horários</option>
                                    {data !== "" && horarios.map(vHorario => (
                                        <option value={vHorario}>
                                            {vHorario}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.cliente}>
                            <input type="text" className={styles.texto} placeholder='Nome do Cliente' onChange={(e) => setNome(e.target.value)} />
                            <input type="text"
                                placeholder="Telefone:"
                                title="Digite o seu Telefone"
                                name="tel"
                                id="tel"
                                className={styles.texto}
                                maxLength="15"
                                onKeyPress={(event) => {
                                    const inputValue = event.target.value + event.key;
                                    const isValidKey = /\d/.test(event.key);
                                    const isMaxLengthReached = inputValue.length >= event.target.maxLength;

                                    if (!isValidKey || isMaxLengthReached) {
                                        event.preventDefault();
                                    }

                                    if (inputValue.length === 1 && isValidKey) {
                                        event.target.value = `(${inputValue}`;
                                        event.preventDefault();
                                    } else if (inputValue.length === 4 && isValidKey) {
                                        event.target.value = `${event.target.value}) ${inputValue.substr(1)}`;
                                        event.preventDefault();
                                    } else if (inputValue.length === 11 && isValidKey) {
                                        const areaCode = inputValue.substr(1, 2);
                                        const firstPart = inputValue.substr(5, 4);
                                        const secondPart = inputValue.substr(10, 4);
                                        event.target.value = `(${areaCode}) ${firstPart}-${secondPart}`;
                                        event.preventDefault();
                                    }
                                }}
                                onChange={(e) => setTelefone(e.target.value)} />
                            <input type="text"
                                placeholder="*CPF:"
                                title="Digite o seu CPF"
                                name="cpf" id="cpf"
                                className={styles.texto}
                                maxLength="14"
                                onKeyPress={(event) => {
                                    const allowedChars = /[0-9]/;
                                    const inputValue = event.target.value;
                                    const key = event.key;

                                    if (!allowedChars.test(key) || inputValue.length >= 14 || key === '.' || key === '-') {
                                        event.preventDefault();
                                    } else if (inputValue.length === 3 || inputValue.length === 7) {
                                        event.target.value = inputValue + ".";
                                    } else if (inputValue.length === 11) {
                                        event.target.value = inputValue + "-";
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