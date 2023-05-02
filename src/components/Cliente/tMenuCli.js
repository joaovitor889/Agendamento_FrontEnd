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

import { useParams } from "react-router-dom";

const TelaMenuCliente = () => {

    document.title = "Menu do Cliente";

    //Requisicoes com a API
    const { id } = useParams();
    const [post, setPost] = useState([]);

    const getPost = async () => {
        try {
            const response = await agFetch.get(`/posts/${id}`);

            const data = response.data;

            setPost(post, data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPost();
    });

    //const nome = "José";

    const valores = localStorage.getItem('users_bd');
    const valToken = localStorage.getItem('user_token');

    const JSONObject = JSON.parse(valores);
    const JSToken = JSON.parse(valToken);

    var nome;

    if(JSONObject.length === 1)
    {
        nome = JSONObject.map((JSONObject) => {        
            return JSONObject['nome'] ;
        })

    }
    else {
        try {
            for (let i = 0; i <= localStorage.length; i++) {
                if (JSONObject[i]['email'] === JSToken['email'])
                    nome = JSONObject[i]['nome'];
            }
        } catch (error) {
            //coloquei este try catch para parar de reclamar de erro
        }
    }

    return (
        <div className={styles.fMenuCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><Link to="../../tLoginCli"><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
            </nav>
            <div className={styles.fPreto}></div>
            <div className={styles.texto}>Bem-Vindo(a)<br></br>Cliente<br></br><div className={styles.nome}>{nome}</div></div>
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