import styles from './tCadFunc.module.css';
import agFetch from '../../axios/config.js';
//import menu from '../../icones/chevron-left.png';
import perfil from '../../img/perfil.png';

//import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

import { useForm } from "react-hook-form";

const TelaCadFunc = () => {

    document.title = "Cadastrar Funcionário";

    const [jsServico, setServico] = useState('');
    const [services, setServices] = useState([]);
    const [jsServicoId, setServicoId] = useState('');

    const navigate = useNavigate();
    const uid = useParams().uid;
    const token = useParams().token;


    const [jsNome, setNome] = useState('');
    const [jsEmail, setEmail] = useState('');
    const [jsSenha, setSenha] = useState('');
    const [jsConfSenha, setConfSenha] = useState('');
    const [jsCPF, setCPF] = useState('');
    const [jsTelefone, setTelefone] = useState('');
    const [jsSobrenome, setSobrenome] = useState('');
    const [jsUF, setUF] = useState('');
    const [jsCidade, setCidade] = useState('');
    const [jsBairro, setBairro] = useState('');
    const [jsLogradouro, setLogradouro] = useState('');

    const [segInicio, setSegInicio] = useState('');
    const [terInicio, setTerInicio] = useState('');
    const [quarInicio, setQuarInicio] = useState('');
    const [quinInicio, setQuinInicio] = useState('');
    const [sexInicio, setSexInicio] = useState('');
    const [sabInicio, setSabInicio] = useState('');
    const [domInicio, setDomInicio] = useState('');

    const [segFim, setSegFim] = useState('');
    const [terFim, setTerFim] = useState('');
    const [quarFim, setQuarFim] = useState('');
    const [quinFim, setQuinFim] = useState('');
    const [sexFim, setSexFim] = useState('');
    const [sabFim, setSabFim] = useState('');
    const [domFim, setDomFim] = useState('');


    const cadFuncionario = async (funcionarioFile) => {

        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const responseText = await agFetch.post('/funcionario/criar', funcionarioFile, { headers });
            console.log('Resposta de Texto:', responseText.data)
            if (responseText.status === 201)
                alert("Estabelecimento Cadastrado!");

        } catch (error) {
            console.error('Erro ao enviar requisições:', error);
            alert("Dados Inválidos!");
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (jsSenha === jsConfSenha) {


            var jsHorarios = [
                { diaSemana: "segunda", inicio: segInicio, fim: segFim },
                { diaSemana: "terça", inicio: terInicio, fim: terFim },
                { diaSemana: "quarta", inicio: quarInicio, fim: quarFim },
                { diaSemana: "quinta", inicio: quinInicio, fim: quinFim },
                { diaSemana: "sexta", inicio: sexInicio, fim: sexFim },
                { diaSemana: "sábado", inicio: sabInicio, fim: sabFim },
                { diaSemana: "domingo", inicio: domInicio, fim: domFim },
            ]

            var funcionario = {
                UIDEstabelecimento: uid,
                nome: jsNome + " " + jsSobrenome,
                email: jsEmail,
                senha: jsSenha,
                cpf: jsCPF,
                cnpj: "",
                telefone: jsTelefone,
                uf: jsUF,
                cidade: jsCidade,
                bairro: jsBairro,
                logradouro: jsLogradouro,
                numero: "12",
                complemento: "",

                horarios: jsHorarios,
                servicoIds: arrayIds

            }

            cadFuncionario(funcionario);




            //alert("Executa a função de cadastro e vai para a tela de Login");

            navigate(`/tLoginFunc/${uid}`);

        } else (
            alert("Senhas diferentes!")
        )




        //testa se os dados foram pegos
        //alert(JSON.stringify({ nome, telefone, cpf, email, senha }));

        // Chamar a função de cadastro
        //signup(nome, telefone, cpf, email, senha);
    };




    const [meuArray, setMeuArray] = useState([]);
    const [arrayIds, setArrayIds] = useState([]);

    const adicionarItem = (e) => {
        e.preventDefault();

        console.log(jsServicoId);

        if (meuArray.length === 0) {
            const novoArray = [...meuArray, jsServico];
            setMeuArray(novoArray)
        } else {
            for (var i = 0; i < meuArray.length; i++) {
                if (meuArray[i] === jsServico) {
                    alert('Serviço já cadastrado!');
                } else {
                    const novoArray = [...meuArray, jsServico];
                    setMeuArray(novoArray);
                }
            }

        }

        if (arrayIds.length === 0) {
            const newArray = [...arrayIds, parseInt(jsServicoId)];
            setArrayIds(newArray);
        } else {
            for (var i = 0; i < arrayIds.length; i++) {
                if (arrayIds[i] === jsServicoId) {
                    console.log("Serviço já cadastrado!");
                } else {
                    const newArray = [...arrayIds, parseInt(jsServicoId)];
                    setArrayIds(newArray);
                }
            }
        }

    }
    console.log(arrayIds)


    //Buscando nome do serviço atraves do id do serviço
    const procuraServiço = async () => {
        try {
            console.log(jsServicoId)
            const response = await agFetch.get(`/servicos/acharUm/${jsServicoId}`);
            setServico(response.data.nome) // Setando nome do serviço
            console.log(response.data.nome)
        } catch (error) {
            console.log(error)
        }
    };

    procuraServiço();

    const fcep = useRef(null);
    const fnum = useRef(null);


    //bloquear rolagem nos imputs number
    useEffect(() => {
        const cep = fcep.current;
        const num = fnum.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (cep) {
            cep.addEventListener('wheel', bloquearRolagem);
        }

        if (num) {
            num.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (cep) {
                cep.removeEventListener('wheel', bloquearRolagem);
            }
            if (num) {
                num.removeEventListener('wheel', bloquearRolagem);
            }
        };
    }, []);

    //nome da empresa
    const [nomeEmp, setNomeEmp] = useState();

    useEffect(() => {
        async function PegaEmpresa() {
            try {
                const empResponse = await agFetch.get(`/estabelecimento/${uid}`);
                setNomeEmp(empResponse.data.nome);
            } catch (error) {
                console.log(error);
            }
        }
        PegaEmpresa();
    }, [uid])

    //API do CEP
    const { register, setValue } = useForm();

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');

        //console.log(cep);

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                //console.log(JSON.stringify(data));                       
                setValue("rua", data.logradouro);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setValue("uf", data.uf);

                setLogradouro(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUF(data.uf);
            });
    }


    useEffect(() => {
        //fazer uma variavel global que pegue o ID do estabelecimento
        const fetchServices = async () => {
            try {
                //const response = await agFetch.get('/estabelecimento/todosServ/WLShVu');
                const response = await agFetch.get(`/estabelecimento/todosServ/${uid}`);
                setServices(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchServices();


    }, []);

    console.log(arrayIds);

    return (
        <div className={styles.fCadFunc}>
            <div className={styles.body_header}>
                <div className={styles.esquerda}>
                    {/*<img src={menu} alt="retunr" className='sidebar_btn' />*/}
                </div>
                <div className={styles.Centro}>
                    <h3>{nomeEmp}</h3>
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
                        <input type="text" className={styles.dados_basicos} placeholder='Nome:' id='nomeInput' onChange={(e) => setNome(e.target.value)} required />
                        <input type="text" className={styles.dados_basicos} placeholder='Sobrenome:' id='sobrenomeInput' onChange={(e) => setSobrenome(e.target.value)} required />
                        <input type="email" className={styles.dados_basicos} placeholder='E-mail:' id='emailInput' onChange={(e) => setEmail(e.target.value)} required />                    
                        <input type="text"
                            placeholder="Telefone:"
                            title="Digite o seu Telefone"
                            name="tel"
                            id='telefoneInput'
                            maxLength="15"
                            className={styles.dados_basicos}
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
                    </div>
                    <div className={styles.endereco}>
                        <input type="number"
                            placeholder="CEP:"
                            title="Digite o seu CEP"
                            name="cep"
                            id='cepInput'
                            maxLength="8"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)
                                    || event.target.value.length > event.target.maxLength - 1) {
                                    event.preventDefault();
                                }
                            }}
                            ref={fcep}
                            onBlur={checkCEP}
                            required />
                        <input type="text" className={styles.rua} placeholder='Rua' id='ruaInput' {...register("rua")} onChange={(e) => setLogradouro(e.target.value)} required />
                        <input type="text" className={styles.bairro} placeholder='Bairro' id='bairroInput' {...register("bairro")} onChange={(e) => setBairro(e.target.value)} required />
                        <input type="text" className={styles.cidade} placeholder='Cidade' id='cidadeInput' {...register("cidade")} onChange={(e) => setCidade(e.target.value)} required />
                        <input type="text" className={styles.estado} placeholder='Estado' id='estadoInput' {...register("uf")} onChange={(e) => setUF(e.target.value)} required />
                    </div>
                    <div className={styles.doc}>
                        {/*<input type="text" className={styles.documentos} placeholder='RG:' />*/}
                        <input type="text"
                            placeholder="CPF:"
                            title="Digite o seu CPF"
                            name="cpf" id='cpfInput'
                            className={styles.documentos}
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
                            onChange={(e) => setCPF(e.target.value)} />
                    </div>
                    <div className={styles.final}>
                        <div className={styles.horarios}>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Segunda  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSegInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSegFim(e.target.value)} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Terça inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setTerInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setTerFim(e.target.value)} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Quarta  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuarInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuarFim(e.target.value)} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Quinta  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuinInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setQuinFim(e.target.value)} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Sexta  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSexInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSexFim(e.target.value)} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Sábado  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSabInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setSabFim(e.target.value)} />
                            </div>
                            <div className={styles.dia}>
                                <input type="checkbox" />
                                <p className={styles.diaS}>Domingo  inicio</p>
                                <input type="time" className={styles.hora} onChange={(e) => setDomInicio(e.target.value)} />
                                <p>final</p>
                                <input type="time" className={styles.hora} onChange={(e) => setDomFim(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.funcoes}>
                            <h5>Funções do funcionário</h5>
                            <select name="cars" className={styles.texto} onChange={(e) => setServicoId(e.target.value)}>
                                <option value="">Serviços</option>
                                {services.map(service => (
                                    <option key={service.id} value={service.id}>{service.nome}</option>
                                ))}
                            </select>
                            <button onClick={adicionarItem}>Adicionar</button>
                            <div className={styles.atividades}>
                                {meuArray.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.senhas}>
                            <input type="password" className={styles.senha} placeholder='Senha' id='senhaInput' onChange={(e) => setSenha(e.target.value)} />
                            <input type="password" className={styles.senha} placeholder='Confirmar Senha' id='confSenhaInput' onChange={(e) => setConfSenha(e.target.value)} />
                        </div>
                    </div>
                    <input type = "submit" className={styles.cadfunc} value="Cadastrar"/>
                </form>
            </div>

        </div>
    )


}

export default TelaCadFunc