import styles from './tAgendamentos.module.css';
import menu from '../../img/Menu Rounded.png';
import perfil from '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import block from '../../img/block-func.png'
import filter from '../../img/filter.png'



const telaAgendamentos = () => {

    document.title = "Agendamentos";

    return (
        <main>
        <div className={styles.fAgends}>
            <input type='checkbox' id='check' />
            <input type='checkbox' id='check-rigth' />
            {/* header  começo */}
            <header>
                <div className="esquerda">
                    <label htmlFor='check'>
                        <img src={menu} alt="retunr" className='sidebar_btn' />
                    </label>
                </div>
                <div className="Centro">
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className="direita">
                    <a href="/" className="btn_perfil">
                        <img src={perfil} alt="notificar" />
                    </a>
                    <a href="/" className="btn_noticia">
                        <img src={notificar} alt="notificar" />
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
                <div className='interprise'>
                    <h3>Qual empresa?</h3>
                </div>
            </div>
            {/* sidebar  final */}
            {/* sidebar começo */}
            <div className='sidebar-rigth'>
                <h1>Filtros</h1>
                <br />
                <p>Nome do cliente</p>
                <input type="text" placeholder='Ex: Lara' />
                <br />
                <p>CPF do Cliente</p>
                <input type="text" placeholder='CPF:' />
                <br />
                <p>Nome do Profissional</p>
                <input type="text" placeholder='Joana Joaquina' />

                <button className='btn_fill'>Filtrar</button>
            </div>
            {/* sidebar  final */}
            <label htmlFor='check-rigth' className='filter'>
                    <img src={filter} alt="filtro" />
                    <h4>Filtro</h4>
                </label>
                <div className='calendario'>
                    <div className='row-top'></div>
                    <div className='row-botton'></div>
                </div>
                <a href='/'> <img src={block} alt="bloquear" /></a>
                <div className='Card'>
                    <div className='Card-header'>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className='Card-Body'>
                        <h3>14:00 - 16:00</h3>
                        <div className='Status'>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='Card-header'>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className='Card-Body'>
                        <h3>14:00 - 16:00</h3>
                        <div className='Status'>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='Card-header'>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className='Card-Body'>
                        <h3>14:00 - 16:00</h3>
                        <div className='Status'>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='Card-header'>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className='Card-Body'>
                        <h3>14:00 - 16:00</h3>
                        <div className='Status'>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='Card-header'>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className='Card-Body'>
                        <h3>14:00 - 16:00</h3>
                        <div className='Status'>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='Card-header'>
                        <h2>Cliente: Ana Catarina</h2>
                        <p>Serviços: cabelereira, manicure</p>
                    </div>
                    <div className='Card-Body'>
                        <h3>14:00 - 16:00</h3>
                        <div className='Status'>
                            <h3>Status</h3>
                            <a href="/">Confirmar</a>
                        </div>
                    </div>
                </div>
            

        </div>
        </main>
    )
}

export default telaAgendamentos