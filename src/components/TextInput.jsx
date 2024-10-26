const TextInput = ({ icon, ...rest }) => {
  return (
    <div>
      <div className="textInput">
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </div>
  );
};

export default TextInput;
