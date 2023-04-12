import './tCadServico.css';
import voltar from '../../icones/Return.png';
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'

const telaCadServico = () => {
    document.title ="Cadastrar Serviço";

    return (
        <div className='fCadServico'>
             {/* header  começo */}
             <header>
                <div className="esquerda">
                    <a href="/">
                    <img src = {voltar} alt = "retunr" />
                    </a>
                </div>
                <div className="Centro">
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className="direita">
                    <a href="" className="btn_perfil">
                        <img src= {perfil} alt="notificar" />
                    </a>
                    <a href="" className="btn_noticia">
                        <img src= {notificar} alt="notificar" />
                    </a>
                </div>
            </header>
            {/* final do header */}
            {/* sidebar começo */}
            <div className='sidebar'>
                <a href="/">Profissionais</a>
                <a href="/">Agendamentos</a>
                <a href="/">Agendar</a>
                <a href="/">Serviços</a>
                <a href="/">Perfil</a>
            </div>
            {/* sidebar  final */}
        </div>
    )
}