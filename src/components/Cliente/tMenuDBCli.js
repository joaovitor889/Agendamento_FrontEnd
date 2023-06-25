import styles from './tMenuDBCli.module.css';

import React, { useState, useEffect } from "react";

import { Link, useParams } from 'react-router-dom';

import Voltar from '../../icones/chevron-left.png';

import agFetch from '../../axios/config.js';

//foto de perfil
import FotoHor from './FotoPerfilCliente/fotoClienteHor';
import FotoLat from './FotoPerfilCliente/fotoClienteLat';
import FotoMen from './FotoPerfilCliente/fotoClienteMen';

import './menHamburger.css';

import { decodeToken } from 'react-jwt';

const TelaDadosBasicosCliente = () => {

    document.title = "Dados Básicos";

    const token = useParams().token;

    const cvToken = decodeToken(token);

    const userID = cvToken.id;

    const uid = useParams().uid;

    //Programação do Menu de Hamburger
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('');

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

    //Requisicoes com a API
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [compNome, setCompNome] = useState();
    const [cpf, setCPF] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();

    console.log(compNome);

    //nome da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState();

    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmpresa(empResponse.data.nome);
                setBackgroundColor(empResponse.data.tema)
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    //Requisicoes com a API
    useEffect(() => {
        //pegando os dados do usuário
        async function PegaUser() {
            try {
                const userResponse = await agFetch.get(`/cliente/pegarPorId?id=${userID}`);
                const nomeCompleto = userResponse.data.nome;
                const cpf = userResponse.data.cpf;
                const telefone = userResponse.data.telefone;
                const email = userResponse.data.email;

                //alert(JSON.stringify({nome, cpf, telNum, email}));
                if (nomeCompleto.includes(' ')) {
                    const primeiroEspaco = nomeCompleto.indexOf(' ');
                    const ultimoEspaco = nomeCompleto.lastIndexOf(' ');

                    const nome = nomeCompleto.substring(0, primeiroEspaco);
                    const sobrenome = nomeCompleto.substring(ultimoEspaco + 1);

                    setNome(nome);
                    setSobrenome(sobrenome);
                } else {
                    setNome(nomeCompleto);
                }
                setCPF(cpf);
                setTelefone(telefone);
                setEmail(email);
            } catch (error) {
                console.log(error);
            }
        }

        PegaUser();
    }, [userID]);

    const atualizarCli = async (nome, telefone) => {
        const tel = "" + telefone;
        const txtData = {
            nome: nome,
            telefone: tel
        }

        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const updCliResponse = await agFetch.patch('/cliente/update', txtData, { headers });

            if (updCliResponse.status >= 200 && updCliResponse.status <= 299) {
                alert("Dados Atualizados com Sucesso!");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            alert("Não foi possível atualizar os Dados!");
        }
    }

    const updateCli = async (e) => {
        e.preventDefault();
        if (nome !== null && sobrenome !== null) {
            const cmpNome = `${nome} ${sobrenome}`;
            setCompNome(cmpNome);
            //alert(JSON.stringify({ cmpNome, telefone }))
            
            atualizarCli(cmpNome, telefone);
        } else {
            //alert(JSON.stringify({ nome, telefone }))

            atualizarCli(nome, telefone);
        }
    };

    return (
        <div className={styles.fDBCliente} style={{backgroundColor}}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
                        <div id={styles["textoLL"]}>
                            <Link to={`/tMenuDBCli/${token}/${uid}`}>
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Dados Básicos</p></li>
                            </Link>

                            <Link to={`/tMenuEnderecoCli/${token}/${uid}`}>
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to={`/tMenuFotoCli/${token}/${uid}`}>
                                <li><p>Foto</p></li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]} style={{backgroundColor}}>
                <h2><center>Dados Básicos (Cliente)</center></h2>
                <form id={styles["formDB"]} onSubmit={(e) => updateCli(e)}>
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
                    <input
                        type="text"
                        placeholder="*Sobrenome:"
                        title="Digite o seu sobrenome"
                        name="sobrenome"
                        id={styles["sobrenome"]}
                        required
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
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

            <div id={styles["menuHorCli"]} style={{backgroundColor}}>

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
                            <li>
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
                <div className={styles.logoMenuCli}><p>{nomeEmpresa}</p></div>
                <div id={styles["voltar"]}><Link to={`/tMenuCli/${token}/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>

        </div>
    )
}

export default TelaDadosBasicosCliente