import './tAgendarADM.css';
import menu from '../../img/Menu Rounded.png';
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import catergory1 from  '../../img/Component 51.png'
import catergory2 from  '../../img/Component 52.png'
import catergory3 from  '../../img/Component 53.png'
import catergory4 from  '../../img/Component 54.png'
import catergory5 from  '../../img/Component 55.png'


const telaAgendarADM = () => {
    document.title ="Cadastrar Serviço";

    return (
        <div className='fAgendar'>
            <input type='checkbox' id='check'/>
             {/* header  começo */}
             <header>
                <div className="esquerda">
                    <label  for = 'check'>
                        <img src = {menu} alt = "retunr"  className='sidebar_btn'/>
                    </label>
                </div>
                <div className="Centro">
                    <h3>Shostners & Shostners</h3>
                </div>
                <div className="direita">
                    <a href="/" className="btn_perfil">
                        <img src= {perfil} alt="notificar" />
                    </a>
                    <a href="/" className="btn_noticia">
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
                <div className='interprise'>
                    <h3>Qual empresa?</h3>
                </div>
            </div>
            {/* sidebar  final */}
            <main>
                <div className='Container'>
                  <h1>Agendar</h1>
                  <div className='categories'>
                    <img src= {catergory1} alt="" className='category'/>
                    <img src= {catergory2} alt="" className='category'/>
                    <img src= {catergory3} alt="" className='category'/>
                    <img src= {catergory4} alt="" className='category'/>
                    <img src= {catergory5} alt="" className='category'/>
                  </div>
                  <div className='dados'>
                    <input type="text" className='texto' placeholder='Serviço'/>
                    <input type="text" className='texto' placeholder='Profissional'/>
                    <div className='dois_campos'>
                        <input type="text" className='texto' />
                        <input type="text" className='texto' />
                    </div>
                    <input type="text" className='texto' />
                  </div>
                  <div className='client'>
                    <input type="text" className='texto' />
                    <input type="text" className='texto' />
                    <input type="text" className='texto' />
                  </div>
                  <div className='finsh'>
                    <input type="text" className='texto texto-demonstrativo' />
                    <br/>
                    <a href="/">Cadastrar</a>
                  </div>
                </div>
            </main>
        </div>
    )
}

export default telaAgendarADM