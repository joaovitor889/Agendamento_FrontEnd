import styles from './tPesqFunc.module.css';
import menu from '../../img/Menu Rounded.png'
import perfil from  '../../img/perfil.png'
import notificar from '../../img/notificar.png'
import filter from '../../img/filter.png'
import add from '../../img/add-func.png'
import block from '../../img/block-func.png'
import lixeira from '../../icones/trash-2.png'


const telaPesqCli = () => {

   document.title = "Pesquisar Cliente";

   return (
        <div className = "fPesqCli">
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
            <div className = {styles.container}> 
                <div className='header-main'>
                    <div className='filter'>
                        <img src= {filter} alt="" id='icon-filter' />
                        <h4>Filtre</h4>
                        <input type="text" placeholder='nome cliente'/>
                        <button>Pesquisar</button>
                    </div>
                    <div className='Clientes'> 
                        <img src={block} alt="" />
                        <img src={add} alt="" />
                    </div>
                </div>
                <div className='cards'>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                    <div  className='card'>
                        <h4 className='card-header'>Nome: João</h4>
                        <h4 className='card-footer'>Telefone: (XX) 0000-0000</h4>
                        <img src={lixeira} alt="lixeira" />
                    </div>
                   
                </div>
                
            </div>
            
        </div>
    )
}

export default telaPesqCli