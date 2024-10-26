import Answers from "../components/Answers";
import Player from "../components/Player";
import ProgressBar from "../components/ProgressBar";

const Quiz = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <Player />
    </div>
  );
};

export default Quiz;
