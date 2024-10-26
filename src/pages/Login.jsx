import Form from "../components/Form";
import Image from "../components/Image";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h1>Login to an account</h1>
      <div className="column">
        <Image />
        <Form>
          <TextInput type="email" placeholder="Email" icon="email" />
          <TextInput type="password" placeholder="Password" icon="lock" />
          <Button type="submit">
            <span>Login</span>
          </Button>

          <div className="info">
            Dont have any account? <Link to="/signup">Sign Up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
