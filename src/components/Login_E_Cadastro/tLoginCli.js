import './tLoginCli.css';
import Logo from '../../img/Logo.png';


const telaLogin = () => {

   document.title = "Login Cliente";

   return (        
        <div className = "fLogin">
            <div className="container">
                <div className="row">
                    <div className="logoLoginCli"><h1 title ="Bem-Vindo!"><center>Shostners & shostners</center></h1></div>           
                </div>
                <div className="row" id = "imagem">
                    <img src = {Logo} alt = "Logo" />
                </div>
                <div className="row">
                    <div className = "fundo">            
                        <form id = "formLogin">    
                            <h1 title = "Bem-Vindo!"><center>Login</center></h1>
                            <div className = "entrada">
                                <input type="email" placeholder="E-mail" title = "Digite seu E-mail" id = "email" name = "email" required/><br></br><br></br>
                                <input type="password" placeholder="Senha" title = "Digite sua Senha" id = "senha" name = "senha" required/>
                            </div>
                            <div className = "links">
                                <a href = "./tCadastroCli">Criar uma conta</a><br></br>
                                <a href = "./tEsqueceuSenhaCli">Esqueceu a senha?</a>
                            </div><br></br>
                            <div className = "botoesLoginCli">
                                <input type = "submit" id = "btnLogin" name = "btnLogin" onClick={() => alert('Entra na sua conta se os dados estiverem corretos!')} value = "Login" />                        
                            </div>                             
                        </form>                        
                    </div>                    
                </div>                
            </div>
            <p id = "textoLateral">Powered by SNET</p>
        </div>
   )
}

export default telaLogin