import { Link } from "react-router-dom";
import Video from "./Video";
const Videos = () => {
  return (
    <div className="videos">
      <Link>
        <Video />
      </Link>
      <Link>
        <Video />
      </Link>
      <Link>
        <Video />
      </Link>
      <Link>
        <Video />
      </Link>
      <Link>
        <Video />
      </Link>
      <Link>
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
