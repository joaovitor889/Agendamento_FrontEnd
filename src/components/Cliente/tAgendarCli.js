import styles from './tAgendarCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import FotoCliente from './FotoPerfilCliente/fotoCliente';

import React, { useState, useEffect } from "react";

import agFetch from '../../axios/config';

import { useParams } from 'react-router-dom';

const TelaAgendarCliente = () => {

    document.title = "Agendar Cliente";

    const token = useParams().token;

    const uid = useParams().uid;

    const voltaMenu = "/tMenuCli/" + token + "/" + uid;

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

    return (
        <div className={styles.fAgendarCliente}>
            <nav id={styles["cabecalhoMenuCli"]}>
                <div className={styles.voltar}><a href={voltaMenu}><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
                <div className={styles.logoMenuCli}><p>{nomeEmpresa}</p></div>                
                <FotoCliente />
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