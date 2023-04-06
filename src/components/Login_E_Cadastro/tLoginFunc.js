import './tLoginFunc.css';
import Logo from '../../img/Logo.png';


const telaLogin = () => {

   document.title = "Login Funcionario";

   return (        
        <div className = "fLogin">
            <div className="container">
                <div className="row">
                    <div className="logo"><h1 title ="Bem-Vindo!">Shostners & shostners</h1></div>           
                </div>
                <dv className="row" id = "imagem">
                    <img src = {Logo} alt = "Logo" />
                </dv>
                <div className="row">
                    <div className = "fundo">            
                        <form id = "formLogin">    
                            <h1 title = "Bem-Vindo!">Login de Funcionário</h1>
                            <div className = "entrada">
                                <input type="email" placeholder="E-mail" title = "Digite seu E-mail" required/><br></br><br></br>
                                <input type="password" placeholder="Senha" title = "Digite sua Senha" required/>
                            </div>
                            <div className = "links">
                                <a href = "./tLogin.js">Criar uma conta</a><br></br>
                                <a href = "./tLogin.js">Esqueceu a senha?</a>
                            </div><br></br>
                            <div className = "botoes">
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