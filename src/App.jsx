import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Exercício de Props
      </h1>
      
      <Card 
        titulo="React Props" 
        descricao="Props são argumentos passados para componentes React."
      />
      
      <Card 
        titulo="Componentes Reutilizáveis" 
        descricao="Com props, podemos criar componentes que exibem diferentes conteúdos."
      />
    </div>
  );
}

export default App;