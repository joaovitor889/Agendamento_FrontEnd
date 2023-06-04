import styles from './tMenuDBADM.module.css';
//import logo from '../../img/logo.PNG';

import React, { useState, useEffect, useRef } from "react";

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

//import Perfil from '../../icones/perfilCliente.png';

import agFetch from '../../axios/config.js';

import './menHamburger.css';

import { Link } from 'react-router-dom';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

const TelaDadosBasicosCliente = () => {

    document.title = "Dados Básicos";

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

    //Requisicoes com a API
    // Estado para armazenar os dados do usuário
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


    //alert(JSON.stringify(userData));

    // Chama a função fetchUserData quando o componente é montado
    useEffect(() => {
        fetchUserData();
    });

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cpf = cmpCPF.current;
        const telefone = cmpTelefone.current;
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

    //Campos
    //const cmpNome = useRef(userData.nome);
    //const cmpSobrenome = useRef(userData.sobrenome);
    //const cmpCPF = useRef(userData.cpf);
    //const cmpTelefone = useRef(userData.telefone);
    //const cmpEmail = useRef(userData.email);

    const cmpNome = useRef("AAA");
    const cmpSobrenome = useRef("AAA");
    const cmpCPF = useRef("111");
    const cmpTelefone = useRef("111");
    const cmpEmail = useRef("aaa@gmail.com");

    //Atualizacao dos dados
    const updateData = async (userData) => {
        /*try {
            await agFetch.put(`/clientes/criar/${userData.email}`, {
                nome: cmpNome.current.value,
                sobrenome: cmpSobrenome.current.value,
                cpf: cmpCPF.current.value,
                telefone: cmpTelefone.current.value,
                email: cmpEmail.current.value,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            //const updatedUserData = response.data;

            //setUserData(updatedUserData);
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar os dados do cliente na API.");
        }*/
    };


    const updateCli = async (e) => {
        e.preventDefault();

        /*try {
            const response = await agFetch.get("/clientes/criar");
            const data = response.data;
            const jsonData = data;

            if (jsonData.some((item) => item.cpf === cmpCPF.current.value && item.cpf !== userData.cpf)) {
                alert("CPF já cadastrado.");
                cmpCPF.current.focus();
                return;
            }

            if (jsonData.some((item) => item.telefone === cmpTelefone.current.value && item.telefone !== userData.telefone)) {
                alert("Telefone já cadastrado.");
                cmpTelefone.current.focus();
                return;
            }

            if (jsonData.some((item) => item.email === cmpEmail.current.value && item.email !== userData.email)) {
                alert("E-mail já cadastrado.");
                cmpEmail.current.focus();
                return;
            }

            // Encontrar o objeto do usuário atual pelo email
            const userObject = jsonData.find((item) => item.email === userData.email);

            // Atualizar os campos necessários
            userObject.nome = cmpNome.current.value;
            userObject.sobrenome = cmpSobrenome.current.value;
            userObject.cpf = cmpCPF.current.value;
            userObject.telefone = cmpTelefone.current.value;
            userObject.email = cmpEmail.current.value;

            // Verificar se o email foi alterado
            if (cmpEmail.current.value !== userData.email) {
                // Atualizar o email no token
                const userToken = JSON.parse(localStorage.getItem("user_token"));
                userToken.email = cmpEmail.current.value;
                localStorage.setItem("user_token", JSON.stringify(userToken));
            }

            // Chamar a função de atualização dos dados
            await updateData(userObject);

            // Dados atualizados com sucesso
            alert("Dados atualizados com sucesso.");
        } catch (error) {
            alert("Ocorreu um erro ao atualizar os dados do cliente. Erro: " + error.message);
        }*/
    };


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

    return (
        <div className={styles.fDBCliente}>
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
                            <Link to='/tMenuDBADM' rel="noreferrer">
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Dados Básicos</p></li>
                            </Link>

                            {/*<Link to='/tMenuEnderecoADM' target = "_blank" rel="noreferrer">*/}
                            <Link to='/tMenuEnderecoADM' rel="noreferrer">
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to='/tMenuFotoADM' rel="noreferrer">
                                <li><p>Foto</p></li>
                            </Link>

                            <Link to='/tEmpreendimento' rel="noreferrer">
                                <li><p>Empreendimento</p></li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Dados Básicos (ADM)</center></h2>
                <form id={styles["formDB"]} onSubmit={(e) => updateCli(e)}>
                    <input type="text"
                        placeholder="*Nome:"
                        title="Digite o seu nome"
                        name="nome"
                        id={styles["nome"]}
                        required
                        defaultValue={userData.nome || ""}
                        ref={cmpNome}
                        /*onChange={(e) => setCmpNome(e.target.value)}*/ /> <br></br>
                    <input type="text"
                        placeholder="*Sobrenome:"
                        title="Digite o seu sobrenome"
                        name="sobrenome"
                        id={styles["sobrenome"]}
                        required
                        defaultValue={userData.sobrenome || ""}
                        ref={cmpSobrenome} /> <br></br>
                    <input type="number"
                        placeholder="*CPF:"
                        title="Digite o seu CPF"
                        name="cpf" id={styles["cpf"]}
                        maxLength="11"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)
                                || event.target.value.length > event.target.maxLength - 1) {
                                event.preventDefault();
                            }
                        }}
                        required
                        defaultValue={userData.cpf || ""}
                        ref={cmpCPF} />

                    <input type="number"
                        placeholder="Telefone:"
                        title="Digite o seu Telefone"
                        name="tel" id={styles["tel"]}
                        maxLength="11"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)
                                || event.target.value.length > event.target.maxLength - 1) {
                                event.preventDefault();
                            }
                        }}
                        defaultValue={userData.telefone || ""}
                        ref={cmpTelefone}
                    />

                    <input type="email"
                        placeholder="*E-mail:"
                        title="Digite o seu E-mail"
                        name="email"
                        id={styles["email"]}
                        required /*disabled*/
                        defaultValue={userData.email || ""}
                        ref={cmpEmail}
                    //style={{ display: 'none' }}
                    //disabled
                    /> <br></br>
                    <div id="btnDBSalvar">
                        <input type="submit" id={styles["btnSalvarDDB"]} name="btnSalvarDDB" value="Salvar" />
                    </div>
                </form>
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
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
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
                            <li>
                                <p>
                                    <Link to='/tEmpreendimento' rel="noreferrer">
                                        Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/tMenuADM" rel="noreferrer">
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
                <div id={styles["voltar"]}><a href="/tMenuCli"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>

        </div>
    )
}

export default TelaDadosBasicosCliente