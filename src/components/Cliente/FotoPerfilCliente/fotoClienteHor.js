import styles from './fotoClienteHor.module.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import agFetch from '../../../axios/config.js';

const FotoCliHor = () => {
    const { token } = useParams();
    const cvToken = decodeToken(token);
    const userID = cvToken.id;
    const [fotoContent, setFotoContent] = useState();
    const [iniciais, setIniciais] = useState();

    const baseDaUrl = "http://ec2-54-157-10-132.compute-1.amazonaws.com:4000";

    useEffect(() => {
        async function PegaFoto() {
            try {
                const usResponse = await agFetch.get(`/cliente/pegarPorId?id=${userID}`);
                const fotoAvatar = usResponse.data.urlFoto;

                console.log(fotoAvatar);

                if (fotoAvatar === "userAvatar.png" || fotoAvatar === null) {
                    // Lógica das iniciais
                    const nomeCompleto = usResponse.data.nome;

                    if (nomeCompleto.includes(' ')) {
                        const primeiroEspaco = nomeCompleto.indexOf(' ');
                        const ultimoEspaco = nomeCompleto.lastIndexOf(' ');

                        const nome = nomeCompleto.substring(0, primeiroEspaco);
                        const sobrenome = nomeCompleto.substring(ultimoEspaco + 1);

                        const pNome = nome.charAt(0).toUpperCase();
                        const sNome = sobrenome.charAt(0).toUpperCase();

                        const inic = pNome + sNome;
                        setIniciais(inic);
                    } else {
                        const inic = nomeCompleto.slice(0, 2).toUpperCase();
                        setIniciais(inic);
                    }
                } else {
                    const lFoto = baseDaUrl + '/Cliente/' + fotoAvatar;
                    setFotoContent(lFoto);
                }
            } catch (error) {
                console.log(error);
            }
        }

        PegaFoto();
    }, [userID]);

    // Conteúdo HTML
    return (
        <div className={styles.perfil}>
            {fotoContent ? (
                <img src={fotoContent} alt="Foto de perfil" />
            ) : (
                <div className={styles.fundo}>
                    <p>{iniciais}</p>
                </div>
            )}
        </div>
    );
};

export default FotoCliHor;