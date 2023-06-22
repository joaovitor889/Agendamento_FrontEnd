import styles from './tMenuCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';
import AddAgenda from '../../icones/CalendarPlus.png';
import Agenda from '../../icones/Tear-Off Calendar.png';
import Perfil from '../../icones/perfilCliente.png';

import { Link, useParams, useNavigate } from "react-router-dom";

import agFetch from '../../axios/config.js';

import { useState, useEffect } from "react";

import Foto from './FotoPerfilCliente/fotoCliente';

import { decodeToken } from 'react-jwt';

const TelaMenuCliente = () => {

    document.title = "Menu do Cliente";

    const token = useParams().token;

    const cvToken = decodeToken(token);

    const idCli = cvToken.id;

    const uid = useParams().uid;

    const navigate = useNavigate();

    //Requisicoes com a API

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


    //nome do cliente
    const [nomeCli, setNomeCli] = useState();

    useEffect(() => {
        async function PegaCliente() {
            try {
                const cliResponse = await agFetch.get(`/cliente/pegarPorId?id=${idCli}`);
                const clNome = cliResponse.data.nome;

                if (clNome.includes(' ')) {
                    const firstSpaceIndex = clNome.indexOf(' ');
                    const cmpNome = clNome.substring(0, firstSpaceIndex);
                    setNomeCli(cmpNome);
                } else {
                    setNomeCli(clNome);
                }
            } catch (error) {
                console.log(error);
            }
        }
        PegaCliente();
    }, [idCli])

    const Agendar = () => {
        navigate(`/tAgendarCli/${token}/${uid}`);
    }

    const TAgendamentos = () => {
        navigate(`/tAgendamentoCli/${token}/${uid}`);
    }

    const TPerfil = () => {
        navigate(`/tMenuDBCli/${token}/${uid}`);
    }

    return (
        <div className={styles.fMenuCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><Link to={`/tLoginCli/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
                <div className={styles.logoMenuCli}><p>{nomeEmpresa}</p></div>
                <Foto />
            </nav>
            <div className={styles.fPreto}></div>
            <div className={styles.texto}>Bem-Vindo(a)<br></br>Cliente<br></br><div className={styles.nome}>{nomeCli}</div></div>
            <div className={styles.botoes}>
                <div className={styles.linha}>
                    <img src={AddAgenda} alt="addAgenda" />
                    <button type="button" className={styles.btn} onClick={Agendar}><p>Agendar</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Agenda} alt="agenda" />
                    <button type="button" className={styles.btn} onClick={TAgendamentos}><p>Meus Agendamentos</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Perfil} alt="perfil" />
                    <button type="button" className={styles.btn} onClick={TPerfil}><p>Perfil</p></button>
                </div>
            </div>
        </div>
    )
}

export default TelaMenuCliente