import styles from './tCadastroCli.module.css';

import { useState, useEffect, useRef } from "react";

import agFetch from '../../axios/config.js';

import { useNavigate } from 'react-router-dom';

import TermosUso from '../modal/tTermosUsoPrivacidade';

const TelaCadastroUsuario = () => {

    document.title = "Cadastrar Cliente";

    //Requisicoes com a API
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    const [openModalTermosUso, setOpenModalTermosUso] = useState(false);

    const fCPF = useRef(null);
    const fTelefone = useRef(null);
    const fEmail = useRef(null);

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

    const signup = async (nome, sobrenome, cpf, telefone, email, senha, confSenha) => {
        //teste se os dados estao sendo enviados
        //alert(JSON.stringify({ nome, sobrenome, cpf, telefone, email, senha, confSenha }));

        //logica
        try {
            // Crie um objeto com os dados do novo usuario
            const novoUsuario = {
                nome, 
                sobrenome, 
                cpf, 
                telefone, 
                email, 
                senha, 
                confSenha
            };

            // Faça a requisição POST para a API utilizando o Axios
            const response = await agFetch.post('/clientes/criar', novoUsuario);

            // Verifique a resposta da API e faça o redirecionamento se necessário
            if (response.status === 200 || response.status === 201) {
                alert("Dados cadastrados com sucesso!");
                navigate("/tLoginCli");
            }

            else if (response.status === 400) {
                alert("Dado digitato incorretamente!");
            }

            else if (response.status === 409) {
                alert("Dados únicos já cadastrados!");
            }

            else if (response.status === 401) {
                alert("Token Inválido!");
            }
            else {
                alert("Ocorreu um erro ao cadastrar o proprietário.");
            }
        } catch (error) {
            //alert("Ocorreu um erro na comunicação com o servidor.");

            let valErro = error.response.status;

            if (valErro === 400 || valErro === 409)
                alert("Telefone, CPF ou Email já cadastrados!");
            else 
                alert("Ocorreu um erro na comunicação com o servidor.");    
        }
    };

    const cadCli = async (e) => {
        e.preventDefault();

        if (senha !== confSenha) {
            alert('O campo senha e confirmar senha devem ser iguais!');
        }
        else {
            signup(nome, sobrenome, cpf, telefone, email, senha, confSenha);
            //console.log("submit", {nome, sobrenome, cpf, telefone, email, senha, confSenha, termos});

        }
    };

    return (
        <div className={styles.fCadCliente}>
            <div className={styles.fCadastro}>
                <nav id={styles["cabecalho"]}>
                    <p>Shostners & Shostners</p>
                </nav>
                <div className={styles.cadCliLogo}>Cadastro de Cliente</div>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.fundo}>
                            <form id={styles["formCadastro"]} onSubmit={(e) => cadCli(e)}>
                                <div className={styles.entrada}>
                                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id="sobrenome" value={sobrenome} required onChange={(e) => setSobrenome(e.target.value)} />
                                    <input type="number"
                                        ref={fCPF}
                                        placeholder="*CPF:"
                                        title="Digite o seu CPF"
                                        name="cpf" id="cpf"
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

                                    <input type="number"
                                        ref={fTelefone}
                                        placeholder="Telefone:"
                                        title="Digite o seu Telefone"
                                        name="tel"
                                        id="tel"
                                        maxLength="11"
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)
                                                || event.target.value.length > event.target.maxLength - 1) {
                                                event.preventDefault();
                                            }
                                        }}
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)} />
                                    <input type="email" ref={fEmail} placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className={styles.senha}>
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required value={confSenha} onChange={(e) => setConfSenha(e.target.value)} />
                                    </div>
                                </div>
                                <br></br>
                                <div className={styles.rodape}>
                                    <span className={styles.condicoes}>
                                        <input type="checkbox" id={styles["termos"]} required />
                                        <p onClick={() => {setOpenModalTermosUso(true)}}>Aceitar termos</p>
                                    </span>
                                    <div className={styles.botoes}>
                                        <input type="submit" id={styles["btnCadastro"]} name="btnCadastro" value="Cadastrar" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rodFundo}></div>
            <TermosUso isOpen={openModalTermosUso} setOpenModalTermosUso={() => setOpenModalTermosUso(!openModalTermosUso)}/>
        </div>
    )
}

export default TelaCadastroUsuario