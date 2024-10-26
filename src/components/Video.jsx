import { Link } from "react-router-dom";
import image from "../assets/images/3.jpg";
const Video = () => {
  return (
    <div>
      <Link to="quiz">
        <div className="video">
          <img src={image} alt="video" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className="qmeta">
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
