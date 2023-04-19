import { useState } from "react";
import Login from "./components/Login";
import SideCards from "./components/SideCards";
import TextEditor from "./components/TextEditor";
import Password from "./components/Password";

function App() {
  const [loginActive, setLoginActive] = useState(true);
  const [access, setAccess] = useState(false);

  return (
    <main>
      {access ? (
        loginActive ? (
          <Login setLoginActive={setLoginActive} />
        ) : (
          <>
            <TextEditor />
            <SideCards />
          </>
        )
      ) : (
        <Password setAccess={setAccess} />
      )}
    </main>
  );
}

export default App;
