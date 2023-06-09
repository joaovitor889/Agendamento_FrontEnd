import styles from './tMenuEmpr.module.css';

import Voltar from '../../icones/chevron-left.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect, useRef } from "react";

import { useForm } from "react-hook-form";

import agFetch from '../../axios/config.js';

import { Link, useParams, useNavigate } from 'react-router-dom';

import tAzul from '../../temas/tema01.png';

import tVermelho from '../../temas/tema02.png';

import tVerde from '../../temas/tema03.png';

import tRoza from '../../temas/tema04.png';

import tAmarelo from '../../temas/tema05.png';

//import { Link, useNavigate } from "react-router-dom";

import FotoHor from './FotoPerfilAdm/fotoAdmHor';
import FotoLat from './FotoPerfilAdm/fotoAdmPLat';
import FotoMen from './FotoPerfilAdm/fotoAdmPMen';

const TelaMenuEmpreendimento = () => {
    document.title = "Novo Empreendimento";

    const { token } = useParams();

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5AZXhhbXBsZS5jb20iLCJpZCI6Miwicm9sZSI6IlByb3AiLCJpYXQiOjE2ODM4NDQ0NjcsImV4cCI6OTMzMTIwMDAwMDE2ODM4NTAwMDB9.Zr0_085Qp3mtxiapPztbt_YtzSUyiie7rjnB_ubEAm4";

    const navigate = useNavigate();

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

    //logica do upload da foto
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState();


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

    //dados do formulario
    const [nomeEst, setNomeEst] = useState("");

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
    useEffect(() => {
        setTema('#3293CA');
    }, [])
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const ftelefone = "15 996633179";

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

    const handleTemaClick = (cor) => {
        setTema(cor);
        setImagemSelecionada(cor);
    };

    //salvar o empreendimento
    const cadEstabelecimento = async (selectedFile, jscep, nomeEst, ftelefone, segInic, terInic, quaInic, quiInic, sexInic, sabInic, domInic, segFim, terFim, quaFim, quiFim, sexFim, sabFim, domFim, ftema, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf) => {
        //alert(JSON.stringify({ selectedFile, jscep, nomeEst, ftelefone, segInic, terInic, quaInic, quiInic, sexInic, sabInic, domInic, segFim, terFim, quaFim, quiFim, sexFim, sabFim, domFim, ftema, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf }));

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
            imageUrl: null,
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

        console.log(textData);

        try {
            //alert(token);

            //Autorizar o envio dos dados
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Enviar os dados de texto
            const responseText = await agFetch.post('/estabelecimento/criar', textData, { headers });

            console.log('Resposta de texto:', responseText.data);

            if (responseText.status >= 200 && responseText.status <= 299) {
                alert("Estabelecimento Cadastrado!");

                const ultUid = responseText.data.uid;

                //alert(ultUid);

                //logica da foto
                if (selectedFile !== null) {
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
                navigate("/tLoginAdm");
            }
        } catch (error) {
            console.error('Erro ao enviar requisições:', error);
            alert("Dados Inválidos!");
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
                            <Link to={`/tMenuPLogin/${token}`}>
                                <li style={{ color: '#000' }}><p>New Empreendimento</p></li>
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
                    <center><input type="text" placeholder='Nome:' name="nome" onChange={(e) => setNomeEst(e.target.value)} required /></center>
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
                                    <td><input type="time" name="horInicio" onChange={(e) => setSegInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setSegFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Terça</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" onChange={(e) => setTerInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setTerFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Quarta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" onChange={(e) => setQuaInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setQuaFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Quinta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" onChange={(e) => setQuiInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setQuiFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Sexta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" onChange={(e) => setSexInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setSexFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Sábado</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" onChange={(e) => setSabInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setSabFim(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td><p>Domingo</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" onChange={(e) => setDomInic(e.target.value)} /></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" onChange={(e) => setDomFim(e.target.value)} /></td>
                                </tr>
                            </table>
                            <br></br>
                        </div>
                    </div>
                    <p id={styles["legTema"]}>Escolha o tema de fundo da sua empresa</p><br></br>
                    {/*<div id={styles["temas"]}>
                        <img src={tAzul} alt="Tema Azul" onClick={() => setTema("#3293CA")} />
                        <img src={tVermelho} alt="Tema Vermelho" onClick={() => setTema("#f02d1f")} />
                        <img src={tVerde} alt="Tema Verde" onClick={() => setTema("#1ff076")} />
                        <img src={tRoza} alt="Tema Roza" onClick={() => setTema("#f01fbf")} />
                        <img src={tAmarelo} alt="Tema Amarelo" onClick={() => setTema("#dbd51d")} />
                    </div>*/}
                    <div id={styles["temas"]}>
                        <img
                            src={tAzul}
                            alt="Tema Azul"
                            onClick={() => handleTemaClick("#3293CA")}
                            className={imagemSelecionada === "#3293CA" ? styles["descolorida"] : ""}
                        />
                        <img
                            src={tVermelho}
                            alt="Tema Vermelho"
                            onClick={() => handleTemaClick("#f02d1f")}
                            className={imagemSelecionada === "#f02d1f" ? styles["descolorida"] : ""}
                        />
                        <img
                            src={tVerde}
                            alt="Tema Verde"
                            onClick={() => handleTemaClick("#1ff076")}
                            className={imagemSelecionada === "#1ff076" ? styles["descolorida"] : ""}
                        />
                        <img
                            src={tRoza}
                            alt="Tema Roza"
                            onClick={() => handleTemaClick("#f01fbf")}
                            className={imagemSelecionada === "#f01fbf" ? styles["descolorida"] : ""}
                        />
                        <img
                            src={tAmarelo}
                            alt="Tema Amarelo"
                            onClick={() => handleTemaClick("#dbd51d")}
                            className={imagemSelecionada === "#dbd51d" ? styles["descolorida"] : ""}
                        />
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
                                onChange={(e) => setComp(e.target.value)} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text"
                            placeholder="Bairro:"
                            title="Digite o seu bairro"
                            name="bairro"
                            id={styles["bairro"]}
                            {...register("bairro")}
                            onChange={(e) => setBairro(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Cidade:"
                            title="Digite a sua Cidade"
                            name="cidade"
                            id={styles["cidade"]}
                            {...register("cidade")}
                            onChange={(e) => setCidade(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Estado:"
                            title="Digite o seu Estado"
                            name="estado"
                            id={styles["estado"]}
                            {...register("uf")}
                            onChange={(e) => setUF(e.target.value)}
                            required />
                    </div>

                    <div id={styles["fbtnSalvarotoCli"]}>
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

                        <ul id="uMenHamburger">
                            <FotoMen />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to={`/tMenuPLogin/${token}`}>
                                        Novo Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={'/tLoginAdm'}>
                                        Voltar
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <FotoHor />

                <div className={styles.logoMenuCli}><p>Cadastrar Empresa</p></div>
                <div id={styles["voltar"]}><Link to={'/tLoginAdm'}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>
        </div>
    )
}

export default TelaMenuEmpreendimento