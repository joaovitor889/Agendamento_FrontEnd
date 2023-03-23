import './tLogin.css';


const telaLogin = () => {

   document.title = "Login";

   return (        
        <div className = "fLogin">
            <div className="logo"><h1 title ="Bem-Vindo!">Shostners & shostners</h1></div>            
            <div className = "fundo">            
                <form id = "formLogin">    
                    <h1 title = "Bem-Vindo!">Login</h1>
                    <div className = "entrada">
                        <input type="email" placeholder="E-mail" title = "Digite seu email" required/><br></br><br></br>
                        <input type="password" placeholder="Senha" title = "Digite sua senha" required/>
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
   )
}

export default telaLogin