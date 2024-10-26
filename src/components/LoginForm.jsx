import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const { login } = useAuth();

  async function formSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/"); // Redirect to home after login
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to log in"); // Adjusted error message for clarity
    }
  }

  return (
    <Form onSubmit={formSubmit}>
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
      <Button disabled={loading} type="submit">
        <span>Login</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Dont have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
