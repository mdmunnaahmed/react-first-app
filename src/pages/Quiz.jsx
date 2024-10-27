import { useNavigate, useParams } from "react-router-dom";
import Answers from "../components/Answers";
import Player from "../components/Player";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useReducer, useState } from "react";
import useQuestions from "../hooks/useQuestions";
import { cloneDeep } from "lodash";
import { useAuth } from "./../contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      const newQuestions = cloneDeep(action.value);
      newQuestions.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return newQuestions;

    case "answer":
      const updatedQuestions = cloneDeep(state);
      updatedQuestions[action.questionID].options[action.optionIndex].checked = action.value;
      return updatedQuestions;

    default:
      return state;
  }
};

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, err, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (questions && questions.length > 0) {
      dispatch({
        type: "questions",
        value: questions,
      });
    }
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });

    // Navigate to the result page with parameters
    navigate(`/result/${id}`, { state: { qna } });
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {err && <div>Error loading questions...</div>}

      {!loading && !err && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers options={qna[currentQuestion].options} handleChange={handleAnswerChange} />
          <ProgressBar next={nextQuestion} prev={prevQuestion} progress={percentage} submit={submit} />
          <Player />
        </>
      )}
    </div>
  );
};

export default Quiz;
