import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Later replace this with your AWS login API
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="login-card">
        <div className="logo">
          <h1>☁ Cloud Notes</h1>
          <p>Store your notes securely using AWS Cloud</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;