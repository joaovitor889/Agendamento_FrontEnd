import { Routes, Route } from "react-router-dom";

//tela Land Page
import LandPage from './components/Login_E_Cadastro/tLandPage.js';
import OpcLogin from './components/Login_E_Cadastro/tMenuOpcLogin.js';
import OpcCadastro from './components/Login_E_Cadastro/tMenuOpcCadastro.js';

//telas de Login
import LoginCli from './components/Login_E_Cadastro/tLoginCli.js';
import EsqSenhaCli from './components/Login_E_Cadastro/tEsqueceuSenhaCli.js';
import AltSenhaCli from './components/Login_E_Cadastro/alterarSenhaCli.js';
import EsqSenhaFunc from './components/Login_E_Cadastro/tEsqueceuSenhaFunc.js';
import AltSenhaFunc from './components/Login_E_Cadastro/alterarSenhaFunc.js';
import EsqSenhaAdm from './components/Login_E_Cadastro/esqSenhaAdm.js';
import AltSenhaAdm from './components/Login_E_Cadastro/alterarSenhaAdm.js';
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
import AgendarADM from './components/Administrador/tAngendarADM.js';
import CadServicos from './components/Administrador/tCadServico.js';
//import Categorias from './components/Administrador/tCategoria.js';
import ServADM from './components/Administrador/tServADM.js';
import PesquisaFunc from './components/Administrador/tPesqFunc.js';
import PesquisaCli from './components/Administrador/tPesqCli.js';
import CadastroFunc from './components/Administrador/tCadFunc.js';
import Agendamentos from './components/Administrador/tAgendamentos.js';
import DadosBasicosAdm from './components/Administrador/tMenuDBADM.js';
import EnderecoAdm from './components/Administrador/tMenuEnderecoADM.js';
import FotoADM from './components/Administrador/tMenuFotoADM.js';
import Empreendimento from './components/Administrador/tMenuEmpr.js';
import NovoEmpreendimento from './components/Administrador/tMenuEmprNew.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route index element={<LandPage />} />
            <Route path = "/tMenuOpcLogin" element = {<OpcLogin />} />
            <Route path = "/tMenuOpcCadastro" element = {<OpcCadastro />} />

            {/* Login e Cadastro */}
            <Route  path = "/tLoginAdm" element = {<LoginAdm />} />
            <Route path = "/tEsqueceuSenhaAdm" element = {<EsqSenhaAdm />} />
            <Route path = "/tAlterarSenhaAdm" element = {<AltSenhaAdm />} />
            <Route  path = "/tCadastroAdm" element = {<CadastroAdm />} />
            <Route  path = "/tLoginCli" element = {<LoginCli />} />
            <Route  path = "/tEsqueceuSenhaCli" element = {<EsqSenhaCli />} />
            <Route  path = "/tAlterarSenhaCli" element = {<AltSenhaCli />} />
            <Route  path = "/tEsqueceuSenhaFunc" element = {<EsqSenhaFunc />} />
            <Route path = "/tAlterarSenhaFunc" element = {<AltSenhaFunc />} />
            <Route  path = "/tCadastroCli" element = {<CadastroCli />} />
            <Route  path = "/tLoginFunc" element = {<LoginFunc />} />
            
            {/* Telas do Administrador */}
            <Route path="/tAgendarADM/" element = {<AgendarADM />} />
            <Route path="/tCadServico/:token/:uid" element = {<CadServicos />} />
            {/*<Route path="/tCategoriaADM" element = {<Categorias />} />*/}
            <Route path="/tServADM/:token/:uid" element = {<ServADM />} />
            <Route path="/tPesqFunc/:token/:uid" element =  {<PesquisaFunc />} />
            <Route path="/tCadFunc/:token/:uid" element = {<CadastroFunc />} />
            <Route path="/tAgendamentosADM/:token/:uid" element = {<Agendamentos />} />
            <Route path="/tPesqCli/:token/:uid" element = {<PesquisaCli />} />

            {/* Perfil do Administrador */}
            <Route path="/tMenuDBADM/:token/:uid" element = {<DadosBasicosAdm />} />
            <Route path="/tMenuEnderecoADM/:token/:uid" element = {<EnderecoAdm />} />
            <Route path="/tMenuFotoADM/:token/:uid" element = {<FotoADM />} />
            
            <Route path="/tNovoEmpreendimento/:token/:uid" element = {<NovoEmpreendimento />} />
            <Route path="/tEmpreendimento/:token/:uid" element = {<Empreendimento/>} />
            

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