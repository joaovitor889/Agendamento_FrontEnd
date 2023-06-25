import React, { useState } from "react";
import axios from 'axios';
import agFetch from '../../axios/config';
//import { useParams } from "react-router-dom";

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '25px 30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alingItens: 'center',

}

const HEADER_STYLE = {
    color: '#3293CA',
    textAlign: 'center',
}
const DOIS_STYLE = {
    color: '#3293CA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0'
}



const BTN_STYLE = {
    backgroundColor: '#3293CA',
    color: '#fff',
    height: '30px',
    width: '100px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '15px',
    margin: 'auto'
}
const STATUS_STYLE = {
    fontSize: '14px',
    color: '#fff',
    backgroundColor: 'green',
    padding: '5px',
    width: '100px',
    height: '30px',
    borderRadius: '15px',
    marginLeft: '1rem',
}

const TEXT_STATUS_STYLE = {
    margin: '0px',
}
const INFO_STYLE = {
    fontSize: '20px',
    margin: '0px',
}

const INFOS_STYLE = {
    textAlign: 'center',
    margin: '1rem'
}


export default function Modal({ isOpen, setDetalheOpen, children, agendamento, index, token }) {

    const [status, setStatus] = useState('Confirmado');

    const [nota, setNota] = useState(0);

    const [idAg, setIdAg] = useState();

    const selecionarNota = (valor) => {
        if (valor === nota) {
            setNota(0);
        } else {
            setNota(valor);
        }
    };

    const handleFechar = async () => {
        var obj = {
            agendamentoId: agendamento[index].id,
            status: status
        }
        const idagm = obj.agendamentoId;
        setIdAg(idagm);
        console.log(idAg);

        axios.post("http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/agendamento/mudarStatus", obj).then(response => {
            console.log("alteração de status");

        }).catch(error => {
            console.log(error);
        })

        try {
            //Autorizar o envio dos dados
            const txtData = {
                "data_inicio": "2023-06-23",
                "data_fim": "2050-06-24"
            }
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const valNota = parseInt(nota);

            const agNota = await agFetch.post('/agendamento/darNota', {
                agendamentoId: idAg,
                nota: valNota
            });
            console.log(agNota.status);
        } catch (error) {
            console.log(error);
        }

        setDetalheOpen();
    };

    function getFormattedTime(dateTimeString) {
        const dateObj = new Date(dateTimeString);
        const hour = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedTime;
    }

    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h3 style={HEADER_STYLE}>Detalhes do Agendamento</h3>
                    <div style={INFOS_STYLE}>
                        <p style={INFO_STYLE}>Cod. {agendamento[index].id}</p>
                        {/* <p style={INFO_STYLE}>Cliente: {nomeFunc}</p> */}
                        <p style={INFO_STYLE}>funcionario: {agendamento[index].funcionario.nome}</p>
                        <br />
                        <p style={INFO_STYLE}>09/05/2023 - {getFormattedTime(agendamento[index].data_inicio)} até as {getFormattedTime(agendamento[index].data_fim)}</p>
                    </div>

                    <br />
                    <h3 style={HEADER_STYLE}>Serviços</h3>
                    <div style={INFOS_STYLE}>
                        <p style={INFO_STYLE}>Serviços: {agendamento[index].servico.nome}</p>
                    </div>

                    <div style={DOIS_STYLE}>
                        <h4 style={TEXT_STATUS_STYLE}>Status: </h4>
                        <select style={STATUS_STYLE} value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Confirmado" key="">Confirmado</option>
                            <option value="Finalizado" key="">Finalizado</option>
                            <option value="Pendente" key="">Pendente</option>
                        </select>
                    </div>
                    <div style={DOIS_STYLE}>
                        <h4 style={TEXT_STATUS_STYLE}>Nota: </h4>
                        <div>
                            {[1, 2, 3, 4, 5].map((valor) => (
                                <span
                                    key={valor}
                                    style={{
                                        cursor: 'pointer',
                                        color: valor <= nota ? 'gold' : 'gray',
                                        fontSize: '24px',
                                    }}
                                    onClick={() => selecionarNota(valor)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div><br />
                    <button onClick={handleFechar} style={BTN_STYLE}>Fechar</button>
                </div>
            </div>

        )
    }

    return null
}