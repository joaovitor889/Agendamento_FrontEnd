//import { Routes, Route } from "react-router-dom";

//tela Land Page
//import LandPage from './components/Login_E_Cadastro/tLandPage.js'

//telas de Login
//import LoginCli from './components/Login_E_Cadastro/tLoginCli.js';
//import LoginAdm from './components/Login_E_Cadastro/tLoginAdm';
//import LoginFunc from './components/Login_E_Cadastro/tLoginFunc.js';


//Telas de Cadastro
//import CadastroCli from './components/Login_E_Cadastro/tCadastroCli.js';
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
//import PesquisaFunc from './components/Administrador/tPesqFunc.js';
//import CadastroFunc from './components/Administrador/tCadFunc.js';
//import Agendamentos from './components/Administrador/tAgendamentos.js';
import CadastroServicos from   './components/Administrador/tCadServico';



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
          {/* <LandPage />    */}
          
          {/* <LoginCliente /> */}
          {/* <LoginAdm /> */}
          {/* <LoginFuncionario /> */}
          {/* <CadastroAdm /> */}

          {/*<CadastroCli /> */}
          
          {/* <AgendamentoCli /> */}
          {/* <CalendarioCli /> */}


           <CadastroServicos />
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