const Button = ({ className, children }) => {
  return (
    <div>
      <div className={`${className} button`}>{children}</div>
    </div>
  );
};

export default Button;
