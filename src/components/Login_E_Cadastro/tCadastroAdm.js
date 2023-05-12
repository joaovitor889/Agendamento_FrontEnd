import './tCadastroAdm.css';

import Logo from '../../img/logo-site.png';
import Senha from '../../img/Lock.png';
import Email from '../../img/Mail.png';
import User from '../../img/User.png';
import Doc from '../../img/Profiles.png';
import Telefone from '../../img/Phone.png';

import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const TelaCadastroAdm = () => {
    document.title = "CadastroAdm";

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");

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

    const signup = async (nome, telefone, cpf, email, senha, confSenha) => {
        //teste se os dados estao sendo pegos
        //alert(JSON.stringify({nome, telefone, cpf, email, senha, confSenha}));

        //logica
        


        navigate("/tLoginAdm");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //logica do botao
        // Validar os campos do formulario antes de realizar o cadastro
        if (!nome || !telefone || !cpf || !email || !senha || !confSenha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confSenha) {
            alert("A senha e a confirmação de senha devem ser iguais.");
            return;
        }

        // Chamar a funcao de cadastro
        signup(nome, telefone, cpf, email, senha, confSenha);
    }

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
                    <div className='formulario'>
                        <form id="formCadastroAdm" onSubmit={handleSubmit}>
                            <div className='User'>
                                <img src={User} alt="" />
                                <input type="text" placeholder='Usuário' name="nome" title='Digite seu Usuário' onChange={(e) => setNome(e.target.value)} required />
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
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
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
                            <div id='termosCadADM'>
                                <input type="checkbox" name = "termos" required />
                                <a href="/" target={'_blank'}>Aceitar termos</a>
                            </div>
                            <input type="submit" id="btnCadastroADM" name="btnCadastroADM" value="Cadastrar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaCadastroAdm