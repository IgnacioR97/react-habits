const Toolbar = ({ options }) => {
  return (
    <div className="toolbar-container">
      <img
        className="toolbar-logo"
        src="https://example.com/logo.png"
        alt="Logo"
      />
      <div className="toolbar-options">
        {options.map((option, index) => (
          <span className="toolbar-option" key={option}>
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
