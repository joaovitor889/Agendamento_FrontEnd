import styles from './tMenuDBCli.module.css';
//import logo from '../../img/logo.PNG';

import React, { useState } from "react";

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';

import './menHamburger.css';

const TelaDadosBasicosCliente = () => {

    document.title = "Dados Básicos";

    //Limite de Caracteres
    const handleChange = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength);
        }
    }

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
                <form id={styles["formDB"]}>
                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id={styles["nome"]} required /> <br></br>
                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id={styles["sobrenome"]} required /> <br></br>
                    <input type="number" 
                        placeholder="*CPF:" 
                        title="Digite o seu CPF" 
                        name="cpf" id={styles["cpf"]} 
                        maxLength="11" 
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                        }}}
                        onChange={handleChange} required />
                    
                    <input type="number" 
                        placeholder="Telefone:" 
                        title="Digite o seu Telefone" 
                        name="tel" id={styles["tel"]} 
                        maxLength="11" 
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                        }}}
                        onChange={handleChange} />
                    
                    <input type="email" placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id={styles["email"]} required /> <br></br>
                    <div id="btnDBSalvar">
                        <input type="submit" id={styles["btnSalvarDDB"]} name="btnSalvarDDB" onClick={() => alert('Dados Salvos!')} value="Salvar" />
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
                <div id={styles["voltar"]}><a href="./tMenuCli" rel="noreferrer"><img src={Voltar} alt="voltar" title="Voltar" /></a></div>
            </div>

        </div>
    )
}

export default TelaDadosBasicosCliente