import { NavLink, useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";
import ArrowIcon from "../assets/leftArrow.svg?react"
import { useRef, type FormEvent } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function SignUpPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const {loading, setLoading, error, setError, doCreateUserWithEmailAndPassword} = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(!nameRef.current || !emailRef.current || !passwordRef.current || !confirmPasswordRef.current) return

    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError("Passwords must match");
    }

    try {
      setError("");
      setLoading(true);
      doCreateUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      navigate("/", {replace: true});
    } catch{
      setError("Failed to create an account")
    }

    setLoading(false);
  }

  return (<>
    <NavLink id="returnLink" to="/">
      <div className="returnBtn">
        <ArrowIcon id="returnArrow"/>
      </div>
    </NavLink>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Blue Todo</h1>

        {error && <div id="errorText">{error}</  div>}

        <div className="form-section">
          <label>Username</label>
          <input type="text" required ref={nameRef}/>
        </div>

        <div className="form-section">
          <label>Email</label>
          <input type="email" required ref={emailRef}/>
        </div>

        <div className="form-section">
          <label>Password</label>
          <input type="password" required ref={passwordRef}/>
        </div>

        <div className="form-section">
          <label>Confirm Password</label>
          <input type="password" required ref={confirmPasswordRef}/>
        </div>

        <button disabled={loading} type="submit" id="loginBtn">Sign Up</button>

        <p className="login-demo-statement">
            Already have an account? <NavLink to="/login">Log In</NavLink>
        </p>
      </form>
    </div>
  </>);
}
