import Form from "./Form";
import Button from "./Button";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from "react";
import { useAuth } from "./../contexts/AuthContext";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const { signup } = useAuth();

  async function formSubmit(e) {
    e.preventDefault();

    // Check if the user agreed to the terms
    if (!agree) {
      return setError("You must agree to the terms and conditions");
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username); // Call signup function
      navigate("/"); // Redirect to root path after successful signup
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Form onSubmit={formSubmit}>
      <TextInput
        type="text"
        placeholder="Name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextInput
        type="email"
        placeholder="Email"
        icon="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="password"
        placeholder="Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextInput
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <Checkbox 
        text="I agree to the terms" 
        checked={agree} 
        onChange={(e) => setAgree(e.target.checked)} 
      />

      <Button disabled={loading} type="submit">
        <span>Sign Up</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Form>
  );
};

export default SignupForm;
