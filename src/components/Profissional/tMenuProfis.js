import styles from './tMenuProfis.module.css';

import Voltar from '../../icones/chevron-left.png';

import Agenda from '../../icones/Tear-Off Calendar.png';

import Perfil from '../../icones/perfilCliente.png';

import Foto from './FotoPerfilFunc/fotoFunc';

import { Link, useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';

import agFetch from '../../axios/config';

import { decodeToken } from 'react-jwt';

const TelaMenuProfissional = () => {

    document.title = "Menu Profissional";

    const token = useParams().token;

    const cvToken = decodeToken(token);

    const userID = cvToken.id;

    const { uid } = useParams();

    const navigate = useNavigate();

    const AgendamentosFunc = () => {
        navigate(`/tAgendamentoProfis/${token}/${uid}`);
    }

    const PefilFunc = () => {
        navigate(`/tMenuFotoProf/${token}/${uid}`);
    }


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

    //nome do funcionario
    const [nomeFunc, setNomeFunc] = useState();

    useEffect(() => {
        async function PegaFuncionario() {
            try {
                const funcResponse = await agFetch.get(`/funcionario/pegarPorId?id=${userID}`);
                const funNome = funcResponse.data.nome;

                if (funNome.includes(' ')) {
                    const firstSpaceIndex = funNome.indexOf(' ');
                    const cmpNome = funNome.substring(0, firstSpaceIndex);
                    setNomeFunc(cmpNome);
                } else {
                    setNomeFunc(funNome);
                }
            } catch (error) {
                console.log(error);
            }
        }
        PegaFuncionario();
    }, [userID])


    return (
        <div className={styles.fMenuProfissional}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><Link to={`/tLoginFunc/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
                <div className={styles.logoMenuCli}><p>{nomeEmpresa}</p></div>
                <Foto />
            </nav>
            <div className={styles.fPreto}></div>
            <div className={styles.texto}>Bem-Vindo(a)<br></br>Profissional<br></br><div className={styles.nome}>{nomeFunc}</div></div>
            <div className={styles.botoes}>
                <div className={styles.linha}>
                    <img src={Agenda} alt="agenda" />
                    <button type="button" className={styles.btn} onClick={AgendamentosFunc}><p>Meus Agendamentos</p></button>
                </div>
                <div className={styles.linha}>
                    <img src={Perfil} alt="perfil" />
                    <button type="button" className={styles.btn} onClick={PefilFunc}><p>Perfil</p></button>
                </div>
            </div>
        </div>
    )
}

export default TelaMenuProfissional