import { useState } from "react";
import logoLight from "../../src/logo-light.png";
import { sha256 } from "crypto-js";

const password = "mySuperSecretPassword";
const hash = sha256(password).toString();
console.log(hash);

const Password = ({ setAccess }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      if (password === `@${code}yam`) {
        setAccess(true);
      }
    }
  };

  let code = "gleneagles";

  return (
    <div className="form-container">
      <form className="form form-password" onSubmit={handleSubmit}>
        <img src={logoLight} alt="ProductiveU Logo" className="form-logo" />
        <div className="form-flex">
          <input
            type="password"
            placeholder="Secret Password"
            className="form-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <button className="form-btn" formAction="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};
export default Password;
