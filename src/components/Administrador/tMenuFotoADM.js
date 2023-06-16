import styles from './tMenuFotoADM.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

//import Perfil from '../../icones/perfilCliente.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect } from "react";

import agFetch from '../../axios/config.js';

import { Link } from 'react-router-dom';

//import { Link, useNavigate } from "react-router-dom";

import FotoHor from './FotoPerfilAdm/fotoAdmHor';
import FotoLat from './FotoPerfilAdm/fotoAdmLat';
import FotoMen from './FotoPerfilAdm/fotoAdmMen';

const TelaFotoCliente = () => {

    document.title = "Foto do Cliente";

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

    return (
        <div className={styles.fFotoCliente}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
                        <div id={styles["textoLL"]}>
                            <Link to="/tMenuDBADM/:token/:uid" rel="noreferrer">
                                <li><p>Dados Básicos</p></li>
                            </Link>

                            <Link to="/tMenuEnderecoADM/:token/:uid" rel="noreferrer">
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to="/tMenuFotoADM/:token/:uid" rel="noreferrer">
                                <li style={{ color: '#000' }}><p>Foto</p></li>
                            </Link>

                            <Link to="/tEmpreendimento/:token/:uid" rel="noreferrer">
                                <li><p>Empreendimento</p></li>
                            </Link>
                            <Link to="/tNovoEmpreendimento/:token/:uid" rel="noreferrer">
                                <li><p>New Empreendimento</p></li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Foto (ADM)</center></h2>
                <form id={styles["formFoto"]} onSubmit={updateFoto}>
                    <center><img id="fotoDefCli" className={styles.fotDef} src={FotoPerfil} alt="Foto Perfil" /></center>
                    <center>{selectedFile && <img src={preview} alt="Foto Perfil" />}</center>
                    <div className={styles.legFoto}><p>Adicionar / alterar imagem</p></div>
                    <center><input type="file" id={styles["fotoCli"]} name="fotoCli" onChange={onSelectFile} accept="image/jpeg, image/jpg, image/png" required /></center>
                    <div id={styles["fbtnSalvarotoCli"]}>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" value="Salvar" />
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

                        <FotoMen />

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
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to="/tMenuFotoADM" rel="noreferrer">
                                        Foto
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/tEmpreendimento" rel="noreferrer">
                                        Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <Link to="/tNovoEmpreendimento" rel="noreferrer">
                                <li><p>New Empreendimento</p></li>
                            </Link>
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

                <FotoHor />
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

export default TelaFotoCliente