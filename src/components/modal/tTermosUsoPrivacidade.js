import React from "react";

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
};

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  height: '40%',
  transform: 'translate(-50%,-50%)',
  padding: '25px 10px',
  backgroundColor: '#48A695',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'justify',
  alignItems: 'justify',
  fontFamily: 'Arial',
  fontSize: '16px',
  color: '#000',
  overflowY: 'auto' // Adicionando o overflow y automático
};

const HEADER_STYLE = {
  color: '#3293CA',
  textAlign: 'center',
  backgroundColor: '#000',
  borderRadius: '15px',
  fontSize: '30px'
};

const BTN_STYLE = {
  backgroundColor: '#3293CA',
  color: '#fff',
  height: '30px',
  width: '30px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '50%',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer'
};

export default function Modal({ isOpen, setOpenModalTermosUso, children }) {

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <button onClick={setOpenModalTermosUso} style={BTN_STYLE}>X</button>
          <h2 style={HEADER_STYLE}>Termos de Uso e Política de Privacidade</h2>
          <br />
          <p>Bem-vindo aos Termos de Uso e à Política de Privacidade da nossa plataforma de agendamentos. Neste documento, explicamos como coletamos, usamos e protegemos as informações pessoais dos nossos usuários. Ao utilizar nossa plataforma, você concorda com estes termos e com as práticas descritas abaixo. Leia atentamente todas as informações apresentadas.</p>
          <h3>1. Coleta de Informações</h3>
          <h4>1.1 Informações Pessoais</h4>
          <p>Para fornecer um serviço completo de agendamentos, podemos coletar informações pessoais, como nome, endereço de e-mail, número de telefone e outras informações relevantes.</p>
          <h4>1.2 Informações de Uso</h4>
          <p>Também podemos coletar informações sobre o uso da plataforma, como registros de acesso, endereço IP, tipo de navegador, páginas visualizadas e tempo gasto em nosso site. Essas informações são coletadas de forma automatizada para análise e melhoria da plataforma.</p>
          <h3>2. Uso das Informações</h3>
          <h4>2.1 Fornecimento de Serviços</h4>
          <p>Utilizamos as informações pessoais fornecidas para processar e gerenciar os agendamentos feitos pelos usuários. Esses dados podem ser compartilhados com terceiros, como prestadores de serviços envolvidos na realização dos agendamentos.</p>
          <h4>2.2 Comunicações</h4>
          <p>Podemos utilizar os dados fornecidos para enviar comunicações relacionadas aos agendamentos, como confirmações, lembretes e atualizações importantes sobre o serviço.</p>
          <h4>2.3 Melhoria da Plataforma</h4>
          <p>Utilizamos as informações de uso para analisar e melhorar a plataforma, suas funcionalidades e a experiência do usuário, bem como para realizar pesquisas e estatísticas de mercado.</p>
          <h3>3. Proteção de Dados</h3>
          <h4>3.1 Segurança</h4>
          <p>Implementamos medidas de segurança adequadas para proteger as informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          <h4>3.2 Retenção de Dados</h4>
          <p>Manteremos as informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que seja exigido por lei um período de retenção mais longo.</p>
          <h4>3.3 Cookies</h4>
          <p>Podemos usar cookies e outras tecnologias semelhantes para melhorar a experiência do usuário e personalizar o conteúdo apresentado. Você pode ajustar as configurações do seu navegador para recusar cookies, mas isso pode afetar o funcionamento adequado da plataforma.</p>
          <h3>4. Compartilhamento de Informações</h3>
          <h4>4.1 Terceiros</h4>
          <p>Podemos compartilhar informações pessoais com terceiros apenas quando necessário para a prestação dos serviços, cumprimento de obrigações legais ou com o seu consentimento explícito.</p>
          <h4>4.2 Transferência de Negócio</h4>
          <p>Se a plataforma for adquirida ou fundida com outra empresa, suas informações pessoais podem ser transferidas para os novos proprietários para que possam continuar a fornecer os serviços.</p>
          <h3>5. Direitos do Usuário</h3>
          <h4>5.1 Acesso e Atualização</h4>
          <p>Você tem o direito de acessar, corrigir e atualizar suas informações pessoais fornecidas à plataforma. Entre em contato conosco caso deseje exercer esses direitos.</p>
          <h4>5.2 Cancelamento</h4>
          <p>Se desejar encerrar sua conta e excluir suas informações pessoais, entre em contato conosco para que possamos atender a essa solicitação.</p>
          <h3>6. Alterações na Política de Privacidade</h3>
          <p>Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja esta política regularmente para se manter informado sobre as práticas atuais.</p>
          <p>Caso tenha alguma dúvida ou preocupação sobre estes termos ou nossa política de privacidade, entre em contato conosco. Agradecemos por escolher nossa plataforma de agendamentos!</p>
        </div>
      </div>
    );
  }

  return null;
}
