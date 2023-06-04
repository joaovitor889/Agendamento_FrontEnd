//Este tipo de arquivo e salvo com a extensao .js ou .jsx

import styles from './fotoProfis.module.css';

//import { useState, useEffect, useRef } from "react";

//import { useNavigate } from 'react-router-dom';

//import { Link } from "react-router-dom";

const FotoProfis = () => {

	//variaveis
	
	
	//funcoes
	
	//conteudo HTML
    return (		
        <div className={styles.fCadCliente}>
			{/*Exemplo de Class*/}
			<div className = {styles.exClasse}></div> 
			
			{/*Exemplo de ID*/}
			<div id = {styles["exDeID"]}></div> 
			
            <p>Foto do Profissional</p>
        </div>
    )
}

export default FotoProfis