# 🎯 Exercício de Props em React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Sobre o Projeto

Projeto desenvolvido para praticar o conceito de **Props** em React. O objetivo é entender como passar informações do componente pai para o componente filho, criando componentes reutilizáveis.

Este exercício demonstra a criação de um componente `Card` que recebe props e renderiza diferentes conteúdos baseados nos dados recebidos.

## 🎨 Preview

![Preview do Projeto](https://recebendo-e-renderizando-props-react.netlify.app/)

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **CSS Inline** - Estilização com gradientes preto e roxo

## 📚 Conceitos Aprendidos

- ✅ Criação de componentes reutilizáveis
- ✅ Passagem de props do componente pai para filho
- ✅ Desestruturação de props
- ✅ Renderização dinâmica de conteúdo
- ✅ Comunicação unidirecional (one-way data flow)

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DevAlex-full/exercicio-props-react.git
```

2. Acesse a pasta do projeto:
```bash
cd exercicio-props-react
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npm run dev
```

5. Abra o navegador em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── Card.jsx          # Componente que recebe props
├── App.jsx               # Componente principal
└── main.jsx              # Arquivo de entrada
```

## 💡 Como Funciona

### Componente Card
```jsx
function Card({ titulo, descricao }) {
  return (
    <div style={{ /* estilos */ }}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}
```

### Uso no App.jsx
```jsx
<Card 
  titulo="React Props" 
  descricao="Props são argumentos passados para componentes React."
/>
```

O componente `Card` é reutilizado múltiplas vezes com diferentes valores de props, demonstrando a flexibilidade e reusabilidade dos componentes React.

## 🎓 O que são Props?

**Props** (propriedades) são argumentos passados para componentes React, similar a parâmetros de função. Elas permitem:

- Passar dados do componente pai para o filho
- Criar componentes dinâmicos e reutilizáveis
- Manter o fluxo de dados unidirecional
- Tornar o código mais organizado e manutenível

## 🌐 Deploy

Este projeto está disponível online em: https://recebendo-e-renderizando-props-react.netlify.app/

## 👨‍💻 Autor

**Alex** - [DevAlex-full](https://github.com/DevAlex-full)

- Portfolio: [portifoliodevalex.netlify.app](https://portifoliodevalex.netlify.app/)
- GitHub: [@DevAlex-full](https://github.com/DevAlex-full)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto foi útil para você, deixe uma estrela!

**#React #JavaScript #Props #Frontend #WebDevelopment**
