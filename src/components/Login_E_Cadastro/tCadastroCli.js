import styles from './tCadastroCli.module.css';
//import logo from '../../img/logo.PNG';


const telaCadastroUsuario = () => {

    document.title = "Cadastrar Cliente";

    const handleChange = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength);          
        }      
    }

    return (
        <div className = {styles.fCadCliente}> 
            <div className = {styles.fCadastro}>
                <nav id = {styles["cabecalho"]}>
                    <p>Shostners & Shostners</p>
                </nav>
                <div className = {styles.cadCliLogo}>Cadastro de Cliente</div>
                <div className = {styles.container}>
                    <div className = {styles.row}>
                        <div className = {styles.fundo}>
                            <form  id = {styles["formCadastro"]}>
                                <div className = {styles.entrada}>                                    
                                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id="nome" required />
                                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id="sobrenome" required />                                    
                                    <input type="number" 
                                        placeholder="*CPF:" 
                                        title="Digite o seu CPF"
                                        name="cpf" id="cpf" 
                                        maxLength="11" 
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                        }}}
                                        onChange = {handleChange} required />                                    
                                    
                                    <input type="number" 
                                        placeholder="Telefone:" 
                                        title="Digite o seu Telefone" 
                                        name="tel" 
                                        id="tel" 
                                        maxLength="11"
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                        }}} 
                                        onChange = {handleChange}/>
                                    <input type="email" placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" required />
                                    <div className="senha">
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required />
                                    </div>

                                </div>
                                <div className = {styles.rodape}>
                                    <span className = {styles.condicoes}>
                                        <input type="checkbox" id = {styles["termos"]} required />
                                        <a href="/" target={'_blank'}>Aceitar termos</a>
                                    </span>
                                    <div className = {styles.botoes}>
                                        <input type="submit" id = {styles["btnCadastro"]} name="btnCadastro" onClick={() => alert('Cadastra Dados!')} value="Cadastrar" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {styles.rodFundo}></div>
        </div>
    )
}

export default telaCadastroUsuario