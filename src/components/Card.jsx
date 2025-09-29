function Card({ titulo, descricao }) {
  return (
    <div style={{
      border: '2px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '15px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
        {titulo}
      </h2>
      <p style={{ color: '#666' }}>
        {descricao}
      </p>
    </div>
  );
}

export default Card;