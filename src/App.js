//import { Routes, Route } from "react-router-dom";

//tela Land Page
import LandPage from './components/Login_E_Cadastro/tLandPage.js'

//telas de Login
<<<<<<< HEAD
import LoginCliente from './components/Login_E_Cadastro/tLoginCliente.js';
//import LoginAdm from './components/Login_E_Cadastro/tLoginAdm.js';
//import LoginFuncionario from './components/Login_E_Cadastro/tLoginFuncionario.js';


//Telas de Cadastro
//import CadastroCliente from './components/Login_E_Cadastro/tCadastroCliente.js';
=======
//import LoginCli from './components/Login_E_Cadastro/tLoginCli.js';
//import LoginAdm from './components/Login_E_Cadastro/tLoginAdm';
//import LoginFunc from './components/Login_E_Cadastro/tLoginFunc.js';


//Telas de Cadastro
//import CadastroCli from './components/Login_E_Cadastro/tCadastroCli.js';
>>>>>>> b6c250b2c5d1b29501e8ac78255fc7fea16ea715
//import CadastroAdm from  './components/Login_E_Cadastro/tCadastroAdm.js';

//Telas do Cliente
//import MenuCli from './components/Cliente/tMenuCli.js';
//import AgendamentoCli from './components/Cliente/tAgendamentoCli.js';
//import CalendarioCli from './components/Cliente/tCalendarioCliente.js';

//Telas do Profissional
//import CadastroServico from './components/Profissional/tCadastroServico.js';
//import MenuProfissional from './components/Profissional/tMenuProfissional.js';
//import CalendarioProfis from './components/Profissional/tCalendarioProfis.js';

//Telas do Administrador
//import MenuADM from './components/Administrador/tMenuADM.js';
<<<<<<< HEAD
//import PesquisaFuncionario from './components/Administrador/tPesqFunc.js';
import CadastroFuncionario from './components/Administrador/tCadFunc.js';
=======
//import PesquisaFunc from './components/Administrador/tPesqFunc.js';
//import CadastroFunc from './components/Administrador/tCadFunc.js';
>>>>>>> b6c250b2c5d1b29501e8ac78255fc7fea16ea715
//import Agendamentos from './components/Administrador/tAgendamentos.js';



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <LandPage /> */} 
          {/* <Routes>
            <Route index element={<LandPage />} />
            <Route  path = "/tLoginAdm" element={<LoginAdm />} />
            <Route  path = "/tCadastroAdm" element={<CadastroAdm />} />
            <Route path = "/tLoginCli" element = {<LoginCli />} />
            <Route  path = "/tMenuCli" element={<MenuCli />} />
            <Route  path = "/tLoginAdm" element={<LoginAdm />} />
            </Routes> */}     
          <LandPage />   
          
          {/* <LoginCliente /> */}
          {/* <LoginAdm /> */}
          {/* <LoginFuncionario /> */}
          {/* <CadastroAdm /> */}

<<<<<<< HEAD

        {/* <LandPage /> */}
        {/* <CadastroAdm /> */}
        
        
        {/* <LoginCliente />  */}
        {/* <LoginAdm /> */}
        {/* <LoginFuncionario /> */}

        {/*<CadastroCliente /> */}
        {/* <MenuCliente /> */}  
        {/* <Agendamento /> */}   
        {/* <CalendarioCliente /> */}    
=======
          {/*<CadastroCli /> */}
          
          {/* <AgendamentoCli /> */}
          {/* <CalendarioCli /> */}
>>>>>>> b6c250b2c5d1b29501e8ac78255fc7fea16ea715


          {/* <CadastroServico /> */}
          {/* <MenuProfissional /> */}
          {/* <CalendarioProfissional /> */}


<<<<<<< HEAD
        {/* <MenuADM /> */}        
        {/* <PesquisaFuncionario /> */}        
         <CadastroFuncionario />         
        {/* <Agendamentos /> */}
=======
          {/* <MenuADM /> */}
          {/* <PesquisaFuncionario /> */}
          {/* <CadastroFuncionario /> */}
          {/* <Agendamentos /> */}
>>>>>>> b6c250b2c5d1b29501e8ac78255fc7fea16ea715
      </header>
    </div>
  );
}

export default App;