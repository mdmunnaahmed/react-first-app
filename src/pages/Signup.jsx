import Image from "../components/Image";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Image />
        <SignupForm />
      </div>
    </div>
  );
}
