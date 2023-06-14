import styles from './tAgendarADM.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from '../../img/perfil.png';

//import Modal from '../modal/tCategoria';

import { useState, useEffect, useRef } from "react";

//import { Link, useNavigate } from "react-router-dom";


const TelaAgendarADM = () => {
    document.title = "Agendar";

    const uid = "jMQqNo";

    const [categoria, setCategoria] = useState();
    const [servico, setServico] = useState();
    const [profissional, setProfissional] = useState();
    const [data, setData] = useState();
    const [nome, setNome] = useState();
    const [telefone, setTelefone] = useState();
    const [cpf, setCPF] = useState();
    const [preco, setPreco] = useState();

    const fCPF = useRef(null);
    const fTelefone = useRef(null);

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cpf = fCPF.current;
        const telefone = fTelefone.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (cpf) {
            cpf.addEventListener('wheel', bloquearRolagem);
        }

        if (telefone) {
            telefone.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (cpf) {
                cpf.removeEventListener('wheel', bloquearRolagem);
            }

            if (telefone) {
                telefone.removeEventListener('wheel', bloquearRolagem);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Teste");
    }

    return (
        <div className={styles.fAgendar}>
            <input type='checkbox' id={styles["check"]} />
            {/* header  começo */}
            <div className={styles.body_header}>
                <div className={styles.esquerda}>
                    <label htmlFor={styles["check"]}>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </label>
                </div>
                <div className={styles.Centro}>
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className={styles.direita}>
                    <a href="/" className="btn_perfil">
                        <img src={perfil} alt="perfil" />
                    </a>
                    {/* <a href="/" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a> */}
                </div>
            </div>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <a href="/tPesqFunc">Profissionais</a>
                <a href="/tPesqCli">Clientes</a>
                <a href="/tAgendamentosADM">Agendamentos</a>
                <a href="/tAgendarADM">Agendar</a>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <a href="/tServADM">Serviços</a>
                <a href="/tMenuDBADM">Perfil</a>
                <a href="/">Sair</a>
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <main>
                <div className={styles.Container}>
                    <form onSubmit={handleSubmit}>
                        <h1>Agendar</h1>
                        <div className={styles.dados}>
                            <select name="cars" className={styles.texto}>
                                <option value="corte">Categorias</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                            </select>
                            <select name="cars" className={styles.texto}>
                                <option value="corte">Serviços</option>
                                <option value="corte">Corte</option>
                                <option value="sombrancelha">Sombrancelha</option>
                                <option value="manicure">Manicure</option>
                                <option value="hidratação">hidratação</option>
                            </select>

                            <select select name="func" className={styles.texto}>
                                <option value="corte">Profissional</option>
                                <option value="corte">João</option>
                                <option value="corte">Bruno</option>
                                <option value="sombrancelha">Antônio</option>
                                <option value="manicure">Guilherme</option>
                                <option value="hidratação">Jean</option>
                            </select>
                            <div className={styles.dois_campos}>
                                <input type="date" className={styles.texto} />
                                <select name="cars" className={styles.texto}>
                                    <option value="corte">Horários</option>
                                    <option value="corte">Corte</option>
                                    <option value="sombrancelha">Sombrancelha</option>
                                    <option value="manicure">Manicure</option>
                                    <option value="hidratação">hidratação</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.cliente}>
                            <input type="text" className={styles.texto} placeholder='Nome do Cliente' />
                            <input type="number"
                                ref={fTelefone}
                                placeholder="Telefone"
                                title="Digite o seu Telefone"
                                className={styles.texto}
                                maxLength="11"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} />
                            <input type="number"
                                ref={fCPF}
                                placeholder="CPF"
                                title="Digite o seu CPF"
                                className={styles.texto}
                                maxLength="11"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                required
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)} />
                        </div>
                        <div className={styles.finsh}>
                            <input type="text" className={styles.texto_demonstrativo} placeholder='Preço (R$)' disabled />
                            <br />
                            <input type="submit" name="btnCadastro" value="Agendar" />
                        </div>
                    </form>
                </div>
            </main>
            {/*<Modal isOpen={openModalCategoria} setOpenModalCategoria={() => setOpenModalCategoria(!openModalCategoria)}/>*/}
        </div>
    )
}

export default TelaAgendarADM