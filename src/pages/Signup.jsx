import Form from "../components/Form";
import Image from "../components/Image";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Image />
        <Form>
          <TextInput type="text" placeholder="Name" icon="person" />
          <TextInput type="email" placeholder="Email" icon="email" />
          <TextInput type="password" placeholder="Password" icon="lock" />
          <TextInput type="password" placeholder="Confirm Password" icon="lock_clock" />
          <Checkbox text="I agree to the terms" />
          <Button type="submit">
            <span>Sign Up</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
