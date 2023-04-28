import { useState } from "react";
import logoLight from "../../src/logo-light.png";

const Login = ({ setLoginActive }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [values, setValues] = useState("form-btn");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      setLoginActive(false);
    } else {
      setValues("form-btn form-btn--error");
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <img src={logoLight} alt="ProductiveU Logo" className="form-logo" />
        {/* <h2 className="form-title">Login</h2> */}
        <div className="form-flex">
          <input
            type="text"
            placeholder="Email"
            className="form-input"
            name="email"
            value={email}
            // required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={values} formAction="submit">
            Login
          </button>
          <p>
            Don't have an account?
            <a className="signin-btn">Create one!</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
