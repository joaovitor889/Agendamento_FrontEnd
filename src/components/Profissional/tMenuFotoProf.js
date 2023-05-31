import styles from './tMenuFotoProf.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect } from "react";


const TelaFotoProfissional = () => {

    document.title = "Foto do Profissional";

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

        var myPicture = document.getElementById('fotoDefFunc');
        myPicture.className = styles.desImgDef;

        setSelectedFile(e.target.files[0]);
    }

    //atualiza foto de perfil
    const updateFotoFunc = (e) => {
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
        <div className={styles.fFotoFunc}>
            <div id={styles["menuLatFunc"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <div id={styles["perfilLateral"]}>
                            {/*<img src={Perfil} alt="perfil" />*/}
                            <p>{iniciais}</p>
                        </div>
                        <div id={styles["textoLL"]}>
                            <a href="./tMenuFotoProf" rel="noreferrer">
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Foto</p></li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoFunc"]}>
                <h2><center>Foto (Funcionário)</center></h2>
                <form id={styles["formFotoFunc"]} onSubmit={updateFotoFunc}>
                    <center><img id="fotoDefFunc" className={styles.fotDef} src={FotoPerfil} alt="Foto Perfil" /></center>
                    <center>{selectedFile && <img src={preview} alt="Foto Perfil" />}</center>
                    <div className={styles.legFoto}><p>Adicionar / alterar imagem</p></div>
                    <center><input type="file" id={styles["fotoFunc"]} name="fotoFunc" accept="image/jpeg, image/jpg, image/png" onChange={onSelectFile} required /></center>
                    <div id={styles["fbtnSalvarotoFunc"]}>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" value="Salvar" />
                    </div>
                </form>
            </div>

            <div id={styles["menuHorFunc"]}>


                <div className={styles.perfil}>
                    {/*<img src={Perfil} alt="perfil" />*/}
                    <p>{iniciais}</p>
                </div>
                {/*<div className={styles.notificacao}>
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
                </div>*/}
                <div className={styles.logoMenuFunc}><p></p></div>
                <div id={styles["voltar"]}><a href="./tMenuProfis" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>
        </div>
    )
}

export default TelaFotoProfissional