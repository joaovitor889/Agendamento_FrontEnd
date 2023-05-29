import styles from './tCadFunc.module.css';
import menu from '../../icones/chevron-left.png';
import perfil from  '../../img/perfil.png'


const telaCadFunc = () => {

    document.title = "Cadastrar Funcionário";

    return (
        <div className={styles.fCadFunc}>
            <div className={styles.body_header}>
                <div className={styles.esquerda}>
                    <img src = {menu} alt = "retunr"  className='sidebar_btn'/>
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src= {perfil} alt="notificar" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </div>
            {/* final do header */}
            <div className={styles.Container}>
                    <h2>Cadastro de Funcionário</h2>
                    <br/>
                    <div className={styles.Container_DB}>
                        <input type="text" className={styles.dados_basicos} placeholder='Nome:'/>
                        <input type="text" className={styles.dados_basicos} placeholder='Sobrenome:'/>
                        <input type="text" className={styles.dados_basicos} placeholder='E-mail:'/>
                        <input type="text" className={styles.dados_basicos} placeholder='Telefone:'/>
                    </div>
                    <div className={styles.endereco}>
                        <input type="text" className={styles.cep} placeholder='CEP'/>
                        <input type="text" className={styles.rua} placeholder='Rua'/>
                        <input type="text" className={styles.bairro} placeholder='Bairro'/>
                        <input type="text" className={styles.cidade} placeholder='Cidade'/>
                        <input type="text" className={styles.estado} placeholder='Estado'/>
                    </div>
                    <div>
                        <input type="text" className={styles.documentos} placeholder='RG:' />
                        <input type="text" className={styles.documentos} placeholder='CPF:' />
                    </div>
                    <div>
                        <div className={styles.horarios}>

                        </div>
                        <div className={styles.funcoes}>

                        </div>
                        <div className={styles.senhas}>
                            <input type="text" className={styles.senhas} placeholder='Senha'/>
                            <input type="text" className={styles.senhas} placeholder='Confirmar Senha'/>
                        </div>
                    </div>
            </div>
     
        </div>
    )
        
        
}

export default telaCadFunc