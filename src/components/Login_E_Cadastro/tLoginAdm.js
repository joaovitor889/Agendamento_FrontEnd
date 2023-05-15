import './tLoginAdm.css';

import Logo from '../../img/logo-site.png';
import Senha from '../../img/Lock.png';
import Email from '../../img/Mail.png';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import authprop from '../../axios/configAuthProp.js';

const TelaLoginAdm = () => {

    document.title = "LoginAdm";

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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

        authprop.delete('/auth/proprietario')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                //alert('Erro ao excluir os dados authProp!');
            });

    }, [user]);

    const signin = async (email, senha) => {
        //teste se os dados estao sendo enviados
        //alert(JSON.stringify({ email, senha }));

        const data = require('../../proprietarios/criar.json');

        // Verifique se há um objeto com o mesmo email e senha
        const user = data.find((obj) => obj.email === email && obj.senha === senha);

        if (user) {
            // Crie um token contendo o email e a senha do usuário
            //const token = Math.random().toString(36).substring(2);
            //const userToken = { token, email, senha };            

            // Faça uma requisição POST para gerar o token no servidor
            try {
                const token = Math.random().toString(36).substring(2);
                await authprop.post('/auth/proprietario', { token, email, senha });
                // Armazene o token no localStorage
                localStorage.setItem('user_token', JSON.stringify({ token, email, senha }));

                navigate('/tAgendamentosADM');
            } catch (error) {
                console.error(error);
                alert('Erro ao fazer login!');
            }
        } else {
            // Se os dados forem inválidas, exiba uma mensagem de erro 
            alert('Dados Inválidos!');
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('came_from_menu', 'true');
        signin(email, senha);
    }

    return (
        <div className="fLoginAdm">
            <div className='container'>
                <div className='logo'>
                    <br />
                    <br />
                    <br />
                    <img src={Logo} alt="Logo do site" />
                </div>
                <div className='campo-de-login'>
                    <div className='butoes'>
                        <a href="./tLoginAdm" className='Login'>Login</a>
                        <a href="./tCadastroAdm" className='Cadastro'>Cadastro</a>
                    </div>
                    <div className='formulario'>
                        <form id="formLoginAdm" onSubmit={handleSubmit}>
                            <div className='E-mail'>
                                <img src={Email} alt="" />
                                <input type="email" placeholder='E-mail' title='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Senha' title='Digite sua senha' onChange={(e) => setSenha(e.target.value)} />
                            </div>

                            <div className="linksLogADM">
                                <a href="./tEsqueceuSenhaCli">Esqueceu a senha?</a>
                            </div>

                            <input type="submit" id="btnLoginADM" name="btnLoginADM" value="Login" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TelaLoginAdm
