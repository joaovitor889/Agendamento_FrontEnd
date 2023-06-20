import styles from './tMenuEmpr.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

//import Perfil from '../../icones/perfilCliente.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect, useRef } from "react";

import { useForm } from "react-hook-form";

import agFetch from '../../axios/config.js';

import { Link, useParams } from 'react-router-dom';

import tAzul from '../../temas/tema01.png';

import tVermelho from '../../temas/tema02.png';

import tVerde from '../../temas/tema03.png';

import tRoza from '../../temas/tema04.png';

import tAmarelo from '../../temas/tema05.png';

//import { Link, useNavigate } from "react-router-dom";

import FotoHor from './FotoPerfilAdm/fotoAdmHor';
import FotoLat from './FotoPerfilAdm/fotoAdmLat';
import FotoMen from './FotoPerfilAdm/fotoAdmMen';

const TelaMenuEmpreendimento = () => {
    document.title = "Empreendimento";


    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5AZXhhbXBsZS5jb20iLCJpZCI6Miwicm9sZSI6IlByb3AiLCJpYXQiOjE2ODM4NDQ0NjcsImV4cCI6OTMzMTIwMDAwMDE2ODM4NTAwMDB9.Zr0_085Qp3mtxiapPztbt_YtzSUyiie7rjnB_ubEAm4";

    const { token } = useParams();

    const { uid } = useParams();

    //alert("Token: " + token);
    //alert("uid: " + uid);

    //Programação do Menu de Hamburger
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    //Campos
    const fcep = useRef(null);
    const fnum = useRef(null);

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cep = fcep.current;
        const num = fnum.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (cep) {
            cep.addEventListener('wheel', bloquearRolagem);
        }

        if (num) {
            num.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (cep) {
                cep.removeEventListener('wheel', bloquearRolagem);
            }
            if (num) {
                num.removeEventListener('wheel', bloquearRolagem);
            }
        };
    });

    //nome da empresa
    const [nomeEmp, setNomeEmp] = useState();

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

    //dados do formulario
    const [nomeEst, setNomeEst] = useState("");

    //API do CEP
    const { register, setValue } = useForm();

    //Campos da API CEP
    const [jscep, setCEP] = useState("");
    const [jsrua, setRua] = useState("");
    const [jsnum, setNum] = useState("");
    const [jscomp, setComp] = useState("");
    const [jsbairro, setBairro] = useState("");
    const [jscidade, setCidade] = useState("");
    const [jseuf, setUF] = useState("");

    //horario de funcionamento
    const [segInic, setSegInic] = useState("");
    const [terInic, setTerInic] = useState("");
    const [quaInic, setQuaInic] = useState("");
    const [quiInic, setQuiInic] = useState("");
    const [sexInic, setSexInic] = useState("");
    const [sabInic, setSabInic] = useState("");
    const [domInic, setDomInic] = useState("");

    const [segFim, setSegFim] = useState("");
    const [terFim, setTerFim] = useState("");
    const [quaFim, setQuaFim] = useState("");
    const [quiFim, setQuiFim] = useState("");
    const [sexFim, setSexFim] = useState("");
    const [sabFim, setSabFim] = useState("");
    const [domFim, setDomFim] = useState("");

    const [ftema, setTema] = useState("");

    const ftelefone = "15 996633179";

    //logica do upload da foto
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    //pegar os dados
    useEffect(() => {
        async function PegaEstabelecimento() {
            try {
                const estResponse = await agFetch.get(`/estabelecimento/${uid}`);
                const nomEst = estResponse.data.nome;
                const cepEst = estResponse.data.CEP;
                const ufEst = estResponse.data.uf;
                const cidadeEst = estResponse.data.cidade;
                const bairroEst = estResponse.data.bairro;
                const ruaEst = estResponse.data.logradouro;
                const numEst = estResponse.data.numero;
                const compEst = estResponse.data.complemento;
                const temEst = estResponse.data.tema;
                const imgEst = estResponse.data.imageUrl;

                if (imgEst !== null) {
                    setPreview(imgEst);
                }

                setNomeEst(nomEst);
                setCEP(cepEst);
                setUF(ufEst);
                setCidade(cidadeEst);
                setBairro(bairroEst);
                setRua(ruaEst);
                setNum(numEst);
                setComp(compEst);
                setTema(temEst);
                //setSelectedFile(imgEst);

                //horarios
                const estHorsResponse = await agFetch.get(`/estabelecimento/${uid}`);
                const horarios = estHorsResponse.data.horarios;

                const horarioSegunda = horarios.find(horario => horario.diaSemana === 'segunda');
                if (horarioSegunda) {
                    const horInicSeg = horarioSegunda.inicio;
                    const horFimSeg = horarioSegunda.fim;
                    setSegInic(horInicSeg);
                    setSegFim(horFimSeg);
                }

                const horarioTerca = horarios.find(horario => horario.diaSemana === 'terça');
                if (horarioTerca) {
                    const horInicTer = horarioTerca.inicio;
                    const horFimTer = horarioTerca.fim;
                    setTerInic(horInicTer);
                    setTerFim(horFimTer);
                }

                const horarioQuarta = horarios.find(horario => horario.diaSemana === 'quarta');
                if (horarioQuarta) {
                    const horInicQua = horarioQuarta.inicio;
                    const horFimQua = horarioQuarta.fim;
                    setQuaInic(horInicQua);
                    setQuaFim(horFimQua);
                }

                const horarioQuinta = horarios.find(horario => horario.diaSemana === 'quinta');
                if (horarioQuinta) {
                    const horInicQui = horarioQuinta.inicio;
                    const horFimQui = horarioQuinta.fim;
                    setQuiInic(horInicQui);
                    setQuiFim(horFimQui);
                }

                const horarioSexta = horarios.find(horario => horario.diaSemana === 'sexta');
                if (horarioSexta) {
                    const horInicSex = horarioSexta.inicio;
                    const horFimSex = horarioSexta.fim;
                    setSexInic(horInicSex);
                    setSexFim(horFimSex);
                }

                const horarioSabado = horarios.find(horario => horario.diaSemana === 'sábado');
                if (horarioSabado) {
                    const horInicSab = horarioSabado.inicio;
                    const horFimSab = horarioSexta.fim;
                    setSabInic(horInicSab);
                    setSabFim(horFimSab);
                }

                const horarioDomingo = horarios.find(horario => horario.diaSemana === 'domingo');
                if (horarioDomingo) {
                    const horInicDom = horarioDomingo.inicio;
                    const horFimDom = horarioDomingo.fim;
                    setDomInic(horInicDom);
                    setDomFim(horFimDom);
                }
            } catch (error) {
                console.log(error);
            }
        }

        PegaEstabelecimento();
    }, [uid])

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objUrl = URL.createObjectURL(selectedFile);
        setPreview(objUrl);

        //libera memoria quando o componente nao e criado
        return () => URL.revokeObjectURL(objUrl);
    }, [selectedFile])

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.lenght === 0) {
            setSelectedFile(undefined);
            return;
        }

        var myPicture = document.getElementById('fotoDefCli');
        myPicture.className = styles.desImgDef;

        setSelectedFile(e.target.files[0]);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        //console.log(cep);
        console.log(jsrua, jsbairro, jscidade, jseuf);

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                //console.log(JSON.stringify(data));                       
                setValue("rua", data.logradouro);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setValue("uf", data.uf);

                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUF(data.uf);
            });
    }

    //salvar o empreendimento
    const cadEstabelecimento = async (selectedFile, jscep, nomeEst, ftelefone, segInic, terInic, quaInic, quiInic, sexInic, sabInic, domInic, segFim, terFim, quaFim, quiFim, sexFim, sabFim, domFim, ftema, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf) => {
        //alert(JSON.stringify({ selectedFile, jscep, nomeEst, ftelefone, segInic, terInic, quaInic, quiInic, sexInic, sabInic, domInic, segFim, terFim, quaFim, quiFim, sexFim, sabFim, domFim, ftema, jscep, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf }));

        //dados do Estabelecimento
        const textData = {
            nome: nomeEst,
            telefone: ftelefone,
            uf: jseuf,
            cidade: jscidade,
            bairro: jsbairro,
            logradouro: jsrua,
            numero: jsnum,
            complemento: jscomp,
            tema: ftema,
            CEP: jscep,
            horarios: [
                {
                    diaSemana: "segunda",
                    inicio: segInic,
                    fim: segFim
                },
                {
                    diaSemana: "terça",
                    inicio: terInic,
                    fim: terFim
                },
                {
                    diaSemana: "quarta",
                    inicio: quaInic,
                    fim: quaFim
                },
                {
                    diaSemana: "quinta",
                    inicio: quiInic,
                    fim: quiFim
                },
                {
                    diaSemana: "sexta",
                    inicio: sexInic,
                    fim: sexFim
                },
                {
                    diaSemana: "sábado",
                    inicio: sabInic,
                    fim: sabFim
                },
                {
                    diaSemana: "domingo",
                    inicio: domInic,
                    fim: domFim
                }
            ],
        };

        if ((segInic !== "" && segFim === "") ||
            (terInic !== "" && terFim === "") ||
            (quaInic !== "" && quaFim === "") ||
            (quiInic !== "" && quiFim === "") ||
            (sexInic !== "" && sexFim === "") ||
            (sabInic !== "" && sabFim === "") ||
            (domInic !== "" && domFim === "") ||

            (segInic === "" && segFim !== "") ||
            (terInic === "" && terFim !== "") ||
            (quaInic === "" && quaFim !== "") ||
            (quiInic === "" && quiFim !== "") ||
            (sexInic === "" && sexFim !== "") ||
            (sabInic === "" && sabFim !== "") ||
            (domInic === "" && domFim !== "")) {
            alert("Horários incorretos! Preencha todos os campos corretamente.");
            return;
        }

        alert(JSON.stringify(textData));

        try {
            //alert(token);

            //Autorizar o envio dos dados
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Enviar os dados de texto
            const responseText = await agFetch.patch('/estabelecimento/update', textData, { headers });

            console.log('Resposta de texto:', responseText.data);

            if (responseText.status >= 200 && responseText.status <= 299) {
                alert("Estabelecimento Cadastrado!");

                const ultUid = responseText.data.uid;

                //alert(ultUid);

                //logica da foto
                if (selectedFile !== null) {
                    alert("Foto Preenchida!!!");
                    const formData = new FormData();
                    formData.append('logo', selectedFile);
                    try {
                        const multipart = {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${token}`
                            }
                        };
                        const response = await agFetch.post(`/estabelecimento/image/${ultUid}`, formData, multipart);
                        if (response.status >= 200 && response.status <= 299)
                            console.log("Foto Enviada!");
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

        } catch (error) {
            console.error('Erro ao enviar requisições:', error);
            alert(error);
            //alert("Dados Inválidos!");
        }
    }

    const salvarEmpreendimento = (e) => {
        e.preventDefault();

        //alert(JSON.stringify({selectedFile, jscep, nomeEst, ftelefone, segInic, terInic, quaInic, quiInic, sexInic, sabInic, domInic, segFim, terFim, quaFim, quiFim, sexFim, sabFim, domFim, ftema, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf}));

        cadEstabelecimento(selectedFile, jscep, nomeEst, ftelefone, segInic, terInic, quaInic, quiInic, sexInic, sabInic, domInic, segFim, terFim, quaFim, quiFim, sexFim, sabFim, domFim, ftema, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf);
    }

    return (
        <div className={styles.fEmpr}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
                        <div id={styles["textoLL"]}>
                            <Link to={`/tMenuDBADM/${token}/${uid}`}>
                                <li><p>Dados Básicos</p></li>
                            </Link>

                            {/*<Link to='/tMenuEnderecoADM' target = "_blank" rel="noreferrer">*/}
                            <Link to={`/tMenuEnderecoADM/${token}/${uid}`}>
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to={`/tMenuFotoADM/${token}/${uid}`}>
                                <li><p>Foto</p></li>
                            </Link>

                            <Link to={`/tEmpreendimento/${token}/${uid}`}>
                                <li style={{ color: '#000' }}><p>Empreendimento</p></li>
                            </Link>
                            <Link to={`/tNovoEmpreendimento/${token}/${uid}`}>
                                <li><p>New Empreendimento</p></li>
                            </Link>
                        </div>
                    </ul>

                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Logo</center></h2>
                <form id={styles["formFoto"]} onSubmit={salvarEmpreendimento}>
                    <center><img id="fotoDefCli" className={styles.fotDef} src={FotoPerfil} alt="Foto Perfil" /></center>
                    <center>{selectedFile && <img src={preview} alt="Foto Perfil" />}</center>
                    <div className={styles.legFoto}><p>Adicionar / alterar imagem</p></div>
                    <center><input type="file" id={styles["fotoCli"]} name="fotoCli" onChange={onSelectFile} accept="image/jpeg, image/jpg, image/png" /*required*/ /></center>
                    <center><input type="text" placeholder='Nome:' name="nome" value={nomeEst} onChange={(e) => setNomeEst(e.target.value)} required /></center>
                    <div id={styles["ptHor"]}>
                        <center>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p id={styles["horDeFunc"]}>
                                Horário de funcionamento
                            </p>
                        </center>
                        <div id={styles["horarios"]}>
                            <br></br>
                            <table>
                                <tr>
                                    <td><p>Segunda</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={segInic} onChange={(e) => setSegInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={segFim} onChange={(e) => setSegFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Terça</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={terInic} onChange={(e) => setTerInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={terFim} onChange={(e) => setTerFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Quarta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={quaInic} onChange={(e) => setQuaInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={quaFim} onChange={(e) => setQuaFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Quinta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={quiInic} onChange={(e) => setQuiInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={quiFim} onChange={(e) => setQuiFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Sexta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={sexInic} onChange={(e) => setSexInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={sexFim} onChange={(e) => setSexFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Sábado</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={sabInic} onChange={(e) => setSabInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={sabFim} onChange={(e) => setSabFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Domingo</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" value={domInic} onChange={(e) => setDomInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" value={domFim} onChange={(e) => setDomFim(e.target.value)} /></td>
                                </tr>
                            </table>
                            <br></br>
                        </div>
                    </div>
                    <p id={styles["legTema"]}>Escolha o tema de fundo da sua empresa</p><br></br>
                    <div id={styles["temas"]}>
                        {/*<button>Azul</button>
                        <button>Vermelho</button>
                        <button>Verde</button>
                        <button>Roza</button>
                        <button>Amarelo</button>*/}

                        {/*<input type="radio" value="azul" name="temas"/>                     
                        <input type="radio" value="vermelho" name="temas" />                         
                        <input type="radio" value="verde" name="temas" />                         
                        <input type="radio" value="roza" name="temas" />                         
                        <input type="radio" value="amarelo" name="temas" />*/}

                        <img src={tAzul} alt="Tema Azul" onClick={() => setTema("#3293CA")} />
                        <img src={tVermelho} alt="Tema Vermelho" onClick={() => setTema("#f02d1f")} />
                        <img src={tVerde} alt="Tema Verde" onClick={() => setTema("#1ff076")} />
                        <img src={tRoza} alt="Tema Roza" onClick={() => setTema("#f01fbf")} />
                        <img src={tAmarelo} alt="Tema Amarelo" onClick={() => setTema("#dbd51d")} />
                    </div>
                    <br></br>
                    <br></br>
                    <p id={styles["legEndereco"]}>Endereço</p>
                    <div className={styles.linha}>
                        <div>
                            <input type="number"
                                placeholder="CEP:"
                                title="Digite o seu CEP"
                                name="cep"
                                id={styles["cep"]}
                                maxLength="8"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                value={jscep}
                                ref={fcep}
                                onBlur={checkCEP}
                                onChange={(e) => setCEP(e.target.value)}
                                required />
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Rua:"
                                title="Digite a sua Rua"
                                name="rua" id={styles["rua"]}
                                className={styles.segColuna}
                                value={jsrua}
                                {...register("rua")}
                                onChange={(e) => setRua(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className={styles.linha}>
                        <div>
                            <input type="number"
                                placeholder="Número:"
                                title="Digite o seu Número"
                                name="num"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                id={styles["numero"]}
                                value={jsnum}
                                ref={fnum}
                                onChange={(e) => setNum(e.target.value)}
                                required /> <br></br>
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Complemento:"
                                title="Digite o seu Complemento"
                                name="comp" id={styles["comple"]}
                                className={styles.segColuna}
                                value={jscomp}
                                onChange={(e) => setComp(e.target.value)} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text"
                            placeholder="Bairro:"
                            title="Digite o seu bairro"
                            name="bairro"
                            id={styles["bairro"]}
                            value={jsbairro}
                            {...register("bairro")}
                            onChange={(e) => setBairro(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Cidade:"
                            title="Digite a sua Cidade"
                            name="cidade"
                            value={jscidade}
                            id={styles["cidade"]}
                            {...register("cidade")}
                            onChange={(e) => setCidade(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Estado:"
                            title="Digite o seu Estado"
                            name="estado"
                            value={jseuf}
                            id={styles["estado"]}
                            {...register("uf")}
                            onChange={(e) => setUF(e.target.value)}
                            required />
                    </div>

                    <div id={styles["fbtnSalvarotoCli"]}>
                        <button id={styles["btnExcluir"]}>Excluir</button>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" value="Salvar" />
                    </div>
                </form>
                <br></br>
            </div>

            <div id={styles["menuHorCli"]}>
                {/*Menu Mobile*/}
                <div className="menHamburger">
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                    <div className={menu_class}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div onClick={updateMenu} className="fechaMenu"><p>+</p></div>

                        <FotoMen />

                        <ul id="uMenHamburger">
                            <li>
                                <p>
                                    <Link to={`/tMenuDBADM/${token}/${uid}`}>
                                        Dados Básicos
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuEnderecoADM/${token}/${uid}`}>
                                        Endereço
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuFotoADM/${token}/${uid}`}>
                                        Foto
                                    </Link>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to={`/tEmpreendimento/${token}/${uid}`}>
                                        Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tNovoEmpreendimento/${token}/${uid}`}>
                                        Novo Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tPesqFunc/${token}/${uid}`}>
                                        Voltar ao Menu
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <FotoHor />

                <div className={styles.logoMenuCli}><p>{nomeEmp}</p></div>
                <div id={styles["voltar"]}><Link to={`/tPesqFunc/${token}/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>
        </div>
    )
}

export default TelaMenuEmpreendimento