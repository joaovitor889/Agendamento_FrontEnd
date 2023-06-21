import styles from './tMenuEnderecoCli.module.css';

import Voltar from '../../icones/chevron-left.png';

//foto de perfil
import FotoHor from './FotoPerfilCliente/fotoClienteHor';
import FotoLat from './FotoPerfilCliente/fotoClienteLat';
import FotoMen from './FotoPerfilCliente/fotoClienteMen';

import './menHamburger.css';

import React, { useState, useEffect, useRef } from "react";

import agFetch from '../../axios/config.js';

import { useForm } from "react-hook-form";

import { Link, useParams } from 'react-router-dom';

import { decodeToken } from 'react-jwt';

const TelaEnderecoCliente = () => {
    document.title = "Endereço do Cliente";

    const token = useParams().token;

    const cvToken = decodeToken(token);

    const userID = cvToken.id;

    const uid = useParams().uid;

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

    //API do CEP
    const { register, setValue } = useForm();
    console.log(register);

    //Campos
    var jscep, jsnum, jscomp;
    jscep = useRef(null);
    jsnum = useRef(null);
    jscomp = useRef(null);

    //Campos da API
    const [jsrua, setRua] = useState("");
    const [jsbairro, setBairro] = useState("");
    const [jscidade, setCidade] = useState("");
    const [jseuf, setUF] = useState("");


    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        //console.log(cep);
        console.log(jsrua, jsbairro, jscidade, jseuf);

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                //console.log(JSON.stringify(data));                       
                setValue("rua", data.logradouro);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setValue("uf", data.uf);

                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUF(data.uf);
            });
    }

    const updateEndereco = (e) => {
        e.preventDefault();

        const valCep = jscep.current.value;
        //const valComp = jscomp.current.value;
        //const valNum = jsnum.current.value;

        //const valRua = jsrua;
        //const valBairro = jsbairro;
        //const valCidade = jscidade;
        //const valUF = jseuf;

        let qtdCep = valCep.length;
        if (qtdCep < 8) {
            alert("CEP Inválido!");
            jscep.current.focus();
        } else {

        }
    }



    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cep = jscep.current;
        const num = jsnum.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (cep) {
            cep.addEventListener('wheel', bloquearRolagem);
        }

        if (num) {
            num.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (cep) {
                cep.removeEventListener('wheel', bloquearRolagem);
            }
            if (num) {
                num.removeEventListener('wheel', bloquearRolagem);
            }
        };
    });

    return (
        <div className={styles.fDBCliente}>
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
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Endereço</p></li>
                            </Link>

                            <Link to={`/tMenuFotoCli/${token}/${uid}`}>
                                <li><p>Foto</p></li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Endereço (Cliente)</center></h2>
                <form id={styles["formEN"]} onSubmit={(e) => updateEndereco(e)}>
                    <div className={styles.linha}>
                        <div>
                            <input type="number"
                                placeholder="CEP:"
                                title="Digite o seu CEP"
                                name="cep"
                                id={styles["cep"]}
                                maxLength="8"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                //{...register("cep")}
                                onBlur={checkCEP}
                                ref={jscep}
                                required />
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Rua:"
                                title="Digite a sua Rua"
                                name="rua" id={styles["rua"]}
                                className={styles.segColuna}
                                //{...register("rua")}
                                onChange={(e) => setRua(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className={styles.linha}>
                        <div>
                            <input type="number"
                                placeholder="Número:"
                                title="Digite o seu Número"
                                name="num"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                id={styles["numero"]}
                                ref={jsnum}
                                required /> <br></br>
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Complemento:"
                                title="Digite o seu Complemento"
                                name="comp" id={styles["comple"]}
                                className={styles.segColuna}
                                ref={jscomp} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text"
                            placeholder="Bairro:"
                            title="Digite o seu bairro"
                            name="bairro"
                            id={styles["bairro"]}
                            //{...register("bairro")}   
                            onChange={(e) => setBairro(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Cidade:"
                            title="Digite a sua Cidade"
                            name="cidade"
                            id={styles["cidade"]}
                            //{...register("cidade")}
                            onChange={(e) => setCidade(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="Estado:"
                            title="Digite o seu Estado"
                            name="estado"
                            id={styles["estado"]}
                            //{...register("uf")}
                            onChange={(e) => setUF(e.target.value)}
                            required />
                    </div>
                    <div id="btnDBSalvar">
                        <input type="submit" id={styles["btnSalvarDDB"]} name="btnSalvarDDB" value="Salvar" />
                    </div>
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

                        <FotoMen />

                        <ul id="uMenHamburger">
                            <li>
                                <p>
                                    <Link to={`/tMenuDBCli/${token}/${uid}`}>
                                        Dados Básicos
                                    </Link>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to={`/tMenuEnderecoCli/${token}/${uid}`}>
                                        Endereço
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuFotoCli/${token}/${uid}`}>
                                        Foto
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tLoginCli/${uid}`}>
                                        Voltar ao Menu
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <FotoHor />
                <div className={styles.logoMenuCli}><p></p></div>
                <div id={styles["voltar"]}><a href="./tMenuCli" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>
        </div>
    )
}

export default TelaEnderecoCliente
