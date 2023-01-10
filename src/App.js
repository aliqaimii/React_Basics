import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";

function App() {
  const [screenState, setScreenState] = useState("useMemo");
  return (
    <div className="App">
      {screenState === "useMemo" ? <UseMemo /> : <UseCallback />}

      <div style={{ marginTop: 100 }}>
        <button onClick={() => setScreenState("useMemo")}>useMemo</button>

        <button onClick={() => setScreenState("useCallback")}>
          useCallback
        </button>

        {/* <button></button>

        <button></button> */}
      </div>
    </div>
  );
}

export default App;
