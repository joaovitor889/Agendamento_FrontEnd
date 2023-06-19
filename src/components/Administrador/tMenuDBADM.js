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
<<<<<<< HEAD
    const { uid } = useParams();
=======

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5AZXhhbXBsZS5jb20iLCJpZCI6Miwicm9sZSI6IlByb3AiLCJpYXQiOjE2ODM4NDQ0NjcsImV4cCI6OTMzMTIwMDAwMDE2ODM4NTAwMDB9.Zr0_085Qp3mtxiapPztbt_YtzSUyiie7rjnB_ubEAm4";
>>>>>>> 5c9e6531e0b93cc29f03b784c846c125084782b0

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

    const [nome, setNome] = useState();
    const [cpf, setCPF] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();


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
                var remSimb = telefone.replace(/[\(\)\-\s]/g, '');
                const telNum = parseInt(remSimb);
                const email = userResponse.data.email;

                //alert(JSON.stringify({nome, cpf, telNum, email}));
                setNome(nome);
                setCPF(cpf);
                setTelefone(telNum);
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


    const  tDbAdm = '/tMenuDBADM/'+ token +'/'+ uid;
    const  tEndereco = '/tMenuEnderecoADM/'+ token +'/'+ uid;
    const  tFoto = '/tMenuFotoADM/'+ token +'/'+ uid;
    const  tEmpreendimento = '/tEmpreendimento/'+ token +'/'+ uid;
    const  tNovoEmpreendimento = '/tNovoEmpreendimento/'+ token +'/'+ uid;
    return (
        <div className={styles.fDBCliente}>
            <div id={styles["menuLatCli"]}>
                <div id={styles["menuDesk"]}>
                    <ul id={styles["ulDesk"]}>
                        <br></br>
                        <br></br>
                        <FotoLat />
                        <div id={styles["textoLL"]}>
<<<<<<< HEAD
                            <Link to={tDbAdm} rel="noreferrer">
=======
                            <Link to={`/tMenuDBADM/${token}/${uid}`}>
>>>>>>> 5c9e6531e0b93cc29f03b784c846c125084782b0
                                <li style={{ color: '#000' }}><p>Dados Básicos</p></li>
                            </Link>

                            {/*<Link to='/tMenuEnderecoADM' target = "_blank" rel="noreferrer">*/}
<<<<<<< HEAD
                            <Link to={tEndereco} rel="noreferrer">
                                <li><p>Endereço</p></li>
                            </Link>

                            <Link to={tFoto} rel="noreferrer">
                                <li><p>Foto</p></li>
                            </Link>

                            <Link to={tEmpreendimento} rel="noreferrer">
                                <li><p>Empreendimento</p></li>
                            </Link>
                            <Link to={tNovoEmpreendimento} rel="noreferrer">
=======
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
>>>>>>> 5c9e6531e0b93cc29f03b784c846c125084782b0
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
                        ref={cmpCPF}
                        required
                        value={cpf}
                        disabled
                    />

                    <input type="number"
                        placeholder="*Telefone:"
                        title="Digite o seu Telefone"
                        name="tel" id={styles["tel"]}
                        maxLength="11"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)
                                || event.target.value.length > event.target.maxLength - 1) {
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

                        <FotoMen />

                        <ul id="uMenHamburger">
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
                <div className={styles.logoMenuCli}><p>Shostners & shostners</p></div>
                <div id={styles["voltar"]}><Link to={`/tPesqFunc/${token}/${uid}`}><img src={Voltar} alt="voltar" title="Voltar" /></Link></div>
            </div>

        </div>
    )
}

export default TelaDadosBasicosCliente