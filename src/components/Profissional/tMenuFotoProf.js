import styles from './tMenuFotoProf.module.css';

import Voltar from '../../icones/chevron-left.png';

import FotoLat from './FotoPerfilFunc/fotoFuncLat';

import FotoHor from './FotoPerfilFunc/fotoFuncHor';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect } from "react";

import { Link, useParams } from 'react-router-dom';

import agFetch from '../../axios/config.js';

import { decodeToken } from 'react-jwt';

const TelaFotoProfissional = () => {

    document.title = "Foto do Profissional";

    const { token } = useParams();

    const converToken = decodeToken(token);

    const userID = converToken.id;

    const { uid } = useParams();

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

    //verificar se o usuario tem foto
    const baseDaUrl = "http://ec2-54-157-10-132.compute-1.amazonaws.com:4000";
    useEffect(() => {
        async function PegaFoto() {
            try {
                const fotoResponse = await agFetch.get(`/funcionario/pegarPorId?id=${userID}`);
                const foto = fotoResponse.data.urlFoto;
                if (foto === null || foto === "funcAvatar.png") {
                    console.log("Não há imagem!");
                    const lFoto = FotoPerfil;
                    setPreview(lFoto);
                } else {
                    const lFoto = baseDaUrl + '/Funcionario/' + foto;
                    console.log(lFoto);
                    setPreview(lFoto);
                }
            } catch (error) {
                console.log(error);
            }
        }
        PegaFoto();
    }, [userID])

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

    //logica do envio de foto
    const EnvFoto = async (selectedFile) => {
        //logica da foto
        if (selectedFile !== null) {
            console.log("Foto Preenchida!!!");
            const formData = new FormData();
            formData.append('avatar', selectedFile);
            try {
                const multipart = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                };
                const response = await agFetch.post('/funcionario/image', formData, multipart);
                if (response.status >= 200 && response.status <= 299) {
                    alert("Foto de Perfil Atualizada!");
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
                alert("Não foi possível enviar a imagem!");
            }
        }
    }

    //atualiza foto de perfil
    const updateFotoFunc = (e) => {
        e.preventDefault();

        EnvFoto(selectedFile);
    }

    return (
        <div className={styles.fFotoFunc}>
            <div id={styles["menuLatFunc"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
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
                    <center><img id="fotoDefFunc" className={styles.fotDef} src={preview} alt="Foto Perfil" /></center>
                    <center>{selectedFile && <img src={preview} alt="Foto Perfil" />}</center>
                    <div className={styles.legFoto}><p>Adicionar / alterar imagem</p></div>
                    <center><input type="file" id={styles["fotoFunc"]} name="fotoFunc" accept="image/jpeg, image/jpg, image/png" onChange={onSelectFile} required /></center>
                    <div id={styles["fbtnSalvarotoFunc"]}>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" value="Salvar" />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </form>
            </div>

            <div id={styles["menuHorFunc"]}>
                <FotoHor />
                <div className={styles.logoMenuFunc}><p>{nomeEmpresa}</p></div>
                <div id={styles["voltar"]}><Link to={`/tMenuProfis/${token}/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>
        </div>
    )
}

export default TelaFotoProfissional