import styles from './tMenuFotoADM.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

//import Perfil from '../../icones/perfilCliente.png';

import FotoPerfil from '../../icones/UparAlterarPerfilCli.png';

import React, { useState, useEffect } from "react";

import agFetch from '../../axios/config.js';

import { Link, useParams } from 'react-router-dom';

import { decodeToken } from 'react-jwt';

//import { Link, useNavigate } from "react-router-dom";

import FotoHor from './FotoPerfilAdm/fotoAdmHor';
import FotoLat from './FotoPerfilAdm/fotoAdmLat';
import FotoMen from './FotoPerfilAdm/fotoAdmMen';

const TelaFotoADM = () => {

    document.title = "Foto do Adm";

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
                const fotoResponse = await agFetch.get(`/proprietarios/pegarUm?id=${userID}`);
                const foto = fotoResponse.data.urlFoto;
                if (foto === null || foto === "propAvatar.png") {
                    console.log("Não há imagem!");
                    const lFoto = FotoPerfil;
                    setPreview(lFoto);
                } else {
                    const lFoto = baseDaUrl + '/Proprietario/' + foto;
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
                const response = await agFetch.post('/proprietarios/image/', formData, multipart);
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
                            <Link to={`/tMenuDBADM/${token}/${uid}`}>
                                <li><p>Dados Básicos</p></li>
                            </Link>

                            {/*<Link to='/tMenuEnderecoADM' target = "_blank" rel="noreferrer">*/}
                            <Link to={`/tMenuEnderecoADM/${token}/${uid}`}>
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to={`/tMenuFotoADM/${token}/${uid}`}>
                                <li style={{ color: '#000' }}><p>Foto</p></li>
                            </Link>

                            <Link to={`/tEmpreendimento/${token}/${uid}`}>
                                <li><p>Empreendimento</p></li>
                            </Link>
                            <Link to={`/tNovoEmpreendimento/${token}/${uid}`}>
                                <li><p>New Empreendimento</p></li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Foto (ADM)</center></h2>
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
                                    <Link to={`/tMenuDBADM/${token}/${uid}`}>
                                        Dados Básicos
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuEnderecoADM/${token}/${uid}`}>
                                        Endereço
                                    </Link>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to={`/tMenuFotoADM/${token}/${uid}`}>
                                        Foto
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tEmpreendimento/${token}/${uid}`}>
                                        Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tNovoEmpreendimento/${token}/${uid}`}>
                                        Novo Empreendimento
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tPesqFunc/${token}/${uid}`}>
                                        Voltar ao Menu
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <FotoHor />
                <div className={styles.logoMenuCli}><p>{nomeEmp}</p></div>
                <div id={styles["voltar"]}><Link to={`/tPesqFunc/${token}/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>
        </div>
    )
}

export default TelaFotoADM