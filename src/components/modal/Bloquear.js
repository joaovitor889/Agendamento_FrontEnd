import React from "react";

const BACKGROUND_STYLE ={
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '25px 0px',
    backgroundColor: '#fff',
    borderRadius:  '10px',
    display: 'flex',
    flexDirection: 'column',
    alingItens: 'center',
}

const  HEADER_STYLE ={
    color: '#3293CA',
    textAlign: 'center',
}
const  DOIS_STYLE ={
    color: '#3293CA',
}
const  TEXT_STYLE ={
    color: '#3293CA',
    height: '30px',
    borderRadius: '15px',
    border: '1px solid #000',
    margin: '0.25rem',
    width: '320px'
}

const AREA_STYLE ={
    color: '#3293CA',
    borderRadius: '15px',
    border: '1px solid #000',
    margin: '0.25rem'
}

const BTN_STYLE ={
    backgroundColor: '#3293CA',
    color: '#fff',
    height: '30px',
    width: '100px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '15px',
    margin: 'auto'
}

export default function Modal({isOpen, setModalOpen, children }) {

    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h2 style={HEADER_STYLE}>Bloquear</h2>
                    <div style={DOIS_STYLE}>
                        <input type="text" style={TEXT_STYLE} placeholder="Data inicio __ /__ /__"/>
                        <input type="text" style={TEXT_STYLE} placeholder="Data fim __ /__ /__"/>
                    </div>
                    <div style={DOIS_STYLE}>
                        <input type="text" style={TEXT_STYLE} placeholder="Horário  início: __: __"/>
                        <input type="text" style={TEXT_STYLE} placeholder="Horário fim: __:__"/>
                    </div>
                    <textarea cols="30" rows="5" style={AREA_STYLE} placeholder="Descrição"></textarea>
                    <select name="func" style={AREA_STYLE}>
                        <option value="corte">Todos os funcionários</option>
                        <option value="corte">João</option>
                        <option value="corte">Bruno</option>
                        <option value="sombrancelha">Antônio</option>
                        <option value="manicure">Guilherme</option>
                        <option value="hidratação">Jean</option>
                    </select>
                    <button onClick={setModalOpen} style={BTN_STYLE}>Salvar</button>
                </div>
            </div>
            
        )
    }
    
    return null
}