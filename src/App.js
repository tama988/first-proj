import Navigation from "./components/Navigation";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navigation title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
