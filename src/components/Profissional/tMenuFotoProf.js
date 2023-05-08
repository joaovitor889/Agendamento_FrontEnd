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

    return (
        <div className={styles.fFotoFunc}>
            <div id={styles["menuLatFunc"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <div id={styles["perfilLateral"]}>
                            <img src={Perfil} alt="perfil" />
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
                    <center><input type="file" id={styles["fotoFunc"]} name="fotoFunc" accept="image/jpeg, image/jpg, image/png" onChange={onSelectFile} required /></center>
                    <div id={styles["fbtnSalvarotoFunc"]}>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" value="Salvar" />
                    </div>
                </form>
            </div>

            <div id={styles["menuHorFunc"]}>


                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div id={styles["voltar"]}><a href="./tMenuProfis" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>
        </div>
    )
}

export default TelaFotoProfissional