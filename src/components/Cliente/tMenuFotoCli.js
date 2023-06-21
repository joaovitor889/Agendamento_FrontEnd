import styles from './tMenuFotoCli.module.css';

import Voltar from '../../icones/chevron-left.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect } from "react";

import agFetch from '../../axios/config.js';

import { Link, useParams } from 'react-router-dom';

import { decodeToken } from 'react-jwt';

//foto de perfil
import FotoHor from './FotoPerfilCliente/fotoClienteHor';
import FotoLat from './FotoPerfilCliente/fotoClienteLat';
import FotoMen from './FotoPerfilCliente/fotoClienteMen';

const TelaFotoCliente = () => {

    document.title = "Foto do Cliente";

    const { token } = useParams();

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5AZXhhbXBsZS5jb20iLCJpZCI6Miwicm9sZSI6IlByb3AiLCJpYXQiOjE2ODM4NDQ0NjcsImV4cCI6OTMzMTIwMDAwMDE2ODM4NTAwMDB9.Zr0_085Qp3mtxiapPztbt_YtzSUyiie7rjnB_ubEAm4";

    const converToken = decodeToken(token);

    const userID = converToken.id;

    const { uid } = useParams();

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

    //nome da empresa
    const [nomeEmp, setNomeEmp] = useState();

    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmp(empResponse.data.nome);
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
                const fotoResponse = await agFetch.get(`/cliente/pegarPorId?id=${userID}`);
                const foto = fotoResponse.data.urlFoto;
                if (foto === null || foto === "propAvatar.png" || foto === "userAvatar.png") {
                    console.log("Não há imagem!");
                    const lFoto = FotoPerfil;
                    setPreview(lFoto);
                } else {
                    const lFoto = baseDaUrl + '/Cliente/' + foto;
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

        var myPicture = document.getElementById('fotoDefCli');
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
                const response = await agFetch.post('/cliente/image', formData, multipart);
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
    const updateFoto = (e) => {
        e.preventDefault();

        EnvFoto(selectedFile);
    }

    return (
        <div className={styles.fFotoCliente}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
                        <div id={styles["textoLL"]}>
                            <Link to={`/tMenuDBCli/${token}/${uid}`}>
                                <li><p>Dados Básicos</p></li>
                            </Link>

                            <Link to={`/tMenuEnderecoCli/${token}/${uid}`}>
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to={`/tMenuFotoCli/${token}/${uid}`}>
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Foto</p></li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Foto (Cliente)</center></h2>
                <form id={styles["formFoto"]} onSubmit={updateFoto}>
                    <center><img id="fotoDefCli" className={styles.fotDef} src={preview} alt="Foto Perfil" /></center>
                    <center>{selectedFile && <img src={preview} alt="Foto Perfil" />}</center>
                    <div className={styles.legFoto}><p>Adicionar / alterar imagem</p></div>
                    <center><input type="file" id={styles["fotoCli"]} name="fotoCli" onChange={onSelectFile} accept="image/jpeg, image/jpg, image/png" required /></center>
                    <div id={styles["fbtnSalvarotoCli"]}>
                        <input type="submit" id={styles["btnSalvarFoto"]} name="btnSalvarFoto" value="Salvar" />
                    </div>
                    < br />
                    < br />
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

                        <ul id="uMenHamburger">
                            <FotoMen />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <li>
                                <p>
                                    <Link to={`/tMenuDBCli/${token}/${uid}`}>
                                        Dados Básicos
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuEnderecoCli/${token}/${uid}`}>
                                        Endereço
                                    </Link>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to={`/tMenuFotoCli/${token}/${uid}`}>
                                        Foto
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuCli/${token}/${uid}`}>
                                        Voltar ao Menu
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <FotoHor />
                <div className={styles.logoMenuCli}><p>{nomeEmp}</p></div>
                <div id={styles["voltar"]}><Link to={`/tMenuCli/${token}/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>
        </div>
    )
}

export default TelaFotoCliente