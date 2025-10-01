function Card({ titulo, descricao }) {
  return (
    <div style={{
      border: '2px solid #a855f7',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px',
      background: 'linear-gradient(to bottom right, #1f1f1f, #2d2d2d)',
      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
      transition: 'all 0.3s'
    }}>
      <h2 style={{ 
        fontSize: '28px', 
        fontWeight: 'bold', 
        color: '#c084fc',
        marginBottom: '12px' 
      }}>
        {titulo}
      </h2>
      <p style={{ 
        color: '#d1d5db', 
        lineHeight: '1.6' 
      }}>
        {descricao}
      </p>
    </div>
  );
}

export default Card;