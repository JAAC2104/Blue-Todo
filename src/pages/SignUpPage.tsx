import { NavLink } from "react-router-dom";
import "../styles/pages/LoginPage.css";
import ArrowIcon from "../assets/leftArrow.svg?react"

export default function SignUpPage() {
  return (<>
    <NavLink id="returnLink" to="/">
      <div className="returnBtn">
        <ArrowIcon id="returnArrow"/>
      </div>
    </NavLink>
    <div className="login-container">
      <form>
        <h1>Welcome to Blue Todo</h1>

        <div className="form-section">
          <label>Username</label>
          <input type="text" required/>
        </div>

        <div className="form-section">
          <label>Email</label>
          <input type="email" required/>
        </div>

        <div className="form-section">
          <label>Password</label>
          <input type="password" required/>
        </div>

        <div className="form-section">
          <label>Confirm Password</label>
          <input type="password" required/>
        </div>

        <button id="loginBtn">Login</button>

        <p className="login-demo-statement">
          <p>Already have an account? <NavLink to='/login'>Log In</NavLink></p>
        </p>
      </form>
    </div>
  </>);
}
