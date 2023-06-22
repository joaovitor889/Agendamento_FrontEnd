import styles from './tCadastroCli.module.css';

import { useState, useEffect } from "react";

import agFetch from '../../axios/config.js';

import { useNavigate, useParams } from 'react-router-dom';

import TermosUso from '../modal/tTermosUsoPrivacidade';

const TelaCadastroUsuario = () => {

    document.title = "Cadastrar Cliente";

    const { uid } = useParams();

    const navigate = useNavigate();

    const [nomeEmpresa, setNomeEmpresa] = useState();

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [compNome, setCompNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    const [openModalTermosUso, setOpenModalTermosUso] = useState(false);

    //nome da empresa
    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmpresa(empResponse.data.nome);
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    //Requisicoes com a API
    const signup = async (nome, cpf, telefone, email, senha) => {
        //teste se os dados estao sendo enviados
        //alert(JSON.stringify({nome, cpf, telefone, email, senha})); 

        //logica
        try {
            // Crie um objeto com os dados do novo usuario
            const novoUsuario = {
                UIDEstabelecimento: uid,
                nome: nome,
                email: email,
                senha: senha,
                cpf: cpf,
                telefone: telefone
            };

            // Faça a requisição POST para a API utilizando o Axios
            const response = await agFetch.post('/cliente/criar', novoUsuario);

            // Verifique a resposta da API e faça o redirecionamento se necessário
            if (response.status === 200 || response.status === 201) {
                alert("Dados cadastrados com sucesso!");
                navigate(`/tLoginCli/${uid}`);
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

        const cmpNome = `${nome} ${sobrenome}`;
        setCompNome(cmpNome);

        if (senha !== confSenha) {
            alert('O campo senha e confirmar senha devem ser iguais!');
        }
        else {
            //alert(JSON.stringify({compNome, cpf, telefone, email, senha}));            
            signup(compNome, cpf, telefone, email, senha);
        }
    };

    return (
        <div className={styles.fCadCliente}>
            <div className={styles.fCadastro}>
                <nav id={styles["cabecalho"]}>
                    <p>{nomeEmpresa}</p>
                </nav>
                <div className={styles.cadCliLogo}>Cadastro de Cliente</div>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.fundo}>
                            <form id={styles["formCadastro"]} onSubmit={(e) => cadCli(e)}>
                                <div className={styles.entrada}>
                                    <input type="text" placeholder="*Nome:" title="Digite o seu nome" name="nome" id="nome" required onChange={(e) => setNome(e.target.value)} />
                                    <input type="text" placeholder="*Sobrenome:" title="Digite o seu sobrenome" name="sobrenome" id="sobrenome" required onChange={(e) => setSobrenome(e.target.value)} />
                                    <input type="text"
                                        placeholder="*CPF:"
                                        title="Digite o seu CPF"
                                        name="cpf" id="cpf"
                                        maxLength="14"
                                        onKeyPress={(event) => {
                                            const allowedChars = /[0-9]/;
                                            const inputValue = event.target.value;
                                            const key = event.key;

                                            if (!allowedChars.test(key) || inputValue.length >= 14 || key === '.' || key === '-') {
                                                event.preventDefault();
                                            } else if (inputValue.length === 3 || inputValue.length === 7) {
                                                event.target.value = inputValue + ".";
                                            } else if (inputValue.length === 11) {
                                                event.target.value = inputValue + "-";
                                            }
                                        }}
                                        required
                                        value={cpf}
                                        onChange={(e) => setCPF(e.target.value)} />

                                    <input type="text"
                                        placeholder="Telefone:"
                                        title="Digite o seu Telefone"
                                        name="tel"
                                        id="tel"
                                        maxLength="15"
                                        onKeyPress={(event) => {
                                            const inputValue = event.target.value + event.key;
                                            const isValidKey = /\d/.test(event.key);
                                            const isMaxLengthReached = inputValue.length >= event.target.maxLength;

                                            if (!isValidKey || isMaxLengthReached) {
                                                event.preventDefault();
                                            }

                                            if (inputValue.length === 1 && isValidKey) {
                                                event.target.value = `(${inputValue}`;
                                                event.preventDefault();
                                            } else if (inputValue.length === 4 && isValidKey) {
                                                event.target.value = `${event.target.value}) ${inputValue.substr(1)}`;
                                                event.preventDefault();
                                            } else if (inputValue.length === 11 && isValidKey) {
                                                const areaCode = inputValue.substr(1, 2);
                                                const firstPart = inputValue.substr(5, 4);
                                                const secondPart = inputValue.substr(10, 4);
                                                event.target.value = `(${areaCode}) ${firstPart}-${secondPart}`;
                                                event.preventDefault();
                                            }
                                        }}
                                        onChange={(e) => setTelefone(e.target.value)} />
                                    <input type="email" placeholder="*E-mail:" title="Digite o seu E-mail" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                                    <div className={styles.senha}>
                                        <input type="password" placeholder="*Senha:" title="Crie uma Senha" name="senha" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                                        <input type="password" placeholder="*Confirmar Senha:" title="Confirme sua Senha" name="confSenha" id="confSenha" required value={confSenha} onChange={(e) => setConfSenha(e.target.value)} />
                                    </div>
                                </div>
                                <br></br>
                                <div className={styles.rodape}>
                                    <span className={styles.condicoes}>
                                        <input type="checkbox" id={styles["termos"]} required />
                                        <p onClick={() => { setOpenModalTermosUso(true) }}>Aceitar termos</p>
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
            <TermosUso isOpen={openModalTermosUso} setOpenModalTermosUso={() => setOpenModalTermosUso(!openModalTermosUso)} />
        </div>
    )
}

export default TelaCadastroUsuario