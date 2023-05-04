import styles from './tLoginCli.css';
import Logo from '../../img/Logo.png';

import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';


const TelaLogin = () => {

    document.title = "Login Cliente";

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();

    //Requisicoes com a API

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");
    
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (hasUser) setUser(hasUser[0]);
        }
      }, []);

    const signin = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser(user, { email, senha });
                navigate("/tMenuCli");
                return;
            } else {
                alert("E-mail ou senha incorretos");
            }
        } else {
            alert("Usuário não cadastrado!");
        }
    };

    const loginCli = async (e) => {
        e.preventDefault();

        signin(email, senha);
    }

    return (
        <div className="fLogin">
            <div className={styles.container}>
                <div className="row">
                    <div className="logoLoginCli"><h1 title="Bem-Vindo!"><center>Shostners & shostners</center></h1></div>
                </div>
                <div className="row" id="imagem">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.row}>
                    <div className="fundo">
                        <form id={styles["formLogin"]} onSubmit={(e) => loginCli(e)}>
                            <h1 title="Bem-Vindo!"><center>Login</center></h1>
                            <div className="entrada">
                                <input type="email" placeholder="E-mail" title="Digite seu E-mail" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required /><br></br><br></br>
                                <input type="password" placeholder="Senha" title="Digite sua Senha" id="senha" name="senha" onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                            <div className="links">
                                <a href="./tCadastroCli">Criar uma conta</a><br></br>
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