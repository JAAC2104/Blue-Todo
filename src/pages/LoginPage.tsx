import "../styles/pages/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <form>
        <h1>Welcome to Blue Todo</h1>

        <div className="form-section">
          <label>Username</label>
          <input />
        </div>

        <div className="form-section">
          <label>Password</label>
          <input />
        </div>

        <button>Login</button>

        <p className="login-demo-statement">
          Demo: Use any username/password to login
        </p>
      </form>
    </div>
  );
}
