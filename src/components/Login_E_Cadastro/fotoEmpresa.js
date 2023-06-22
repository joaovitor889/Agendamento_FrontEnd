//Este tipo de arquivo e salvo com a extensao .js ou .jsx

import styles from './fotoEmpresa.module.css';

import { useState, useEffect, useRef } from "react";

import { useParams } from 'react-router-dom';

import agFetch from '../../axios/config';

const FotoEmpresa = () => {
    //variaveis
    const { uid } = useParams();

    const baseDaUrl = "http://ec2-54-157-10-132.compute-1.amazonaws.com:4000";

    const [lnkFoto , setLnkFoto] = useState();

    useEffect(() => {
        async function PegaFoto() {
            try {
                const fotoResponse = await agFetch.get(`/estabelecimento/${uid}`);
                const foto = fotoResponse.data.imageUrl;
                if (foto === null) {
                    console.log("Não há imagem!");
                    const lFoto = 'http://ec2-54-157-10-132.compute-1.amazonaws.com:4000/Estabelicimento/logoEstabelecimento.png';
                    setLnkFoto(lFoto);
                } else {
                    const lFoto = baseDaUrl + '/Estabelicimento/' + foto;
                    console.log(lFoto);
                    setLnkFoto(lFoto);
                }
            } catch (error) {
                console.log(error);
            }
        }
        PegaFoto();
    }, [uid])

    //funcoes

    return (
        <div className={styles.fotoEmpresa}>
            <div className="row" id={styles["imagem"]}>
                <img src={lnkFoto} alt="Logo" />
            </div>
        </div>
    )
}

export default FotoEmpresa