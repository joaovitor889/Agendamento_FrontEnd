import styles from './tLoginCli.css';
import Logo from '../../img/logo.png';

import { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import authCli from '../../axios/configAuthCli.js';


const TelaLogin = () => {

    document.title = "Login Cliente";

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();

    //Requisicoes com a API

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_bd');


        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) {
                setUser(hasUser[0]);
                console.log(user);
            }
        }

        const cameFromMenu = localStorage.getItem('came_from_menu');
        if (cameFromMenu) {
            localStorage.removeItem('user_token');
            localStorage.removeItem('came_from_menu');
        }
        // Após a linha 39, adicione o seguinte código para executar o método delete
        authCli.delete('/auth/cliente')
            .then((response) => {
                console.log(response.data);
                // Faça o tratamento necessário após a exclusão dos dados authProp
            })
            .catch((error) => {
                console.error(error);
                //alert('Erro ao excluir os dados authProp!');
            });

    }, [user]);

    const signin = async (email, senha) => {
        //teste se os dados estao sendo enviados
        //alert(JSON.stringify({ email, senha }));

        const data = require('../../clientes/criar.json');

        // Verifique se há um objeto com o mesmo email e senha
        const user = data.find((obj) => obj.email === email && obj.senha === senha);

        if (user) {
            // Crie um token contendo o email e a senha do usuário
            //const token = Math.random().toString(36).substring(2);
            //const userToken = { token, email, senha };            

            // Faça uma requisição POST para gerar o token no servidor
            try {
                const token = Math.random().toString(36).substring(2);
                await authCli.post('/auth/cliente', { token, email, senha });
                // Armazene o token no localStorage
                localStorage.setItem('user_token', JSON.stringify({ token, email, senha }));

                navigate('/tMenuCli');
            } catch (error) {
                console.error(error);
                alert('Erro ao fazer login!');
            }
        } else {
            // Se os dados forem inválidas, exiba uma mensagem de erro 
            alert('Dados Inválidos!');
            return;
        }
    };

    const loginCli = async (e) => {
        e.preventDefault();
        localStorage.setItem('came_from_menu', 'true');
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
