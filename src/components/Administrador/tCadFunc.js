import styles from './tCadFunc.module.css';
//import menu from '../../icones/chevron-left.png';
import perfil from '../../img/perfil.png';

//import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

const TelaCadFunc = () => {

    document.title = "Cadastrar Funcionário";

    const navigate = useNavigate();

    /*const signup = async (nome, telefone, cpf, email, senha) => {
        navigate("/tLoginFunc");
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Executa a função de cadastro e vai para a tela de Login")

        //testa se os dados foram pegos
        //alert(JSON.stringify({ nome, telefone, cpf, email, senha }));

        // Chamar a função de cadastro
        //signup(nome, telefone, cpf, email, senha);
    };

    return (
        <div className={styles.fCadFunc}>
            <div className={styles.body_header}>
                <div className={styles.esquerda}>
                    {/*<img src={menu} alt="retunr" className='sidebar_btn' />*/}
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src={perfil} alt="notificar" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </div>
            {/* final do header */}
            <div className={styles.Container}>
                <h2>Cadastro de Funcionário</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className={styles.Container_DB}>
                        <input type="text" className={styles.dados_basicos} placeholder='Nome:' />
                        <input type="text" className={styles.dados_basicos} placeholder='Sobrenome:' />
                        <input type="text" className={styles.dados_basicos} placeholder='E-mail:' />
                        <input type="text" className={styles.dados_basicos} placeholder='Telefone:' />
                    </div>
                    <div className={styles.endereco}>
                        <input type="text" className={styles.cep} placeholder='CEP' />
                        <input type="text" className={styles.rua} placeholder='Rua' />
                        <input type="text" className={styles.bairro} placeholder='Bairro' />
                        <input type="text" className={styles.cidade} placeholder='Cidade' />
                        <input type="text" className={styles.estado} placeholder='Estado' />
                    </div>
                    <div className={styles.doc}>
                        {/*<input type="text" className={styles.documentos} placeholder='RG:' />*/}
                        <input type="text" className={styles.documentos} placeholder='CPF:' />
                    </div>
                    <div className={styles.final}>
                        <div className={styles.horarios}>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Segunda  inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Terça inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Quarta  inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Quinta  inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Sexta  inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Sábado  inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Domingo  inicio</p>
                                <input type="time" className={styles.hora} />
                                <p>final</p>
                                <input type="time" className={styles.hora} />
                            </div>
                        </div>
                        <div className={styles.funcoes}>
                            <h5>Funções do funcionário</h5>
                            <select name="cars" className={styles.texto}>
                                <option value="corte">Serviços</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                            </select>
                            <button>Adicionar</button>
                            <div className={styles.atividades}></div>
                        </div>
                        <div className={styles.senhas}>
                            <input type="text" className={styles.senha} placeholder='Senha' />
                            <input type="text" className={styles.senha} placeholder='Confirmar Senha' />
                        </div>
                    </div>
                    <button className={styles.cadfunc}>Cadastrar</button>
                </form>
            </div>

        </div>
    )


}

export default TelaCadFunc