import React from "react";

import { useState } from "react";

import EditCategoria from '../modal/EditCat';
import AddCategoria from '../modal/CadCat';

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
    height: '55%',
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

const CATEGORY_LIST_STYLE = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
  width: '100%',
  marginTop: '10px'
};

const CATEGORY_ITEM_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px 10px',
  backgroundColor: '#ccc',
  borderRadius: '5px',
  marginBottom: '5px',
  color: '#000' // Alterando a cor do texto para preto
};

const DELETE_BTN_STYLE = {
  backgroundColor: '#ff5050',
  color: '#fff',
  height: '20px',
  width: '20px',
  fontSize: '12px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer'
};

export default function Modal({ isOpen, setOpenModalCategoria, children }) {

  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3']; 

  const [openModalEditCat, setOpenModalEditCat] = useState(false);
  const [openModalAddCat, setOpenModalAddCat] = useState(false);

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <button onClick={setOpenModalCategoria} style={BTN_STYLE}>X</button>
          <h2 style={HEADER_STYLE}>Lista de Categorias</h2>
          <br />
          <button onClick={()=> setOpenModalAddCat(true)}>Adicionar Categoria</button>
          <br />
          <ul style={CATEGORY_LIST_STYLE}>
            {categories.map((category, index) => (
              <li key={index} style={CATEGORY_ITEM_STYLE} onClick={()=> setOpenModalEditCat(true)}>
                {category}
                <button style={DELETE_BTN_STYLE}>&times;</button>
              </li>
            ))}
          </ul>
          <br />
        </div>
        <EditCategoria isOpen={openModalEditCat} setOpenModalEditCat={() => setOpenModalEditCat(!openModalEditCat)}/>
        <AddCategoria isOpen={openModalAddCat} setOpenModalAddCat={() => setOpenModalAddCat(!openModalAddCat)}/>
      </div>
    );
  }

  return null;
}
