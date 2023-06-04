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
    padding: '25px 10px',
    backgroundColor: '#48A695',
    borderRadius:  '10px',
    display: 'flex',
    flexDirection: 'column',
    alingItens: 'center',
    fontFamily: 'Arial',
    fontSize: '16px'
}

const  HEADER_STYLE ={
    color: '#3293CA',
    textAlign: 'center',
    backgroundColor: '#000',
    borderRadius: '15px',
    fontSize: '30px'
}

const  TEXT_STYLE ={
    height: '30px',
    borderRadius: '15px',
    border: '1px solid #000',
    margin: '0.25rem',
    width: '320px'
}

const AREA_STYLE ={
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

const FINAL_STYLE={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.25rem'

}

const FINALIZACAO_STYLE={
    display: 'flex',
    margin: '1rem'
}

const TEXT_SHORT_STYLE={
    height: '30px',
    width: '100px',
    borderRadius: '15px',
    border: '1px solid #000',
}

export default function Modal({isOpen, setModalOpen, children }) {

    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h2 style={HEADER_STYLE}>Editar Categoria</h2>
                    <br/>
                        <input type = "text" placeholder="Categoria"/>
                    <br/>                
                    <button onClick={setModalOpen} style={BTN_STYLE}>Salvar</button>
                </div>
            </div>
            
        )
    }
    
    return null
}