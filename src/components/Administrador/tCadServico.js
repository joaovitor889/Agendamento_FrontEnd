import styles from './tCadServico.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from '../../img/perfil.png'

import { useState, useEffect, useRef } from "react";

import agFetch from '../../axios/config';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";

const TelaCadServico = () => {
    document.title = "Cadastrar Serviço";

    const { uid } = useParams();
    const { token } = useParams();

    const descCat = "";
    const [vNome, setVNome] = useState("");
    const [vPreco, setVPreco] = useState("");
    const vAtivo = true;
    const [tempo, setTempo] = useState("");
    const [nomeCategoria, setNomeCategoria] = useState("");
    const [vDescricao, setVDescricao] = useState("");

    const fTempo = useRef(null);
    const fPreco = useRef(null);

    const navigate = useNavigate("");

    //bloquear rolagem nos imputs number
    useEffect(() => {
        const tempo = fTempo.current;
        const preco = fPreco.current;
        const bloquearRolagem = (e) => {
            e.preventDefault();
        };

        if (tempo) {
            tempo.addEventListener('wheel', bloquearRolagem);
        }

        if (preco) {
            preco.addEventListener('wheel', bloquearRolagem);
        }

        return () => {
            if (tempo) {
                tempo.removeEventListener('wheel', bloquearRolagem);
            }

            if (preco) {
                preco.removeEventListener('wheel', bloquearRolagem);
            }
        };
    }, []);

    const handleChangePreco = (e) => {
        const precoConvertido = e.target.value.replace(',', '.');
        setVPreco(precoConvertido);
    }



    //Enviar os Dados para a API com o AXIOS
    const cadastrarServico = async (vNome, vPreco, vAtivo, tempo, vDescricao, nomeCategoria, descCat) => {
        try {
            // Converter os valores para números antes de enviar a requisição
            const convertePreco = parseFloat(vPreco);
            const tempoConvertido = parseInt(tempo);
            const novoServico = {
                UIDEstabelecimento: uid,
                nome: vNome,
                preco: convertePreco,
                ativo: vAtivo,
                tempoMedioMin: tempoConvertido,
                descricao: vDescricao,
                categoria: {
                    nome: nomeCategoria,
                    descricao: ""
                }
            };

            console.log(novoServico);
            // Faça a requisição POST para a API utilizando o Axios
            const response = await agFetch.post('/servicos/criar', novoServico);

            // Verifique a resposta da API e faça o redirecionamento se necessário
            if (response.status === 201) {
                alert("Dados cadastrados com sucesso!");
                navigate(`/tServADM/${token}/${uid}`);
            }
        } catch (error) {
            console.log(error);

            let valErro = error.response.status;

            if (valErro === 404)
                alert("Servidor Indisponível!");
            else if (valErro === 400) {
                alert("Dados Inválidos!");
                console.log(error.response.data);
                console.log(error.response.status);
            }
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

        //alert(JSON.stringify({ vUIDEstabelecimento, vNome, vPreco, vAtivo, tempo, vDescricao, nomeCategoria, descCat }));

        cadastrarServico(vNome, vPreco, vAtivo, tempo, vDescricao, nomeCategoria, descCat);
    }

    return (
        <div className={styles.fCadServico}>
            <input type='checkbox' id={styles["check"]} />
            {/* header  começo */}
            <header className={styles.body_header}>
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
                        <img src={perfil} alt="notificar" />
                    </a>

                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className={styles.sidebar}>
                <Link to={`/tPesqFunc/${token}/${uid}`}>Profissionais</Link>
                <Link to={`/tPesqCli/${token}/${uid}`}>Clientes</Link>
                <Link to={`/tAgendamentosADM/${token}/${uid}`}>Agendamentos</Link>
                <Link to={`/tAgendarADM/${token}/${uid}`}>Agendar</Link>
                {/*<p onClick={()=> setOpenModalCategoria(true)}>Categorias</p>*/}
                <Link to={`/tServADM/${token}/${uid}`}>Serviços</Link>
                <Link to={`/tMenuDBADM/${token}/${uid}`}>Perfil</Link>
                <Link to={`/tLoginAdm`}>Sair</Link>
                <select name='qual empresa?' className={styles.interprise}>
                    <option value="emp1">Shostners and Shostners</option>
                    <option value="emp2">Show de bola</option>
                </select>
            </div>
            {/* sidebar  final */}
            <div className={styles.main}>
                <div className={styles.Container}>
                    <form onSubmit={handleSubmit}>
                        <h1>Cadastro de Serviços</h1>
                        <div className={styles.dados}>
                            {/*<select name="catServ">
                            <option value="categoria">Categoria</option>
                            <option value="corte">Corte</option>
                            <option value="barba">Barba</option>
                            <option value="manicure">Manicure</option>
                        </select>*/}
                            <input type="text" className={styles.texto} placeholder='Categoria' onChange={(e) => { setNomeCategoria(e.target.value) }} required />
                            <input type="text" className={styles.texto} placeholder='Nome' onChange={(e) => { setVNome(e.target.value) }} required />
                            <textarea placeholder='Descrição' className={styles.desc} onChange={(e) => { setVDescricao(e.target.value) }} required />
                            <input type="number"
                                className={styles.texto}
                                placeholder="Tempo"
                                title="Digite o seu Tempo"
                                name="temp"
                                id="temp"
                                maxLength="20"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)
                                        || event.target.value.length > event.target.maxLength - 1) {
                                        event.preventDefault();
                                    }
                                }}
                                ref={fTempo}
                                onChange={(e) => { setTempo(e.target.value) }}
                                required />
                        </div>
                        <div className={styles.finsh}>
                            <input type="text" className={styles.texto}
                                placeholder='R$'
                                ref={fPreco}
                                onChange={handleChangePreco}
                                onKeyPress={(event) => {
                                    const { key, target } = event;
                                    const hasComma = target.value.includes(',');
                                    const commaIndex = target.value.indexOf(',');
                                    if ((!/[0-9,]/.test(event.key) || key === ',') && (hasComma || commaIndex !== -1 || target.value === '')) {
                                        event.preventDefault();
                                    }

                                    if (commaIndex !== -1 && target.value.substring(commaIndex + 1).length >= 2 && key !== ',' && key !== 'Backspace') {
                                        event.preventDefault();
                                    }
                                }}

                                required />
                            <br />
                            <br />
                            <input type="submit" value="Cadastrar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TelaCadServico