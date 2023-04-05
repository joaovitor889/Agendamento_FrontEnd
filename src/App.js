//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import { Routes, Route } from "react-router-dom";

//tela Land Page
//import LandPage from './components/Login_E_Cadastro/tLandPage.js'

//telas de Login
//import LoginCliente from './components/Login_E_Cadastro/tLoginCliente.js';
//import LoginAdm from './components/Login_E_Cadastro/tLoginAdm';
//import LoginFuncionario from './components/Login_E_Cadastro/tLoginFuncionario.js';


//Telas de Cadastro
//import CadastroCli from './components/Login_E_Cadastro/tCadastroCliente.js';
//import CadastroAdm from  './components/Login_E_Cadastro/tCadastroAdm.js';

//Telas do Cliente
import MenuCli from './components/Cliente/tMenuCliente.js';
//import AgendamentoCli from './components/Cliente/tAgendamentoCli.js';
//import CalendarioCli from './components/Cliente/tCalendarioCliente.js';

//Telas do Profissional
//import CadastroServico from './components/Profissional/tCadastroServico.js';
//import MenuProfissional from './components/Profissional/tMenuProfissional.js';
//import CalendarioProfissional from './components/Profissional/tCalendarioProfissional.js';

//Telas do Administrador
//import MenuADM from './components/Administrador/tMenuADM.js';
//import PesquisaFuncionario from './components/Administrador/tPesqFunc.js';
//import CadastroFuncionario from './components/Administrador/tCadFunc.js';
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
          </Routes> */}   
          {/* <LoginCliente /> */}
          {/* <LoginAdm /> */}
          {/* <LoginFuncionario /> */}
          {/* <CadastroAdm /> */}

          {/*<CadastroCli /> */}
          <MenuCli />
          {/* <AgendamentoCli /> */}
          {/* <CalendarioCli /> */}


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