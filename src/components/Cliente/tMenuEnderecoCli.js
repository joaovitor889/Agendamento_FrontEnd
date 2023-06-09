import styles from './tMenuEnderecoCli.module.css';

import Voltar from '../../icones/chevron-left.png';

import menStyle from './menHamburgerCli.module.css';

import React, { useState, useEffect, useRef } from "react";

import agFetch from '../../axios/config.js';

import { useForm } from "react-hook-form";

import { Link, useParams } from 'react-router-dom';

//foto de perfil
import FotoHor from './FotoPerfilCliente/fotoClienteHor';
import FotoLat from './FotoPerfilCliente/fotoClienteLat';
import FotoMen from './FotoPerfilCliente/fotoClienteMen';

import { decodeToken } from 'react-jwt';


const TelaEnderecoCliente = () => {
    document.title = "Endereço do Cliente";

    const { token } = useParams();
    const { uid } = useParams();
    const converToken = decodeToken(token);

    const userID = converToken.id;

    const [backgroundColor, setBackgroundColor] = useState('');

    // Programação do Menu de Hamburger
    const [burgerClass, setBurgerClass] = useState('burger-bar');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    };

    useEffect(() => {
        setBurgerClass('burger-bar');
        setMenuClass('menuHidden');
        setIsMenuClicked(false);
    }, [])

    const closeMenu = () => {
        setBurgerClass('burger-bar');
        setMenuClass('menuHidden');
        setIsMenuClicked(false);
    };

    //nome da empresa
    const [nomeEmp, setNomeEmp] = useState();

    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmp(empResponse.data.nome);
                setBackgroundColor(empResponse.data.tema);
                const divLat = document.getElementById(styles.menuLatCli);
                if (divLat) {
                    divLat.style.backgroundColor = empResponse.data.tema;
                }
                const divMen = document.getElementsByClassName(menStyle.menu);

                if (divMen.length > 0) {
                    divMen[0].style.backgroundColor = empResponse.data.tema;
                }
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    const fcep = useRef(null);
    const fnum = useRef(null);


    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cep = fcep.current;
        const num = fnum.current;
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
    }, []);

    //API do CEP
    const { register, setValue } = useForm();

    //Campos da API
    const [jscep, setCEP] = useState("");
    const [jsrua, setRua] = useState("");
    const [jsnum, setNum] = useState("");
    const [jscomp, setComp] = useState("");
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

                setCEP(cep);
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUF(data.uf);
            });
    }

    //Requisicoes com a API
    useEffect(() => {
        //pegando os dados do usuário
        async function PegaUser() {
            try {
                const userResponse = await agFetch.get(`/cliente/pegarPorId?id=${userID}`);
                const cep = userResponse.data.CEP;
                const rua = userResponse.data.logradouro;
                const num = userResponse.data.numero;
                const comp = userResponse.data.complemento;
                const bairro = userResponse.data.bairro;
                const cidade = userResponse.data.cidade;
                const estado = userResponse.data.uf;

                setCEP(cep);
                setRua(rua);
                setNum(num);
                setComp(comp);
                setBairro(bairro);
                setCidade(cidade);
                setUF(estado);


                //alert(JSON.stringify({cep, rua, num, comp, bairro, cidade, estado}));

            } catch (error) {
                console.log(error);
            }
        }

        PegaUser();
    }, [userID]);

    const atualizaEndereco = async (jscep, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf) => {
        const convCEP = "" + jscep;
        const txtData = {
            uf: jseuf,
            cidade: jscidade,
            bairro: jsbairro,
            logradouro: jsrua,
            numero: jsnum,
            complemento: jscomp,
            CEP: convCEP
        }

        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const updCliResponse = await agFetch.patch('/cliente/update', txtData, { headers });

            if (updCliResponse.status >= 200 && updCliResponse.status <= 299) {
                alert("Dados Atualizados com Sucesso!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateEndereco = (e) => {
        e.preventDefault();

        const valCep = jscep;

        let qtdCep = parseInt(valCep).length;
        if (qtdCep < 8) {
            alert("CEP Inválido!");
            fcep.current.focus();
        } else {
            atualizaEndereco(jscep, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf);
        }

        //alert(JSON.stringify({jscep, jsrua, jsnum, jscomp, jsbairro, jscidade, jseuf}));
    }



    return (
        <div className={styles.fDBCliente} style={{ backgroundColor }}>
            <div id={styles.menuLatCli}>
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

            <div id={styles["conteudoCli"]} style={{ backgroundColor }}>
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
                                ref={fcep}
                                onBlur={checkCEP}
                                onChange={(e) => setCEP(e.target.value)}
                                required
                                value={jscep} />
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Rua:"
                                title="Digite a sua Rua"
                                name="rua" id={styles["rua"]}
                                className={styles.segColuna}
                                {...register("rua")}
                                onChange={(e) => setRua(e.target.value)}
                                required
                                value={jsrua} />
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
                                ref={fnum}
                                onChange={(e) => setNum(e.target.value)}
                                required
                                value={jsnum} /> <br></br>
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Complemento:"
                                title="Digite o seu Complemento"
                                name="comp" id={styles["comple"]}
                                className={styles.segColuna}
                                onChange={(e) => setComp(e.target.value)}
                                value={jscomp} /> <br></br>
                        </div>
                    </div>
                    <div className={styles.linhaUnica}>
                        <input type="text"
                            placeholder="Bairro:"
                            title="Digite o seu bairro"
                            name="bairro"
                            id={styles["bairro"]}
                            {...register("bairro")}
                            onChange={(e) => setBairro(e.target.value)}
                            required
                            value={jsbairro} />
                        <input type="text"
                            placeholder="Cidade:"
                            title="Digite a sua Cidade"
                            name="cidade"
                            id={styles["cidade"]}
                            {...register("cidade")}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                            value={jscidade} />
                        <input type="text"
                            placeholder="Estado:"
                            title="Digite o seu Estado"
                            name="estado"
                            id={styles["estado"]}
                            {...register("uf")}
                            onChange={(e) => setUF(e.target.value)}
                            required
                            value={jseuf} />
                    </div>
                    <div id="btnDBSalvar">
                        <input type="submit" id={styles["btnSalvarDDB"]} name="btnSalvarDDB" value="Salvar" />
                    </div>
                </form>
            </div>

            <div id={styles["menuHorCli"]} style={{ backgroundColor }}>
                {/*Menu Mobile*/}
                <div className={menStyle.menHamburger}>
                    <div className={menStyle['burger-menu']} onClick={updateMenu}>
                        <div className={menStyle['burger-bar']}></div>
                        <div className={menStyle['burger-bar']}></div>
                        <div className={menStyle['burger-bar']}></div>
                    </div>
                    <div className={`${menStyle.menu} ${menStyle[menuClass]}`}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div onClick={closeMenu} className={menStyle.fechaMenu}>
                            <p>+</p>
                        </div>

                        <ul id="uMenHamburger">
                            <FotoMen />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <li>
                                <p>
                                    <Link to={`/tMenuDBCli/${token}/${uid}`}>Dados Básicos</Link>
                                </p>
                            </li>
                            <li style={{ backgroundColor: 'rgba(80, 80, 80, 0.5)' }}>
                                <p>
                                    <Link to={`/tMenuEnderecoCli/${token}/${uid}`}>Endereço</Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuFotoCli/${token}/${uid}`}>Foto</Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to={`/tMenuCli/${token}/${uid}`}>Voltar ao Menu</Link>
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

export default TelaEnderecoCliente