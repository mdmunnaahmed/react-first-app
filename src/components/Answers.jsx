import Checkbox from './Checkbox';

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Checkbox
          key={option.title} // Ensure `option.title` is unique; if not, use another unique key like `index`.
          className="answer"
          text={option.title}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
