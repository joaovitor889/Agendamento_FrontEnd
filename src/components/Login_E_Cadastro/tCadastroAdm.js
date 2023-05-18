import './tCadastroAdm.css';

import Logo from '../../img/logo-site.png';
import User from '../../img/User.png';
import Telefone from '../../img/Telefone.png';
import Doc from '../../img/Profiles.png';
import Email from '../../img/Mail.png';
import Senha from '../../img/Lock.png';

import { useState, useEffect, useRef } from "react";

import { useNavigate } from 'react-router-dom';

import agFetch from '../../axios/config.js';

const TelaCadastroAdm = () => {
    document.title = "CadastroAdm";

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

    const fCPF = useRef(null);
    const fTelefone = useRef(null);

    const navigate = useNavigate();

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

    const signup = async (nome, telefone, cpf, email, senha) => {
        //teste se os dados estao sendo enviados
        //alert(JSON.stringify({ nome, telefone, cpf, email, senha }));

        //logica
        try {
            // Crie um objeto com os dados do novo proprietário
            const novoProprietario = {
                nome,
                telefone,
                cpf,
                email,
                senha
            };

            // Faça a requisição POST para a API utilizando o Axios
            const response = await agFetch.post('/proprietarios/criar', novoProprietario);

            // Verifique a resposta da API e faça o redirecionamento se necessário
            if (response.status === 201) {
                alert("Dados cadastrados com sucesso!");
                navigate("/tLoginADM");
            }
        } catch (error) {
            console.log(error);

            let valErro = error.response.status;

            if (valErro === 404)
                alert("Servidor Indisponível!");
            else if (valErro === 400)
                alert("Dados Inválidos!");
            else if (valErro === 409) {
                //alert("Telefone, CPF ou Email já cadastrados!");
                const texto = error.response.data;
                const textoFormatado = JSON.stringify(texto).replace(/,(?=(?:[^"]*"[^"]*")*[^"]*$)|\[|\]|"(.*?)"/g, '$1\n').replace(/\n\s*/g, '\n');
                alert(textoFormatado);
            }
        }
    }    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (senha !== confSenha) {
            alert("A senha e a confirmação de senha devem ser iguais!");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }

        //testa se os dados foram pegos
        //alert(JSON.stringify({ nome, telefone, cpf, email, senha }));

        // Chamar a função de cadastro
        signup(nome, telefone, cpf, email, senha);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        // Remove todos os caracteres não numéricos
        const telefoneFormatado = value.replace(/\D/g, '');

        // Formata o telefone com a máscara
        const telefoneMascarado = telefoneFormatado
            //.replace(/(\d{2})(\d)/, '($1) $2')
            //.replace(/(\d{5})(\d)/, '$1-$2');

            .replace(/^(\d{2})(\d{1,9})$/, '$1 $2');

        setTelefone(telefoneMascarado);
    };

    return (
        <div className="fCadastroAdm">
            <div className='container'>
                <div className='logo'>
                    <br />
                    <br />
                    <br />
                    <img src={Logo} alt="Logo do site" />
                </div>
                <div className='campo-de-Cadastro'>
                    <div className='butoes'>
                        <a href="./tLoginAdm" className='Login'>Login</a>
                        <a href="./tCadastroAdm" className='Cadastro'>Cadastro</a>
                    </div>
                    <div className='Form'>
                        <form id="formCadastroAdm" onSubmit={handleSubmit}>
                            <div className='User'>
                                <img src={User} alt="" />
                                <input type="text" placeholder='Usuário' title='Digite seu Usuário' onChange={(e) => setNome(e.target.value)} required />
                            </div>
                            <div className='Telefone'>
                                <img src={Telefone} alt="" />
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
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='Documento'>
                                <img src={Doc} alt="" />
                                <input type="number"
                                    ref={fCPF}
                                    placeholder="CPF:"
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
                            </div>
                            <div className='E-mail'>
                                <img src={Email} alt="" />
                                <input type="email" placeholder='E-mail' title='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Senha' title='Digite sua senha' onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                            <div className='Senha'>
                                <img src={Senha} alt="" />
                                <input type="password" placeholder='Confirmar Senha' title='Confirme sua senha' onChange={(e) => setConfSenha(e.target.value)} required />
                            </div>
                            <div className='termosADM'>
                                <input type="checkbox" name="termos" required />
                                <a href="/" target={'_blank'}>Aceitar termos</a>
                            </div>
                            <input type="submit" id="btnCadastroADM" name="btnLogin" value="Cadastrar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaCadastroAdm