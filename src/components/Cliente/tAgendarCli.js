import styles from './tAgendarCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import FotoCliente from './FotoPerfilCliente/fotoCliente';

import React, { useState, useEffect } from "react";

import agFetch from '../../axios/config';

import { useNavigate, useParams } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ptBR from 'date-fns/locale/pt-BR';

import { decodeToken } from 'react-jwt';

const TelaAgendarCliente = () => {

    document.title = "Agendar Cliente";

    const token = useParams().token;

    const cvToken = decodeToken(token);

    const userID = cvToken.id;

    const uid = useParams().uid;

    const voltaMenu = "/tMenuCli/" + token + "/" + uid;

    //nome da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState();

    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmpresa(empResponse.data.nome);
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    const navigate = useNavigate();

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
    const [preco, setPreco] = useState();

    // Lógica para habilitar o select de horários
    const isDataSelected = Boolean(data);
    const isProfissionalSelected = profissional !== "profis";
    const isHorarioSelectDisabled = !isDataSelected || !isProfissionalSelected;

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

    // Obtém a data atual
    const today = new Date();

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return '';

        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        function PegarDiaSemana() {
            try {
                // pega o dia da semana
                if (data) {
                    const novaData = new Date(data);
                    novaData.setDate(novaData.getDate() + 1);
                    const ds = new Date(novaData).toLocaleDateString('pt-BR', {
                        weekday: 'long'
                    }).toLowerCase();

                    // Substituir os valores específicos
                    let diaTexto = ds;
                    if (ds === 'segunda-feira') {
                        diaTexto = 'segunda';
                    } else if (ds === 'terça-feira') {
                        diaTexto = 'terça';
                    } else if (ds === 'quarta-feira') {
                        diaTexto = 'quarta';
                    } else if (ds === 'quinta-feira') {
                        diaTexto = 'quinta';
                    } else if (ds === 'sexta-feira') {
                        diaTexto = 'sexta';
                    }

                    setDiaSemana(diaTexto);
                }
            } catch (error) {
                console.log(error);
            }
        }

        PegarDiaSemana();
    }, [data]);


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
    }, [profissionais, diaSemana]);


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

    const realizarAgendamento = async (dataAg, servico, profissional) => {
        const txtData = {
            UIDEstabelecimento: uid,
            data_inicio: dataAg,
            clienteId: userID,
            servicoId: servico,
            funcionarioId: profissional
        }
        console.log(txtData);
        try {
            const agResponse = await agFetch.post('/agendamento/criar', txtData);
            if (agResponse.status >= 200 && agResponse.status <= 299) {
                alert("Agendamento Realizado com Sucesso!");
                navigate(`${voltaMenu}`);
                //navigate(`/tPesqFunc/${token}/${uid}`);
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

        //alert(JSON.stringify({dataAg, servicoId, profId}));

        if (horario === undefined || data === undefined) {
            alert("Preencha todos os campos!");
        }
        else {
            realizarAgendamento(dataAg, servicoId, profId);
        }
    }

    return (
        <div className={styles.fAgendarCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><a href={voltaMenu}><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
                <div className={styles.logoMenuCli}><p>{nomeEmpresa}</p></div>
                <FotoCliente />
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id={styles["conteudo"]}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.tituloAgendar}>
                        <p>Agendar</p>
                    </div>
                    <br></br>
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
                            {/*<input type="date" className={styles.texto} value={data} onChange={(e) => setData(e.target.value)} />*/}
                            <DatePicker
                                id={styles["customDatePicker"]}
                                className={styles.texto}
                                selected={data ? new Date(data + 'T00:00:00') : null}
                                onChange={(date) => setData(date.toISOString().split('T')[0])}
                                dateFormat="yyyy-MM-dd"
                                value={formatDateForDisplay(data)}
                                placeholderText="dd/mm/aaaa"
                                minDate={today}
                                locale={ptBR}
                                disabled={profissional === undefined}
                            />
                            <select name="horario" className={styles.texto} onChange={(e) => setHorario(e.target.value)} disabled={isHorarioSelectDisabled}>
                                <option value="hors">Horários</option>
                                {data !== "" && horarios.map(vHorario => (
                                    <option value={vHorario}>
                                        {vHorario}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.finsh}>
                        <div className={styles.esq}>
                            <input type="text" className={styles.texto_demonstrativo} placeholder='Preço (R$)' value={preco} disabled />
                        </div>
                        <div className={styles.dir}>
                            <input type="submit" name="btnCadastro" value="Agendar" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TelaAgendarCliente