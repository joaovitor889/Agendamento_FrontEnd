import './tLoginAdm.css';

import Logo from '../../img/logo-site.png';
import Senha from '../../img/Lock.png';
import Email from '../../img/Mail.png';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import agFetch from '../../axios/config.js';

const TelaLoginAdm = () => {

    document.title = "LoginAdm";

    const [cmpEmail, setEmail] = useState("");
    const [cmpSenha, setSenha] = useState("");

    const navigate = useNavigate();

    //Requisicoes com a API

    const signin = async (cmpEmail, cmpSenha) => {
        //teste se os dados estao sendo enviados
        //alert(JSON.stringify({ email, senha }));

        try {        
            const response = await agFetch.post('/auth/proprietario', {
              email: cmpEmail,
              senha: cmpSenha
            });
            
            
            
            if(response.status >= 200 &&  response.status <= 299) {
                const token = response.data.token; 
                //alert("Logou no Proprietário" + token);
                console.log("Logou no Proprietário" + token);
               
                //navigate('/tAgendamentosADM');
                navigate('/tPesqCli');
            }  else if(response.status === 401){
                alert("Senha ou email invalido");
            }else{
                alert("Houve um problema ao logar, tente mais tarde");
            }             

            //alert(token);
            
            /*const config = {
              headers: {
                Authorization: `Bearer ${token}`
              }
            };*/
        
//             const pegaToken = await agFetch.get('/auth/', config);


            /*if(.status === 200) {
                //alert("Logou no Proprietário");
                navigate('/tAgendamentosADM');
            } */               
          } catch (error) {
            console.error(error);
            alert("Dados Incorretos!");
          }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signin(cmpEmail, cmpSenha);
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
                                <a href="./tEsqueceuSenhaAdm">Esqueceu a senha?</a>
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
