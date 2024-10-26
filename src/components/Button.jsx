const Button = ({ className, children }) => {
  return (
    <button style={{ padding: "0", background: "transparent", border: "none" }}>
      <div className={`${className} button`}>{children}</div>
    </button>
  );
};

export default Button;
