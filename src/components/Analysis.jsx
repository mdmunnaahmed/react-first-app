import Question from "./Question";

const Analysis = () => {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>

      <div className="question">
        <div className="qtitle">
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Question />
      </div>
    </div>
  );
};

export default Analysis;
