//Este tipo de arquivo e salvo com a extensao .js ou .jsx

import styles from './fotoAdm.module.css';

//import { useState, useEffect, useRef } from "react";

//import { useNavigate } from 'react-router-dom';

//import { Link } from "react-router-dom";

const FotoAdm = () => {

    //variaveis


    //funcoes

    // Extrai as informações necessárias do usuário
    const nome = "José";
    const sobrenome = "Luis";

    //const nome = userData.nome;
    //const sobrenome = userData.sobrenome;

    var pnome = '';
    var psobrenome = '';

    if (nome && nome.length > 0) {
        pnome = nome.charAt(0);
    }

    if (sobrenome && sobrenome.length > 0) {
        psobrenome = sobrenome.charAt(0);
    }

    const iniciais = pnome + psobrenome;

    //conteudo HTML
    return (
        <div className={styles.perfil}>
            <p>{iniciais}</p>
        </div>
    )
}

export default FotoAdm