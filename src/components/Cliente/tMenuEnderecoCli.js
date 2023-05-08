import styles from './tMenuEnderecoCli.module.css';
//import logo from '../../img/logo.PNG';

import Voltar from '../../icones/chevron-left.png';

import Notificacao from '../../icones/Doorbell.png';

import Perfil from '../../icones/perfilCliente.png';

import './menHamburger.css';

import React, { useState, useRef } from "react";

import { useForm } from "react-hook-form";


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

    const [altcep, setCEP] = useState();
    const [altnum, setNum] = useState();
    const [altcomp, setComp] = useState();

    var jscep, jsrua, jsnum, jscomp, jsbairro, jscidade, jsuf;

    const altCep = (e) => {
        setCEP(e.target.value);
    }

    const altNum = (e) => {
        setNum(e.target.value);
    }

    const altComp = (e) => {
        setComp(e.target.value);
    }

    const dados = localStorage.getItem("users_bd");
    const valToken = localStorage.getItem('user_token');

    const JSONObject = JSON.parse(dados);
    const JSToken = JSON.parse(valToken);

    const inputCep = useRef();

    //Mapeamento do objeto local
    try {
        for (let i = 0; i <= localStorage.length; i++) {
            if (JSONObject[i]['email'] === JSToken['email']) {
                jscep = JSONObject[i]['cep'];
                jsrua = JSONObject[i]['rua'];
                jsnum = JSONObject[i]['num'];
                jscomp = JSONObject[i]['comp'];
                jsbairro = JSONObject[i]['bairro'];
                jscidade = JSONObject[i]['cidade'];
                jsuf = JSONObject[i]['uf'];
            }
        }
    } catch (error) {
        //coloquei este try catch para parar de reclamar de erro
    }

    //API do CEP
    const { register, setValue } = useForm();

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        //console.log(cep);

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                //console.log(JSON.stringify(data));                       
                setValue("rua", data.logradouro);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setValue("uf", data.uf);

                jscep = altcep;

                jsrua = data.logradouro;
                jsbairro = data.bairro;
                jscidade = data.localidade;
                jsuf = data.uf;
            });
    }

    const updateEndereco = (e) => {
        e.preventDefault();

        const valCep = inputCep.current.value;
        let qtdCep = valCep.length;
        if (qtdCep < 8) {
            alert("CEP Inválido!");
            //inputCep.current.focus();
        } else {
            try {
                for (let i = 0; i <= localStorage.length; i++) {
                    if (JSONObject[i]['email'] === JSToken['email']) {
                        jsnum = JSONObject[i]['num'];
                        jscomp = JSONObject[i]['comp'];
                        if (jsnum !== null && altnum != null)
                            jsnum = altnum;
                        if (jscomp !== null && altcomp != null)
                            jscomp = altcomp;
                        else
                            jscomp = "";

                        JSONObject[i]['cep'] = jscep;
                        JSONObject[i]['rua'] = jsrua;
                        JSONObject[i]['num'] = jsnum;
                        JSONObject[i]['comp'] = jscomp;
                        JSONObject[i]['bairro'] = jsbairro;
                        JSONObject[i]['cidade'] = jscidade;
                        JSONObject[i]['uf'] = jsuf;

                        localStorage.setItem("users_bd", JSON.stringify(JSONObject));
                        alert("Dados Atualizados com Sucesso!");
                        return;
                    }
                }
            } catch (error) {
                //coloquei este try catch para parar de reclamar de erro
            }

            alert("Dados Atualizados!");

            //alert(data.cep, data.rua, data.num, data.comp, data.bairro, data.cidade, data.uf);
        }
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
                                defaultValue={jscep}
                                value={altcep}
                                {...register("cep")}
                                ref={inputCep}
                                onBlur={checkCEP}
                                onChange={altCep}
                                required />
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Rua:"
                                title="Digite a sua Rua"
                                name="rua" id={styles["rua"]}
                                className={styles.segColuna}
                                {...register("rua")}
                                defaultValue={jsrua}
                                value={jsrua}
                                disabled />
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
                                {...register("num")}
                                defaultValue={jsnum}
                                value={altnum}
                                onChange={altNum}
                                required /> <br></br>
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Complemento:"
                                title="Digite o seu Complemento"
                                name="comp" id={styles["comple"]}
                                className={styles.segColuna}
                                {...register("comp")}
                                defaultValue={jscomp}
                                value={altcomp}
                                onChange={altComp} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text"
                            placeholder="Bairro:"
                            title="Digite o seu bairro"
                            name="bairro"
                            id={styles["bairro"]}
                            {...register("bairro")}
                            defaultValue={jsbairro}
                            value={jsbairro}
                            disabled /> <br></br>
                        <input type="text"
                            placeholder="Cidade:"
                            title="Digite a sua Cidade"
                            name="cidade"
                            id={styles["cidade"]}
                            {...register("cidade")}
                            defaultValue={jscidade}
                            value={jscidade}
                            disabled /> <br></br>
                        <input type="text"
                            placeholder="Estado:"
                            title="Digite o seu Estado"
                            name="estado"
                            id={styles["estado"]}
                            {...register("uf")}
                            defaultValue={jsuf}
                            value={jsuf}
                            disabled /> <br></br>
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