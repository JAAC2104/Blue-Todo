import { NavLink, useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";
import ArrowIcon from "../assets/leftArrow.svg?react";
import { useAuth } from "../contexts/AuthContext";
import { useRef, type FormEvent } from "react";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { loading, setLoading, error, setError, doSignInWithEmailAndPassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;

    try {
      setError("");
      setLoading(true);
      await doSignInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/", { replace: true });
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <NavLink id="returnLink" to="/" aria-label="Back to home">
        <div className="returnBtn">
          <ArrowIcon id="returnArrow" />
        </div>
      </NavLink>

      <div className="login-container">
        <form onSubmit={handleSubmit} noValidate aria-busy={loading}>
          <h1>Welcome to Blue Todo</h1>

          {error && (
            <div id="errorText" role="alert">
              {error}
            </div>
          )}

          <div className="form-section">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              ref={emailRef}
              autoComplete="email"
              disabled={loading}
            />
          </div>

          <div className="form-section">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              ref={passwordRef}
              autoComplete="current-password"
              disabled={loading}
            />
          </div>

          <button disabled={loading} type="submit" id="loginBtn">
            {loading ? "Logging in…" : "Login"}
          </button>

          <p className="login-demo-statement">
            Don&apos;t have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
