import './tCadastroAdm.css';

import  Logo from '../../img/logo-site.png'
import Senha  from '../../img/Lock.png'
import Email from '../../img/Mail.png'
import User from '../../img/User.png'
import Doc from '../../img/Profiles.png'

const telaCadastroAdm = () => {
    document.title = "CadastroAdm";

    return(
        <div className="fCadastroAdm">
            <div className='container'>
                <div className='logo'>
                <br/>
                <br/>
                <br/>
                <img src={Logo} alt="Logo do site" />
                </div>
                <div className='campo-de-Cadastro'>
                    <div className='butoes'>
                    <a href="/" className='Login'>Login</a>
                    <a href="/" className='Cadastro'>Cadastro</a>
                    </div>
                    <div className='formulario'>
                        <form  id ="formCadastroAdm">
                            <div className='User'>
                                <img src={User} alt="" />
                                <input type="User" placeholder='Usuário' title='Digite seu Usuário'/>
                            </div>
                            <div className='Documento'>
                                <img src={Doc} alt="" />
                                <input type="Document" placeholder='CPF' maxLength = "11" title='Digite seu CPF'/>
                            </div>
                            <div className='E-mail'>
                                <img src={Email} alt="" />
                                <input type="email" placeholder='E-mail' title='Digite seu E-mail'/>
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Senha' title='Digite sua senha'/>
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Confirmar Senha' title='Confirme sua senha'/>
                            </div>
                                <input type = "submit" id = "btnCadastro" name = "btnLogin" onClick={() => alert('Entra na sua conta se os dados estiverem corretos!')} value = "Cadastrar" />                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default telaCadastroAdm