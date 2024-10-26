const Form = ({ children, ...rest }) => {
  return (
    <div>
      <form className="signup form" {...rest}>
        {children}
      </form>
    </div>
  );
};

export default Form;
