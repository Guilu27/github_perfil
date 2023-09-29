import Perfil from "./components/Perfil";
import Form from "./components/Form";
import ReposList from "./components/ReposList";

import "./global.css";
import { useState } from "react";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          {" "}
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* <Form /> */}
    </>
  );
}

export default App;
