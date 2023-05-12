import styles from './tCadastroCli.module.css';
import { useState, useEffect, useRef } from "react";
//import agFetch from '../../axios/config.js';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const TelaCadastroUsuario = () => {
    document.title = "Cadastrar Cliente";

    //const navigate = useNavigate();

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

    const signup = async (nome, sobrenome, cpf, telefone, email, senha, confSenha, termos) => {
        /*const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
 
        
 
    const signup = async (nome, sobrenome, cpf, telefone, email, senha, confSenha, termos) => {
        try {
            const response = await agFetch.get("/dados");
 
            if (response && response.data && typeof response.data === 'object') {
                const clientes = response.data.clientes;
 
                const checkExistingData = (array, field, value) => {
                    return array.some((item) => item[field] === value);
                };
 
                if (checkExistingData(clientes, "email", email)) {
                    alert(`Já existe um cliente cadastrado com o Email ${email}`);
                    fEmail.current.focus();
                    return;
                } else if (checkExistingData(clientes, "cpf", cpf)) {
                    alert(`Já existe um cliente cadastrado com o CPF ${cpf}`);
                    fCPF.current.focus();
                    return;
                } else if (checkExistingData(clientes, "telefone", telefone)) {
                    alert(`Já existe um cliente cadastrado com o Telefone ${telefone}`);
                    fTelefone.current.focus();
                    return;
                } else {
                    // Cadastrar os dados
                    const novoUsuario = {
                        tipo: "clientes",
                        dados: {
                            nome,
                            sobrenome,
                            cpf,
                            telefone,
                            email,
                            senha,
                            confSenha,
                            termos,
                        },
                    };
 
                    await agFetch.post('/dados', novoUsuario);
 
                    alert("Dados Cadastrados com Sucesso!");
 
                    navigate("/tLoginCli");
                }
            } else {
                // Tratar o formato de dados inesperado
                alert('Formato de dados inválido. Não foi possível verificar os registros existentes.');
            }
        } catch (error) {
            // Tratar o erro de requisição
            console.error("Erro na requisição:", error);
            alert('Ocorreu um erro ao realizar a requisição. Verifique a conexão ou tente novamente mais tarde.');
        }
=======
        else if (hasCPF?.length) {
            alert("CPF já cadastrados");
            fCPF.current.focus();
        }
        else if (hasTelefone?.length) {
            alert("Telefone já cadastrados");
            fTelefone.current.focus();
        }*/
        //else {
        /*let newUser;
        //const post = { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos };
 
        if (usersStorage) {
            newUser = [...usersStorage, { nome, sobrenome, cpf, telefone, email, senha, confSenha, termos }];
 
        } else {
            newUser = [{ nome, sobrenome, cpf, telefone, email, senha, confSenha, termos }];          
        }
 
        localStorage.setItem("users_bd", JSON.stringify(newUser));*/

        /*await agFetch.post(
            REGISTER_URL,
            JSON.stringify(post)
        )*/

        //const response = await agFetch.get('/clientes');

        // Cadastrar os dados
        const novoUsuario = {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            senha: senha,
            confSenha: confSenha,
            termos: termos
        };

        //alert(JSON.stringify(novoUsuario));
        axios.post('http://localhost:5000/api/clientes', novoUsuario)
            .then(response => {
                console.log(response.novoUsuario);
            })
            .catch(error => {
                console.log(error);
            });

        // Atualizar o arquivo dados.json
        //await agFetch.put('/api/clientes.json', dados);


        //alert("Dados Cadastrados com Sucesso!");

        //navigate("/tLoginCli");
        //}

        //deleta todos os dados cadastrados localmente
        //localStorage.removeItem("users_bd");
        //localStorage.clear()
        return;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar os campos do formulário antes de realizar o cadastro
        if (!nome || !sobrenome || !cpf || !email || !senha || !confSenha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confSenha) {
            alert("A senha e a confirmação de senha devem ser iguais.");
            return;
        }

        // Chamar a função de cadastro
        signup(nome, sobrenome, cpf, telefone, email, senha, confSenha, termos);
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
                            <form id={styles["formCadastro"]} onSubmit={handleSubmit}>
                                <div className={styles.entrada}>
                                    <input
                                        type="text"
                                        placeholder="*Nome:"
                                        title="Digite o seu nome"
                                        name="nome"
                                        id="nome"
                                        required
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="*Sobrenome:"
                                        title="Digite o seu sobrenome"
                                        name="sobrenome"
                                        id="sobrenome"
                                        value={sobrenome}
                                        required
                                        onChange={(e) => setSobrenome(e.target.value)}
                                    />
                                    <input type="number"
                                        ref={fCPF}
                                        placeholder="*CPF:"
                                        title="Digite o seu CPF"
                                        name="cpf"
                                        id="cpf"
                                        maxLength="11"
                                        onKeyPress={(event) => {
                                            if (
                                                !/[0-9]/.test(event.key) ||
                                                event.target.value.length >
                                                event.target.maxLength - 1
                                            ) {
                                                event.preventDefault();
                                            }
                                        }}
                                        required
                                        value={cpf}
                                        onChange={(e) => setCPF(e.target.value)}
                                    />

                                    <input
                                        type="number"
                                        ref={fTelefone}
                                        placeholder="Telefone:"
                                        title="Digite o seu Telefone"
                                        name="tel"
                                        id="tel"
                                        maxLength="11"
                                        onKeyPress={(event) => {
                                            if (
                                                !/[0-9]/.test(event.key) ||
                                                event.target.value.length >
                                                event.target.maxLength - 1
                                            ) {
                                                event.preventDefault();
                                            }
                                        }}
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        ref={fEmail}
                                        placeholder="*E-mail:"
                                        title="Digite o seu E-mail"
                                        name="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="senha">
                                        <input
                                            type="password"
                                            placeholder="*Senha:"
                                            title="Crie uma Senha"
                                            name="senha"
                                            id="senha"
                                            required
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="*Confirmar Senha:"
                                            title="Confirme sua Senha"
                                            name="confSenha"
                                            id="confSenha"
                                            required
                                            value={confSenha}
                                            onChange={(e) => setConfSenha(e.target.value)}
                                        />
                                </div>
                                    <input type="email" ref={fEmail} placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className="senha">
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required value={confSenha} onChange={(e) => setConfSenha(e.target.value)} />
                                    </div>
                                </div>
                                <div className={styles.rodape}>
                                    <span className={styles.condicoes}>
                                        <input
                                            type="checkbox"
                                            id={styles["termos"]}
                                            required
                                            value={termos}
                                            onChange={(e) => setTermos(e.target.value)}
                                        />
                                        <input type="checkbox" id={styles["termos"]} required value={termos} onChange={(e) => setTermos(e.target.value)} />
                                        <a href="/" target={'_blank'}>Aceitar termos</a>
                                    </span>
                                    <div className={styles.botoes}>
                                        <input
                                            type="submit"
                                            id={styles["btnCadastro"]} name="btnCadastro"
                                            value="Cadastrar"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rodFundo}></div>
        </div>
    );
};

export default TelaCadastroUsuario;