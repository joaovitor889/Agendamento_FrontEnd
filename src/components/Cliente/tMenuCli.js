import styles from './tMenuCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import Notificacao from '../../icones/Doorbell.png';
import AddAgenda from '../../icones/CalendarPlus.png';
import Agenda from '../../icones/Tear-Off Calendar.png';
import Perfil from '../../icones/perfilCliente.png';

import { Link } from "react-router-dom";

import agFetch from '../../axios/config.js';

import { useState, useEffect } from "react";

const TelaMenuCliente = () => {

    document.title = "Menu do Cliente";

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
        <div className={styles.fMenuCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><Link to="../../tLoginCli"><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
                <div className={styles.logoMenuCli}><p>Shostners & shostners</p></div>
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
                <div className={styles.perfil}>
                    {/*<img src={Perfil} alt="perfil" />*/}

                    <p>{iniciais}</p>
                </div>
            </nav>
            <div className={styles.fPreto}></div>
            <div className={styles.texto}>Bem-Vindo(a)<br></br>Cliente<br></br><div className={styles.nome}>{`${nome}`}</div></div>
            <div className={styles.botoes}>
                <div className={styles.linha}>
                    <img src={AddAgenda} alt="addAgenda" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tAgendarCli'
                    }}><p>Agendar</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Agenda} alt="agenda" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        window.location.href = './tAgendamentoCli'
                    }}><p>Meus Agendamentos</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Perfil} alt="perfil" />
                    <button type="button" className={styles.btn} onClick={(e) => {
                        e.preventDefault();
                        //localStorage.removeItem("user_token");
                        window.location.href = './tMenuDBCli'
                    }}><p>Perfil</p></button>
                </div>
            </div>
        </div>
    )
}

export default TelaMenuCliente