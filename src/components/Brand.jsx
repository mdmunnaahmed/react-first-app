import logo from "../assets/images/logo-bg.png";
import { Link } from "react-router-dom";
const Brand = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="brand">
          <img src={logo} alt="Learn with Munna Logo" />
          <h3>Learn with Munna</h3>
        </Link>
      </li>
    </ul>
  );
};

export default Brand;
