import { useState } from "react";
import Login from "./components/Login";
import SideCards from "./components/SideCards";
import TextEditor from "./components/TextEditor";

function App() {
  const [loginActive, setLoginActive] = useState(true);

  return (
    <main>
      {loginActive ? (
        <Login setLoginActive={setLoginActive} />
      ) : (
        <>
          <TextEditor /> <SideCards />
        </>
      )}
    </main>
  );
}

export default App;
