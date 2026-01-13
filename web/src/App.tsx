import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Forside } from "./Forside.tsx";
import { Oppgave0 } from "./oppgaver/Oppgave0.tsx";
import { Oppgave1 } from "./oppgaver/Oppgave1.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/oppgaver/0/" element={<Oppgave0 />} />
        <Route path="/oppgaver/1/" element={<Oppgave1 />} />
      </Routes>
    </>
  );
};

export default App;
