import styles from './tMenuEmpr.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

//import Perfil from '../../icones/perfilCliente.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect, useRef } from "react";

import agFetch from '../../axios/config.js';

import { Link } from 'react-router-dom';

import tAzul from '../../temas/tema01.png';

import tVermelho from '../../temas/tema02.png';

import tVerde from '../../temas/tema03.png';

import tRoza from '../../temas/tema04.png';

import tAmarelo from '../../temas/tema05.png';

//import { Link, useNavigate } from "react-router-dom";

const TelaMenuEmpreendimentoNew = () => {
    document.title = "Empreendimento";

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

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cep = jscep.current;
        const num = jsnum.current;
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
    const [selectedFile, setSelectedFile] = useState();
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

    //atualiza foto de perfil
    const updateFoto = (e) => {
        e.preventDefault();

        alert('Dados Salvos!');
    }

    const [userData, setUserData] = useState({});

    //const valToken = localStorage.getItem('user_token');
    //const JSToken = JSON.parse(valToken);


    //var token = JSToken['token'];
    //var tkEmail = JSToken['email'];

    //alert(JSON.stringify(JSToken['token']));
    //alert(JSON.stringify(JSToken['email']));

    // Função para obter os dados do usuário
    const fetchUserData = async () => {
        /*try {
            const response = await agFetch.get('/clientes/criar', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = response.data;

            //filtra o objeto
            var objFiltrado = data.find((item) => item.email === tkEmail);
            var objF = objFiltrado ? { ...objFiltrado } : null;

            setUserData(objF);
            //alert(tkEmail);
            //alert(JSON.stringify(data));
            //alert(JSON.stringify(objF));
        } catch (error) {
            alert(error);
        }*/
    };

    // Chama a função fetchUserData quando o componente é montado
    useEffect(() => {
        fetchUserData();
    });

    // Extrai as informações necessárias do usuário
    const nome = "José";
    const sobrenome = "Luis";

    //const nome = userData.nome;
    //const sobrenome = userData.sobrenome;

    var pnome = '';
    var psobrenome = '';

    if (nome && nome.length > 0) {
        pnome = nome.charAt(0);
    }

    if (sobrenome && sobrenome.length > 0) {
        psobrenome = sobrenome.charAt(0);
    }

    const iniciais = pnome + psobrenome;



    //Notificacao
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [newNotification, setNewNotification] = useState(false);

    const fetchNotifications = () => {
        const fakeNotifications = [
            { id: 1, title: "Título 1", description: "Notificação 1" },
            { id: 2, title: "Título 2", description: "Notificação 2" },
            { id: 3, title: "Título 3", description: "Notificação 3" }
        ];
        setNotifications(fakeNotifications);
    };

    const handleClick = () => {
        if (!showNotifications) {
            fetchNotifications();
        }
        setShowNotifications(!showNotifications);
        setNewNotification(false);
    };

    const handleListClose = () => {
        setShowNotifications(false);
    };




    //API do CEP
    //const { register, setValue } = useForm();

    //Campos
    var jscep, jsnum, jscomp;
    jscep = useRef(null);
    jsnum = useRef(null);
    jscomp = useRef(null);

    //Campos da API
    const [jsrua, setRua] = useState("");
    const [jsbairro, setBairro] = useState("");
    const [jscidade, setCidade] = useState("");
    const [jseuf, setUF] = useState("");


    const checkCEP = (e) => {
        /*const cep = e.target.value.replace(/\D/g, '');
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
            });*/
    }

    return (
        <div className={styles.fEmpr}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <div id={styles["perfilLateral"]}>
                            {/*<img src={Perfil} alt="perfil" />*/}
                            <p>{iniciais}</p>
                        </div>
                        <div id={styles["textoLL"]}>
                            <Link to="/tMenuDBADM" rel="noreferrer">
                                <li><p>Dados Básicos</p></li>
                            </Link>

                            <Link to="/tMenuEnderecoADM" rel="noreferrer">
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to="/tMenuFotoADM" rel="noreferrer">
                                <li><p>Foto</p></li>
                            </Link>

                            <Link to="/tEmpreendimento" rel="noreferrer">
                                <li><p>Empreendimento</p></li>
                            </Link>

                            <Link to="/tEmpreendimento" rel="noreferrer">
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>New Empreendimeno</p></li>
                            </Link>
                        </div>
                    </ul>

                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Logo</center></h2>
                <form id={styles["formFoto"]} onSubmit={updateFoto}>
                    <center><img id="fotoDefCli" className={styles.fotDef} src={FotoPerfil} alt="Foto Perfil" /></center>
                    <center>{selectedFile && <img src={preview} alt="Foto Perfil" />}</center>
                    <div className={styles.legFoto}><p>Adicionar / alterar imagem</p></div>
                    <center><input type="file" id={styles["fotoCli"]} name="fotoCli" onChange={onSelectFile} accept="image/jpeg, image/jpg, image/png" required /></center>
                    <center><input type="text" placeholder='Nome:' name="nome" id='NomeProp'/></center>
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
                                    <td><input type="time" name="horInicio" id='SegInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='SegFim'/></td>
                                </tr>

                                <tr>
                                    <td><p>Terça</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" id='TerInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='TerFim'/></td>
                                </tr>

                                <tr>
                                    <td><p>Quarta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" id='QuarInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='QuarFim'/></td>
                                </tr>

                                <tr>
                                    <td><p>Quinta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" id='QuinInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='QuinFim'/></td>
                                </tr>

                                <tr>
                                    <td><p>Sexta</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" id='SexInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='SexFim'/></td>
                                </tr>

                                <tr>
                                    <td><p>Sábado</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" id='SabInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='SabFim'/></td>
                                </tr>

                                <tr>
                                    <td><p>Domingo</p></td>
                                    <td><p>Início</p></td>
                                    <td><input type="time" name="horInicio" id='DomInicio'/></td>
                                    <td><p>Fim</p></td>
                                    <td><input type="time" name="horFinal" id='DomFim'/></td>
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

                        <img src={tAzul} alt="Tema Azul" onClick={(e) => { alert("Azul") }} />
                        <img src={tVermelho} alt="Tema Vermelho" onClick={(e) => { alert("Vermelho") }} />
                        <img src={tVerde} alt="Tema Verde" onClick={(e) => { alert("Verde") }} />
                        <img src={tRoza} alt="Tema Roza" onClick={(e) => { alert("Roza") }} />
                        <img src={tAmarelo} alt="Tema Amarelo" onClick={(e) => { alert("Amarelo") }} />
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
                                //{...register("cep")}
                                onBlur={checkCEP}
                                ref={jscep}
                                required />
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Rua:"
                                title="Digite a sua Rua"
                                name="rua" id={styles["rua"]}
                                className={styles.segColuna}
                                //{...register("rua")}
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
                                ref={jsnum}
                                required /> <br></br>
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Complemento:"
                                title="Digite o seu Complemento"
                                name="comp" id={styles["comple"]}
                                className={styles.segColuna}
                                ref={jscomp} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text"
                            placeholder="Bairro:"
                            title="Digite o seu bairro"
                            name="bairro"
                            id={styles["bairro"]}
                            //{...register("bairro")}   
                            onChange={(e) => setBairro(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Cidade:"
                            title="Digite a sua Cidade"
                            name="cidade"
                            id={styles["cidade"]}
                            //{...register("cidade")}
                            onChange={(e) => setCidade(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Estado:"
                            title="Digite o seu Estado"
                            name="estado"
                            id={styles["estado"]}
                            //{...register("uf")}
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

                        <div id="perfilHamburger">
                            {/*<img src={Perfil} alt="perfil" />*/}
                            <p>{iniciais}</p>
                        </div>

                        <ul id="uMenHamburger">
                            <li>
                                <p>
                                    <Link to="/tMenuDBADM" rel="noreferrer">
                                        Dados Básicos
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/tMenuEnderecoADM" rel="noreferrer">
                                        Endereço
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/tMenuFotoADM" rel="noreferrer">
                                        Foto
                                    </Link>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to="/tEmpreendimento" rel="noreferrer">
                                        Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/tPesqFunc" rel="noreferrer">
                                        Voltar ao Menu
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.perfil}>
                    {/*<img src={Perfil} alt="perfil" />*/}
                    <p>{iniciais}</p>
                </div>
                <div className={styles.notificacao}>
                    <div className={styles.btnNot}><button onClick={handleClick}><img src={Notificacao} alt="notificacao" /></button></div>
                    {showNotifications && (
                        <div className={styles.notificationContainer}>
                            <button className={styles.closeButton} onClick={handleListClose}>X</button>
                            {newNotification && <p>Nova notificação recebida!</p>}
                            <ul className={styles.notificationList}>
                                {notifications.map((notification, index) => (
                                    <li
                                        className={`notification-item ${index === 0 ? "first-notification" : ""}`}
                                        key={notification.id}
                                    >
                                        <p className="notification-title">{notification.title}</p>
                                        <p className={styles.notificationDescription}>{notification.description}</p>
                                        <hr></hr>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div id={styles["voltar"]}><a href="/tPesqFunc" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>
        </div>
    )
}

export default TelaMenuEmpreendimentoNew