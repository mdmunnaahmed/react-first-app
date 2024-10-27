const Button = ({ className, children, ...rest }) => {
  return (
    <button style={{ padding: "0", background: "transparent", border: "none" }} {...rest}>
      <div className={`${className} button`}>{children}</div>
    </button>
  );
};

export default Button;
