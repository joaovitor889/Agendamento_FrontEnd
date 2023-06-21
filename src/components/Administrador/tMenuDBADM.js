import styles from './tMenuDBADM.module.css';
//import logo from '../../img/logo.PNG';

import React, { useState, useEffect, useRef } from "react";

import Voltar from '../../icones/chevron-left.png';

//import Perfil from '../../icones/perfilCliente.png';

import agFetch from '../../axios/config.js';

import './menHamburger.css';

import { Link, useParams } from 'react-router-dom';

//import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";

import FotoHor from './FotoPerfilAdm/fotoAdmHor';
import FotoLat from './FotoPerfilAdm/fotoAdmLat';
import FotoMen from './FotoPerfilAdm/fotoAdmMen';

import { decodeToken } from 'react-jwt';

const TelaDadosBasicosCliente = () => {

    document.title = "Dados Básicos";

    const { token } = useParams();
    const { uid } = useParams();

    const converToken = decodeToken(token);

    const userID = converToken.id;

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

    const [nome, setNome] = useState();
    const [cpf, setCPF] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();

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

    const cmpCPF = useRef(null);
    const cmpTelefone = useRef(null);

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cpf = cmpCPF.current;
        const telefone = cmpTelefone.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (cpf) {
            cpf.addEventListener('wheel', bloquearRolagem);
        }

        if (telefone) {
            telefone.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (cpf) {
                cpf.removeEventListener('wheel', bloquearRolagem);
            }

            if (telefone) {
                telefone.removeEventListener('wheel', bloquearRolagem);
            }
        };
    }, []);

    //Requisicoes com a API
    useEffect(() => {
        //pegando os dados do usuário
        async function PegaUser() {
            try {
                const userResponse = await agFetch.get(`/proprietarios/pegarUm?id=${userID}`);
                const nome = userResponse.data.nome;
                const cpf = userResponse.data.cpf;
                const telefone = userResponse.data.telefone;
                const email = userResponse.data.email;

                //alert(JSON.stringify({nome, cpf, telNum, email}));
                setNome(nome);
                setCPF(cpf);
                setTelefone(telefone);
                setEmail(email);
            } catch (error) {
                console.log(error);
            }
        }

        PegaUser();
    }, []);

    const atualizarAdm = async (nome, telefone) => {
        const tel = "" + telefone;
        const txtData = {
            nome: nome,
            telefone: tel
        }

        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const updAdmResponse = await agFetch.patch('/proprietarios/update', txtData, { headers });

            if (updAdmResponse.status >= 200 && updAdmResponse.status <= 299) {
                alert("Dados Atualizados com Sucesso!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateAdm = async (e) => {
        e.preventDefault();

        atualizarAdm(nome, telefone);
    };



    return (
        <div className={styles.fDBCliente}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
                        <div id={styles["textoLL"]}>
                            <Link to={`/tMenuDBADM/${token}/${uid}`}>
                                <li style={{ color: '#000' }}><p>Dados Básicos</p></li>
                            </Link>

                            {/*<Link to='/tMenuEnderecoADM' target = "_blank" rel="noreferrer">*/}
                            <Link to={`/tMenuEnderecoADM/${token}/${uid}`}>
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to={`/tMenuFotoADM/${token}/${uid}`}>
                                <li><p>Foto</p></li>
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
                <h2><center>Dados Básicos (ADM)</center></h2>
                <form id={styles["formDB"]} onSubmit={(e) => updateAdm(e)}>
                    <input
                        type="text"
                        placeholder="*Nome:"
                        title="Digite o seu nome"
                        name="nome"
                        id={styles["nome"]}
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /> <br></br>
                    <input type="text"
                        placeholder="*CPF:"
                        title="Digite o seu CPF"
                        name="cpf" id={styles["cpf"]}
                        maxLength="14"
                        onKeyPress={(event) => {
                            const allowedChars = /[0-9]/;
                            const inputValue = event.target.value;
                            const key = event.key;

                            if (!allowedChars.test(key) || inputValue.length >= 14 || key === '.' || key === '-') {
                                event.preventDefault();
                            } else if (inputValue.length === 3 || inputValue.length === 7) {
                                event.target.value = inputValue + ".";
                            } else if (inputValue.length === 11) {
                                event.target.value = inputValue + "-";
                            }
                        }}
                        ref={cmpCPF}
                        required
                        value={cpf}
                        disabled
                    />

                    <input type="text"
                        placeholder="*Telefone:"
                        title="Digite o seu Telefone"
                        name="tel" id={styles["tel"]}
                        maxLength="15"
                        onKeyPress={(event) => {
                            const inputValue = event.target.value + event.key;
                            const isValidKey = /\d/.test(event.key);
                            const isMaxLengthReached = inputValue.length >= event.target.maxLength;

                            if (!isValidKey || isMaxLengthReached) {
                                event.preventDefault();
                            }

                            if (inputValue.length === 1 && isValidKey) {
                                event.target.value = `(${inputValue}`;
                                event.preventDefault();
                            } else if (inputValue.length === 4 && isValidKey) {
                                event.target.value = `${event.target.value}) ${inputValue.substr(1)}`;
                                event.preventDefault();
                            } else if (inputValue.length === 11 && isValidKey) {
                                const areaCode = inputValue.substr(1, 2);
                                const firstPart = inputValue.substr(5, 4);
                                const secondPart = inputValue.substr(10, 4);
                                event.target.value = `(${areaCode}) ${firstPart}-${secondPart}`;
                                event.preventDefault();
                            }
                        }}
                        ref={cmpTelefone}
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />

                    <input type="email"
                        placeholder="*E-mail:"
                        title="Digite o seu E-mail"
                        name="email"
                        id={styles["email"]}
                        required
                        value={email}
                        disabled
                    //style={{ display: 'none' }}
                    //disabled
                    /> <br></br>
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

                        <ul id="uMenHamburger">
                            <FotoMen />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
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
                            <li>
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

export default TelaDadosBasicosCliente