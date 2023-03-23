//tela de Login
import Login from './components/Login/tLogin.js'

//Telas do Cliente
//import CadastroUsuario from './components/Cliente/tCadastroUsuario.js'
//import MenuCliente from './components/Cliente/tMenuCliente.js'
//import Agendamento from './components/Cliente/tAgendamento.js'
//import CalendarioCliente from './components/Cliente/tCalendarioCliente.js'

//Telas do Profissional
//import CadastroServico from './components/Profissional/tCadastroServico.js'
//import MenuProfissional from './components/Profissional/tMenuProfissional.js'
//import CalendarioProfissional from './components/Profissional/tCalendarioProfissional.js'

//Telas do Administrador
//import MenuADM from './components/Administrador/tMenuADM.js'
//import PesquisaFuncionario from './components/Administrador/tPesqFunc.js'
//import CadastroFuncionario from './components/Administrador/tCadFunc.js'
//import Agendamentos from './components/Administrador/tAgendamentos.js'



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        

        <Login />


        {/* <CadastroUsuario /> */}       
        {/* <MenuCliente /> */}  
        {/* <Agendamento /> */}   
        {/* <CalendarioCliente /> */}    


        {/* <CadastroServico /> */}
        {/* <MenuProfissional /> */}                                              
        {/* <CalendarioProfissional /> */}  


        {/* <MenuADM /> */}        
        {/* <PesquisaFuncionario /> */}        
        {/* <CadastroFuncionario /> */}        
        {/* <Agendamentos /> */}
      </header>
    </div>
  );
}

export default App;