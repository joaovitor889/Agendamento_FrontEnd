import styles from './tMenuDBCli.module.css';
//import logo from '../../img/logo.PNG';

import React, { useState } from "react";

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';

//import { useNavigate } from 'react-router-dom';

import './menHamburger.css';

const TelaDadosBasicosCliente = () => {

    document.title = "Dados Básicos";

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

    //Requisicoes com a API
    //const navigate = useNavigate();
    const dados = localStorage.getItem("users_bd");
    const valToken = localStorage.getItem('user_token');

    const JSONObject = JSON.parse(dados);
    const JSToken = JSON.parse(valToken);

    var nome, sobrenome, cpf, telefone, email;
    //var emailToken;

    //Mapeamento do objeto local
    try {
        for (let i = 0; i <= localStorage.length; i++) {
            if (JSONObject[i]['email'] === JSToken['email']) {
                //emailToken = JSToken['email'];
                nome = JSONObject[i]['nome'];
                sobrenome = JSONObject[i]['sobrenome'];
                cpf = JSONObject[i]['cpf'];
                telefone = JSONObject[i]['telefone'];
                email = JSONObject[i]['email'];
            }
        }
    } catch (error) {
        //coloquei este try catch para parar de reclamar de erro
    }

    //alert(nome);

    //Atualizacao dos dados
    /*const [altnome, setNome] = useState();
    const [altsobrenome, setSobrenome] = useState();
    const [altcpf, setCPF] = useState();
    const [alttelefone, setTelefone] = useState();
    const [altemail, setEmail] = useState();*/

    const updateCli = async (e) => {
        e.preventDefault();

        /*try {
            for (let i = 0; i <= localStorage.length; i++) {
                if (JSONObject[i]['email'] === emailToken) {
                    if (JSONObject[i]['nome'] !== altnome) {
                        JSONObject[i]['nome'] = altnome;                       
                        localStorage.setItem("users_bd", JSON.stringify(JSONObject));
                    }
                    else if (JSONObject[i]['sobrenome'] !== altsobrenome) {
                        JSONObject[i]['sobrenome'] = altsobrenome;
                        localStorage.setItem("users_bd", JSON.stringify(JSONObject));
                    }
                    else if (JSONObject[i]['cpf'] !== altcpf.toString()) {
                        JSONObject[i]['cpf'] = altcpf.toString();
                        localStorage.setItem("users_bd", JSON.stringify(JSONObject));
                    }
                    else if (JSONObject[i]['telefone'] !== alttelefone.toString()) {
                        JSONObject[i]['telefone'] = alttelefone.toString();
                        localStorage.setItem("users_bd", JSON.stringify(JSONObject));
                    }
                    else if (JSONObject[i]['email'] !== altemail) {
                        JSONObject[i]['email'] = altemail;
                        localStorage.setItem("users_bd", JSON.stringify(JSONObject));
                    }
                }
            }
        } catch (error) {
            //coloquei este try catch para parar de reclamar de erro
        }*/

        alert("Atualiza Dados!");
    };

    return (
        <div className={styles.fDBCliente}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <div id={styles["perfilLateral"]}>
                            <img src={Perfil} alt="perfil" />
                        </div>
                        <div id={styles["textoLL"]}>
                            <a href='./tMenuDBCli' rel="noreferrer">
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Dados Básicos</p></li>
                            </a>

                            <a href='./tMenuEnderecoCli' rel="noreferrer">
                                <li><p>Endereço</p></li>
                            </a>

                            <a href='./tMenuFotoCli' rel="noreferrer">
                                <li><p>Foto</p></li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Dados Básicos (Cliente)</center></h2>
                <form id={styles["formDB"]} onSubmit={(e) => updateCli(e)}>
                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id={styles["nome"]} defaultValue={nome} /*onChange={(e) => setNome(e.target.value)}*/ required /> <br></br>
                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id={styles["sobrenome"]} defaultValue={sobrenome} /*onChange={(e) => setSobrenome(e.target.value)}*/ required /> <br></br>
                    <input type="number"
                        placeholder="*CPF:"
                        title="Digite o seu CPF"
                        name="cpf" id={styles["cpf"]}
                        maxLength="11"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)
                                || event.target.value.length > event.target.maxLength - 1) {
                                event.preventDefault();
                            }
                        }}
                        defaultValue={cpf}
                        /*onChange={(e) => setCPF(e.target.value)}*/
                        required />

                    <input type="number"
                        placeholder="Telefone:"
                        title="Digite o seu Telefone"
                        name="tel" id={styles["tel"]}
                        maxLength="11"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)
                                || event.target.value.length > event.target.maxLength - 1) {
                                event.preventDefault();
                            }
                        }}
                        /*onChange={(e) => setTelefone(e.target.value)}*/
                        defaultValue={telefone}
                    />

                    <input type="email" placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id={styles["email"]} defaultValue={email} /*onChange={(e) => setEmail(e.target.value)}*/ required disabled /> <br></br>
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

                        <div id="perfilHamburger">
                            <img src={Perfil} alt="perfil" />
                        </div>

                        <ul id="uMenHamburger">
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <a href="./tMenuDBCli" rel="noreferrer">
                                        Dados Básicos
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="./tMenuEnderecoCli" rel="noreferrer">
                                        Endereço
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="./tMenuFotoCli" rel="noreferrer">
                                        Foto
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="./tMenuCli" rel="noreferrer">
                                        Voltar ao Menu
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.perfil}><img src={Perfil} alt="perfil" /></div>
                <div className={styles.notificacao}><a href="/"><img src={Notificacao} alt="notificacao" /></a></div>
                <div className={styles.logoMenuCli}><p></p></div>
                <div id={styles["voltar"]}><a href="/tMenuCli"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>

        </div>
    )
}

export default TelaDadosBasicosCliente