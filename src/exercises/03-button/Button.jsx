const buttonStyle = {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '4px',
  border: '1px solid',
  borderRadius: '4px',
  padding: '8px',
  backgroundColor: '#fff',
};

const buttonTypeStyle = {
  delete: {
    color: '#f53535',
    borderColor: '#f53535',
  },
  edit: {
    color: '#7f7f7f',
    borderColor: '#7f7f7f',
  },
};

const Button = ({ type, text }) => {
  return (
    <button type="button" style={{ ...buttonStyle, ...buttonTypeStyle[type] }}>
      <p>{text}</p>
      <img src={`/src/assets/${type}.svg`} alt="" />
    </button>
  );
};

export default Button;
