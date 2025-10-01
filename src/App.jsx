import Card from './components/Card';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom right, #000000, #3b0764, #000000)',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          textAlign: 'center',
          background: 'linear-gradient(to right, #c084fc, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '40px'
        }}>
          Exercício de Props em React
        </h1>
        
        <Card 
          titulo="Adereços React" 
          descricao="Props são argumentos passados para componentes React. Eles funcionam como parâmetros de função e permitem transmitir dados do componente pai para o filho."
        />
        
        <Card 
          titulo="Componentes Reutilizáveis" 
          descricao="Com isso, podemos criar componentes reutilizáveis que exibam diferentes conteúdos baseados nos dados recebidos. Isso torna o código mais limpo e manutenível."
        />
        
        <Card 
          titulo="Comunicação Unidirecional" 
          descricao="No React, os dados fluem de cima para baixo (do pai para o filho) através das props. Isso é conhecido como 'one-way data flow' e torna o código mais previsível."
        />
      </div>
    </div>
  );
}

export default App;