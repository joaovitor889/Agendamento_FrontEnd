import { Routes, Route } from "react-router-dom";

//tela Land Page
import LandPage from './components/Login_E_Cadastro/tLandPage.js';
import OpcLogin from './components/Login_E_Cadastro/tMenuOpcLogin.js';
import OpcCadastro from './components/Login_E_Cadastro/tMenuOpcCadastro.js';

//telas de Login
import LoginCli from './components/Login_E_Cadastro/tLoginCli.js';
import EsqSenhaCli from './components/Login_E_Cadastro/tEsqueceuSenhaCli.js';
import EsqSenhaFunc from './components/Login_E_Cadastro/tEsqueceuSenhaFunc.js';
import LoginAdm from './components/Login_E_Cadastro/tLoginAdm';
import LoginFunc from './components/Login_E_Cadastro/tLoginFunc.js';


//Telas de Cadastro
import CadastroCli from './components/Login_E_Cadastro/tCadastroCli.js';
import CadastroAdm from  './components/Login_E_Cadastro/tCadastroAdm.js';

//Telas do Cliente
import MenuCli from './components/Cliente/tMenuCli.js';
import AgendarCli from './components/Cliente/tAgendarCli.js';
import AgendamentoCli from './components/Cliente/tAgendamentoCli.js';


//Perfil do Cliente
import DadosBasicoCli from './components/Cliente/tMenuDBCli.js';
import EnderecoCli from './components/Cliente/tMenuEnderecoCli.js';
import FotoCli from './components/Cliente/tMenuFotoCli.js';

//Telas do Profissional
import MenuProfissional from './components/Profissional/tMenuProfis.js';
import AgendamentoProfis from './components/Profissional/tAgendamentoProfis.js';
import FotoProfis from './components/Profissional/tMenuFotoProf.js';

//Telas do Administrador
import AgendarADM from './components/Administrador/tAngendarADM.js'
import CadServicos from './components/Administrador/tCadServico.js'
import ServADM from './components/Administrador/tServADM.js';
import PesquisaFunc from './components/Administrador/tPesqFunc.js';
import CadastroFunc from './components/Administrador/tCadFunc.js';
import Agendamentos from './components/Administrador/tAgendamentos.js';



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route index element={<Agendamentos />} />
            <Route path = "/tMenuOpcLogin" element = {<OpcLogin />} />
            <Route path = "/tMenuOpcCadastro" element = {<OpcCadastro />} />

            <Route  path = "/tLoginAdm" element = {<LoginAdm />} />
            <Route  path = "/tCadastroAdm" element = {<CadastroAdm />} />
            <Route  path = "/tLoginCli" element = {<LoginCli />} />
            <Route  path = "/tEsqueceuSenhaCli" element = {<EsqSenhaCli />} />
            <Route  path = "/tEsqueceuSenhaFunc" element = {<EsqSenhaFunc />} />
            <Route  path = "/tCadastroCli" element = {<CadastroCli />} />
            <Route  path = "/tLoginFunc" element = {<LoginFunc />} />
            
            {/* Telas do Administrador */}
            <Route path="/tAgendarADM" element = {<AgendarADM />} />
            <Route path="/tCadServico" element = {<CadServicos />} />
            <Route path="/tServADM" element = {<ServADM />} />
            <Route path="/tPesqFunc" element =  {<PesquisaFunc />} />
            <Route path="/tCadFunc" element = {<CadastroFunc />} />
            <Route path="/tAgendamentosADM" element = {<Agendamentos />} />


            {/* Telas do Cliente */}
            <Route  path = "/tMenuCli" element = {<MenuCli />} />
            <Route  path = "/tAgendarCli" element = {<AgendarCli />} />
            <Route  path = "/tAgendamentoCli" element = {<AgendamentoCli />} />
            {/* Perfil do Cliente */}
            <Route  path = "/tMenuDBCli" element = {<DadosBasicoCli />} />
            <Route  path = "/tMenuEnderecoCli" element = {<EnderecoCli />} />
            <Route  path = "/tMenuFotoCli" element = {<FotoCli />} />


            {/* Telas do Funcionario */}
            <Route  path = "/tMenuProfis" element = {<MenuProfissional />} />
            <Route  path = "/tAgendamentoProfis" element = {<AgendamentoProfis />} />
            {/* Perfil do Funcionario */}
            <Route  path = "/tMenuFotoProf" element = {<FotoProfis />} />
          

            <Route  path = "/tLoginAdm" element = {<LoginAdm />} />            
          </Routes>                
      </header>
    </div>
  );
}

export default App;
