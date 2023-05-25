import styles from './tAgendarCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import Notificacao from '../../icones/Doorbell.png';
import Perfil from '../../icones/perfilCliente.png';

import React, { useState, useEffect } from "react";

const TelaAgendarCliente = () => {

    document.title = "Agendar Cliente";

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
        <div className={styles.fAgendarCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><a href="./tMenuCli" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
                <div className={styles.logoMenuCli}><p>Shostners & shostners</p></div>
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
                <div className={styles.perfil}>
                    {/*<img src={Perfil} alt="perfil" />*/}
                    <p>{iniciais}</p>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id={styles["conteudo"]}>
                <form id={styles["formAgendarCli"]}>
                    <div className={styles.tituloAgendar}>
                        <p>Agendar</p>
                    </div>
                    <br></br>

                    <select id={styles["categoria"]} required>
                        <option value="cat">*Categoria</option>
                        <option value="corte">Cabelo</option>
                        <option value="corte">Mãos</option>
                        <option value="corte">Pés</option>
                    </select>

                    <br></br>

                    <select id={styles["servico"]} required>
                        <option value="srv">*Serviço</option>
                        <option value="corte">Corte</option>
                    </select>

                    <br></br>

                    <select id={styles["profss"]} required>
                        <option value="prof">*Profissional</option>
                        <option value="prof1">José</option>
                    </select>

                    <br></br>
                    <div id={styles["linha"]}>
                        <div>
                            <input type="date" placeholder="*Data:" title="Escolha uma data" name="dtAgendCli" id={styles["dtAgendCli"]} required />
                        </div>

                        <div id={styles["direita"]}>
                            <select id={styles["horAtend"]} required>
                                <option value="hor">*Horário de atendimento</option>
                                <option value="hor1">14:30</option>
                            </select>
                        </div>
                    </div>
                    <select id={styles["empresa"]} required>
                        <option value="emprs">*Empresa</option>
                        <option value="emp1">Shostners & shostners</option>
                    </select>
                    <div id={styles["rodape"]}>
                        <div id={styles["preco"]}>
                            <input type="text" defaultValue={"Preço R$"} disabled />
                        </div>
                        <div id={styles["btn"]}>
                            <input type="submit" id={styles["btnAgendarCli"]} name="btnSAgendarCli" onClick={() => alert('Realiza o Agendamento!')} value="Agendar" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TelaAgendarCliente