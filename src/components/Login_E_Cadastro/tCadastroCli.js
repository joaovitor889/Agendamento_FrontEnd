import styles from './tCadastroCli.module.css';

import { useState, useRef } from "react";

//import agFetch from '../../axios/config.js';

import { useNavigate } from 'react-router-dom';


//const REGISTER_URL = "/posts";

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
    const [termos, setTermos] = useState(""); 

    const fCPF = useRef(null);
    const fTelefone = useRef(null);
    const fEmail = useRef(null);

    const signup = async (nome, sobrenome, cpf, telefone, email, senha, confSenha, termos) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

        const hasEmail = usersStorage?.filter((user) => user.email === email);

        const hasCPF = usersStorage?.filter((user) => user.cpf === cpf);

        const hasTelefone = usersStorage?.filter((user) => user.telefone === telefone);

        if (hasEmail?.length) {
            alert("Email já cadastrados");
            fEmail.current.focus();
        }
        else if (hasCPF?.length) {
            alert("CPF já cadastrados");
            fCPF.current.focus();
        }
        else if (hasTelefone?.length) {
            alert("Telefone já cadastrados");
            fTelefone.current.focus();
        }
        else {
            let newUser;
            //const post = { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos };

            if (usersStorage) {
                newUser = [...usersStorage, { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos }];

            } else {
                newUser = [{ nome, sobrenome, cpf, telefone, email, senha, confSenha, termos }];          
            }

            localStorage.setItem("users_bd", JSON.stringify(newUser));
            
            /*await agFetch.post(
                REGISTER_URL,
                JSON.stringify(post)
            )*/

            alert("Dados Cadastrados com Sucesso!");

            navigate("/tLoginCli");
        }

        //deleta todos os dados cadastrados localmente
        //localStorage.removeItem("users_bd");
        //localStorage.clear()
        return;
    };

    const cadCli = async (e) => {
        e.preventDefault();

        if (senha !== confSenha) {
            alert('O campo senha e confirmar senha devem ser iguais!');
        }
        else {
            signup(nome, sobrenome, cpf, telefone, email, senha, confSenha, termos);
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
                                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id="nome" required value = {nome} onChange={(e) => setNome(e.target.value)} />
                                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id="sobrenome" value = {sobrenome} required onChange={(e) => setSobrenome(e.target.value)} />
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
                                        value = {cpf}
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
                                        value = {telefone}
                                        onChange={(e) => setTelefone(e.target.value)} />
                                    <input type="email" ref={fEmail} placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" required value = {email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className="senha">
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required value = {senha} onChange={(e) => setSenha(e.target.value)} />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required value = {confSenha} onChange={(e) => setConfSenha(e.target.value)} />
                                    </div>

                                </div>
                                <div className={styles.rodape}>
                                    <span className={styles.condicoes}>
                                        <input type="checkbox" id={styles["termos"]} required value = {termos} onChange={(e) => setTermos(e.target.value)} />
                                        <a href="/" target={'_blank'}>Aceitar termos</a>
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
        </div>
    )
}

export default TelaCadastroUsuario