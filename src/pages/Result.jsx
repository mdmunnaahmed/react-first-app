import Analysis from "../components/Analysis";
import Summery from "../components/Summery";
import useAnswers from "../hooks/useAnswer";
import { useParams, useLocation } from "react-router-dom";
import _ from "lodash";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state;

  const { loading, err, answers } = useAnswers(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {err && <div>Error...</div>}
      {!loading && !err && (
        <>
          <Summery score />
          <Analysis />
        </>
      )}
    </div>
  );
};

export default Result;
