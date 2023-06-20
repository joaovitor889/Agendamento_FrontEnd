import './tLoginFunc.css';

import FotoEmpresa from './fotoEmpresa';

import { useState, useEffect } from "react";

import agFetch from '../../axios/config';

import { useNavigate, useParams } from "react-router-dom";

const TelaLogin = () => {

    document.title = "Login Funcionario";

    const { uid } = useParams();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();

    //Requisicoes com a API

    //nome da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState();

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

    const signin = async (email, senha) => {
        //alert(JSON.stringify({email, senha}));
        try {
            const response = await agFetch.post('/auth/funcionario', {
                email: email,
                senha: senha,
                estabeUID: uid
            });

            if (response.status >= 200 && response.status <= 299) {
                const token = response.data.token;
                console.log("Logou no Funcionario" + token);

                try {
                    if (response.status >= 200 && response.status <= 299) {
                        navigate(`/tMenuProfis/${token}/${uid}`);
                    } else {
                        alert("Houve um problema ao obter o Funcionário");
                    }
                } catch (error) {
                    console.error(error);
                    alert("Erro ao buscar Funcionário");
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

    const loginFunc = (e) => {
        e.preventDefault();
        signin(email, senha);
    }

    return (
        <div className="fLoginFunc">
            <div className="containerFunc">
                <div className="row">
                    <div className="logo"><h1 title="Bem-Vindo!"><center>{nomeEmpresa}</center></h1></div>
                </div>
                <FotoEmpresa />
                <div className="row">
                    <div className="fundoFunc">
                        <form id="formLogin" onSubmit={loginFunc}>
                            <h1 title="Bem-Vindo!"><center>Login de Funcionário</center></h1>
                            <div className="entrada">
                                <input type="email" placeholder="E-mail" title="Digite seu E-mail" required onChange={(e) => {setEmail(e.target.value)}} /><br></br><br></br>
                                <input type="password" placeholder="Senha" title="Digite sua Senha" required onChange={(e) => {setSenha(e.target.value)}} />
                            </div>
                            <div className="links">
                                {/*<a href = "./tLogin.js">Criar uma conta</a><br></br>*/}
                                <a href="./tEsqueceuSenhaFunc" rel="noreferrer">Esqueceu a senha?</a>
                            </div><br></br>
                            <div className="botoes">
                                <input type="submit" id="btnLoginFunc" name="btnLogin" onClick={() => alert('Entra na sua conta se os dados estiverem corretos!')} value="Login" /><br></br>
                                {/*<center><div id="voltFunc"><button type="button"
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
