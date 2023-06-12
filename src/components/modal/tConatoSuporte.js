import React from "react";

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
};

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    height: '40%',
    transform: 'translate(-50%,-50%)',
    padding: '25px 10px',
    backgroundColor: '#48A695',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial',
    fontSize: '16px',
    overflowY: 'auto' // Adicionando o overflow y automático
};  

const HEADER_STYLE = {
  color: '#3293CA',
  textAlign: 'center',
  backgroundColor: '#000',
  borderRadius: '15px',
  fontSize: '30px'
};

const BTN_STYLE = {
  backgroundColor: '#3293CA',
  color: '#fff',
  height: '30px',
  width: '30px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '50%',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer'
};

export default function Modal({ isOpen, setOpenModalContSuporte, children }) {

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <button onClick={setOpenModalContSuporte} style={BTN_STYLE}>X</button>
          <h2 style={HEADER_STYLE}>Contato de Suporte</h2>
          <br />
          <p>Email: snetsoftwares@gmail.com</p>
          <p>Telefone: (15)3333-4444</p>
        </div>
      </div>
    );
  }

  return null;
}
