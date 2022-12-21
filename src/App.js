import "./App.css";
import Navbar from "./components/navbar";
import Rows from "./components/rows";
import { useState } from "react";
import Hero from "./components/hero";

function App() {
  const [logged, setLogged] = useState(
    window.localStorage.getItem("ACCESS_TOKEN") ? true : false
  );

  window.addEventListener("storage", () => {
    setLogged(window.localStorage.getItem("ACCESS_TOKEN") ? true : false);
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {logged === true ? (
        <Rows />
      ) : (
        <h1 className="font-medium text-2xl"> Please, Login with Google</h1>
      )}
    </div>
  );
}

export default App;
