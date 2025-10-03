import "../styles/pages/LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowIcon from "../assets/leftArrow.svg?react";
import { useAuth } from "../contexts/AuthContext";
import { useRef, type FormEvent } from "react";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { loading, setLoading, error, setError, doSignInWithEmailAndPassword } =
    useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;

    try {
      setError("");
      setLoading(true);
      doSignInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/", { replace: true });
    } catch {
      setError("Invalid credentials");
    }

    setLoading(false);
  }

  return (
    <>
      <NavLink id="returnLink" to="/">
        <div className="returnBtn">
          <ArrowIcon id="returnArrow" />
        </div>
      </NavLink>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to Blue Todo</h1>

          {error && <div id="errorText">{error}</div>}

          <div className="form-section">
            <label>Email</label>
            <input type="email" required ref={emailRef} />
          </div>

          <div className="form-section">
            <label>Password</label>
            <input type="password" required ref={passwordRef} />
          </div>

          <button disabled={loading} type="submit" id="loginBtn">
            Login
          </button>

          <p className="login-demo-statement">
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </>
  );
}
