import styles from './tLoginCli.css';

import { useState, useEffect } from "react";

import { useNavigate, useParams } from 'react-router-dom';

import agFetch from '../../axios/config.js';

import FotoEmpresa from './fotoEmpresa';

const TelaLogin = () => {

    document.title = "Login Cliente";

    const { uid } = useParams();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();

    const [nomeEmpresa, setNomeEmpresa] = useState();

    //nome da empresa
    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmpresa(empResponse.data.nome);
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    //Requisicoes com a API
    const signin = async (email, senha) => {
        //alert(JSON.stringify({email, senha}));
        try {
            const response = await agFetch.post('/auth/cliente', {
                email: email,
                senha: senha,
                estabeUID: uid
            });

            if (response.status >= 200 && response.status <= 299) {
                const token = response.data.token;
                console.log("Logou no Cliente" + token);

                try {
                    if (response.status >= 200 && response.status <= 299) {
                        navigate(`/tMenuCli/${token}/${uid}`);
                    } else {
                        alert("Houve um problema ao obter o cliente");
                    }
                } catch (error) {
                    console.error(error);
                    alert("Erro ao buscar cliente");
                }
            } else if (response.status === 401) {
                alert("Senha ou email inválido");
            } else {
                alert("Houve um problema ao logar, tente novamente mais tarde");
            }
        } catch (error) {
            console.error(error);
            alert("Dados incorretos!");
        }
    };

    const loginCli = async (e) => {
        e.preventDefault();
        signin(email, senha);
    }

    const lnkCad = '/tCadastroCli/' + uid;

    return (
        <div className="fLogin">
            <div className={styles.container}>
                <div className="row">
                    <div className="logoLoginCli"><h1 title="Bem-Vindo!"><center>{nomeEmpresa}</center></h1></div>
                </div>
                <FotoEmpresa />
                <div className={styles.row}>
                    <div className="fundo">
                        <form id={styles["formLogin"]} onSubmit={(e) => loginCli(e)}>
                            <h1 title="Bem-Vindo!"><center>Login</center></h1>
                            <div className="entrada">
                                <input type="email" placeholder="E-mail" title="Digite seu E-mail" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required /><br></br><br></br>
                                <input type="password" placeholder="Senha" title="Digite sua Senha" id="senha" name="senha" onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                            <div className="links">
                                <a href={lnkCad}>Criar uma conta</a><br></br>
                                <a href="./tEsqueceuSenhaCli">Esqueceu a senha?</a>
                            </div><br></br>
                            <div className="botoesLoginCli">
                                <input type="submit" id="btnLoginCli" name="btnLogin" value="Login" />
                                {/*<center><div id="voltCli"><button type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/'
                                    }}>Voltar
                                </button></div></center>*/}<br></br><br></br>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <p id="textoLateral">Powered by SNET</p>
        </div>
    )
}

export default TelaLogin
