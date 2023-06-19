//Este tipo de arquivo e salvo com a extensao .js ou .jsx

import styles from './fotoEmpresa.module.css';

import Logo from '../../img/logo.png';

import { useState, useEffect, useRef } from "react";

const FotoEmpresa = () => {
    //variaveis


    //funcoes

    return (
        <div className={styles.fotoEmpresa}>
            <div className="row" id = {styles["imagem"]}>
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}

export default FotoEmpresa