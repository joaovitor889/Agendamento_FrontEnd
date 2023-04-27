import styles from './tMenuEnderecoCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';

import './menHamburger.css';

import React, { useState } from "react";


const TelaEnderecoCliente = () => {

    document.title = "Endereço do Cliente";

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
                            <a href="./tMenuDBCli" rel="noreferrer">
                                <li><p>Dados Básicos</p></li>
                            </a>

                            <a href="./tMenuEnderecoCli" rel="noreferrer">
                                <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}><p>Endereço</p></li>
                            </a>

                            <a href="./tMenuFotoCli" rel="noreferrer">
                                <li><p>Foto</p></li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>

            <div id={styles["conteudoCli"]}>
                <h2><center>Endereço (Cliente)</center></h2>
                <form id={styles["formEN"]}>
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
                                        || event.target.value.length > event.target.maxLength -1) {
                                        event.preventDefault();
                                    }                                            
                                }} />
                        </div>
                        <div>
                            <input type="text" placeholder="Rua:" title="Digite a sua Rua" name="rua" id={styles["rua"]} className={styles.segColuna} />
                        </div>
                    </div>
                    <div className={styles.linha}>
                        <div>
                            <input type="number" 
                                placeholder="Número:" 
                                title="Digite o seu Número" 
                                name="numero" 
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                }}}
                                id={styles["numero"]} /> <br></br>
                        </div>
                        <div>
                            <input type="text" placeholder="Complemento:" title="Digite o seu Complemento" name="comple" id={styles["comple"]} className={styles.segColuna} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text" placeholder="Bairro:" title="Digite o seu Bairro" name="bairro" id={styles["bairro"]} /> <br></br>
                        <input type="text" placeholder="Cidade:" title="Digite a sua Cidade" name="cidade" id={styles["cidade"]} /> <br></br>
                        <input type="text" placeholder="Estado:" title="Digite o seu Estado" name="estado" id={styles["estado"]} /> <br></br>
                    </div>
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
                            <li>
                                <p>
                                <a href="./tMenuDBCli" rel="noreferrer">
                                        Dados Básicos
                                    </a>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
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

export default TelaEnderecoCliente