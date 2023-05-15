import styles from './tServADM.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import newServ from '../../img/Component 88.png'
import catergory1 from  '../../img/Component 51.png'
import catergory2 from  '../../img/Component 52.png'
import catergory3 from  '../../img/Component 53.png'
import catergory4 from  '../../img/Component 54.png'
import catergory5 from  '../../img/Component 55.png'
import lixeira from '../../icones/trash-2.png'
//import logo from '../../img/logo.PNG';


const telaMenuADM = () => {

    document.title = "Menu do Administrador";

   return (
        <div className = "fMenuADM">
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
            <div className = {styles.container}> 
                    <div className='header-container'>
                        <div className='categories'>
                            <img src= {catergory1} alt="" className='category'/>
                            <img src= {catergory2} alt="" className='category'/>
                            <img src= {catergory3} alt="" className='category'/>
                            <img src= {catergory4} alt="" className='category'/>
                            <img src= {catergory5} alt="" className='category'/>
                        </div>
                        <img src={newServ} alt="" className='newServ'/>
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Corte de cabelo channel</h4>
                        <p className='card-body'>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className='card-footer'>
                            <h4>Preço: 60,00 R$</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Corte de cabelo channel</h4>
                        <p className='card-body'>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className='card-footer'>
                            <h4>Preço: 60,00 R$</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Corte de cabelo channel</h4>
                        <p className='card-body'>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className='card-footer'>
                            <h4>Preço: 60,00 R$</h4>
                            <img src={lixeira} alt="" />
                        </div>
                    </div>
                   
                </div>
            </main>
            
            

        </div>
    )
}

export default telaMenuADM