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
    }, []);

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
            try {
                const datas = {
                    data_inicio: data,
                    data_fim: "2050-06-24"
                }
                if (data) {
                    const agendResponse = await agFetch.post('/funcionario/todoAgendamentos?idFunc=5', datas);
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
            const profid = 8;
            const funcionarioResponse = await agFetch.get(`/funcionario/pegarPorId?id=${profid}`);

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
                setPreco(precResponse.data.preco);
            } catch (error) {
                console.log(error);
            }
        }
        PegaPreco();
    }, [servico])

    const realizarAgendamento = async (servico, profissional, data, horario, nome, telefone, cpf, preco) => {
        try {
            const agResponse = await agFetch.post('/agendamento/criarAdm', {
                UIDEstabelecimento: uid,
                data_inicio: data,
                servicoId: servico,
                funcionarioId: profissional,
                nome: nome,
                telefone: telefone,
                cpf: cpf
            });
            if (agResponse.status >= 200 && agResponse.status <= 299) {
                alert("Agendamento Realizado com Sucesso!");
            } else if (agResponse.status === 400) {
                alert("Dados Incorretos!");
            }
        } catch (error) {
            console.log(error);
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

<<<<<<< HEAD
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
    const agendar = () => {
        navigate(`/tAgendarADM/${token}/${uid}`)
    }
    const perfil = () => {
        navigate(`/tMenuDBADM/${token}/${uid}`)
=======
        //logica do envio
        realizarAgendamento(servico, profissional, data, horario, nome, telefone, cpf, preco);
>>>>>>> 42b2bff308a3f47d8e6d6e9d99cb981f7189cb30
    }

    const hor = ['08:00', '8:30', '09:30', '10:00', '10:30', '11:00', '11:30']

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
                <a href = "/">Profissionais</a>
                <a href = "/">Clientes</a>
                <a href = "/">Agendamentos</a>
                <a href = "/">Agendar</a>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <a href = "/">Serviços</a>
                <a href = "/">Perfil</a>
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
                                <input type="date" className={styles.texto} value={data} onChange={(e) => setData(e.target.value)} />
                                <select name="horario" className={styles.texto} onChange={(e) => setHorario(e.target.value)}>
<<<<<<< HEAD
                                    <option value="">Horários</option>
                                    {/*{horarios.map((horario, index) => (
                                        <option key={index} value={`${horario.inicio} - ${horario.fim}`}>
                                            {horario.inicio} - {horario.fim}
                                    </option>))}*/}

                                    
                                        
                                        
  <option value="">08:00</option>
  <option value="08:10">08:10</option>
  <option value="08:20">08:20</option>
  <option value="08:30">08:30</option>
  <option value="08:40">08:40</option>
  <option value="08:50">08:50</option>
  <option value="09:00">09:00</option>
  <option value="09:10">09:10</option>
  <option value="09:20">09:20</option>
  <option value="09:30">09:30</option>
  <option value="09:40">09:40</option>
  <option value="09:50">09:50</option>
  <option value="10:00">10:00</option>
  <option value="10:10">10:10</option>
  <option value="10:20">10:20</option>
  <option value="10:30">10:30</option>
  <option value="10:40">10:40</option>
  <option value="10:50">10:50</option>
  <option value="11:00">11:00</option>
  <option value="11:10">11:10</option>
  <option value="11:20">11:20</option>
  <option value="11:30">11:30</option>
  <option value="11:40">11:40</option>
  <option value="11:50">11:50</option>
  <option value="12:00">12:00</option>
  <option value="12:10">12:10</option>
  <option value="12:20">12:20</option>
  <option value="12:30">12:30</option>
  <option value="12:40">12:40</option>
  <option value="12:50">12:50</option>
  <option value="13:00">13:00</option>
  <option value="13:10">13:10</option>
  <option value="13:20">13:20</option>
  <option value="13:30">13:30</option>
  <option value="13:40">13:40</option>
  <option value="13:50">13:50</option>
  <option value="14:00">14:00</option>
  <option value="14:10">14:10</option>
  <option value="14:20">14:20</option>
  <option value="14:30">14:30</option>
  <option value="14:40">14:40</option>
  <option value="14:50">14:50</option>
  <option value="15:00">15:00</option>
  <option value="15:10">15:10</option>
  <option value="15:20">15:20</option>
  <option value="15:30">15:30</option>
  <option value="15:40">15:40</option>
  <option value="15:50">15:50</option>
  <option value="16:00">16:00</option>
  <option value="16:10">16:10</option>
  <option value="16:20">16:20</option>
  <option value="16:30">16:30</option>
  <option value="16:40">16:40</option>
  <option value="16:50">16:50</option>
  <option value="17:00">17:00</option>



                                    {/* <option value="">-12:00</option>
                                    <option value="">15:00</option>
                                    <option value="">16:00</option>
                                     */}
=======
                                    <option value="hors">Horários</option>
                                    {data !== "" && horarios.map(vHorario => (
                                        <option value={vHorario}>
                                            {vHorario}
                                        </option>
                                    ))}
>>>>>>> 42b2bff308a3f47d8e6d6e9d99cb981f7189cb30
                                </select>
                            </div>
                        </div>
                        <div className={styles.cliente}>
                            <input type="text" className={styles.texto} placeholder='Nome do Cliente' onChange={(e) => setNome(e.target.value)} />
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