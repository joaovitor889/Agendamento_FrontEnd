import './tLoginAdm.css';

<<<<<<< HEAD
import  Logo from '../../img/logo-site.png'
import Senha  from '../../img/Lock.png'
import Email from '../../img/Mail.png'

const telaLoginAdm = () => {
    
    document.title = "LoginAdm";

    return(
        <div className="fLoginAdm">
            <div className='container'>
                <div className='logo'>
                <br/>
                <br/>
                <br/>
                <img src={Logo} alt="Logo do site" />
                </div>
                <div className='campo-de-login'>
                    <div className='butoes'>
                    <a href="#" className='Login'>Login</a>
                    <a href="#" className='Cadastro'>Cadastro</a>
                    </div>
                    <div className='formulario'>
                        <form  id ="formLoginAdm">
                            <div className='E-mail'>
                                <img src={Email} alt="" />
                                <input type="email" placeholder='E-mail' title='Digite  seu E-mail'/>
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Senha' title='Digite sua senha'/>
                            </div>
                            <div className = "botoes">
                                <input type = "submit" id = "btnLogin" name = "btnLogin" onClick={() => alert('Entra na sua conta se os dados estiverem corretos!')} value = "Login" />                        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default telaLoginAdm
=======
const telaLoginAdministrador = () => {

    document.title = "Agendamento";
     
    return (
         <div className = "fAgendamento">
             <p>Tela de Login do Administrador</p>
         </div>
     )
 }
 
 export default telaLoginAdministrador
>>>>>>> 2f8636631ae049373d56461a2244e6b5879a34b6
