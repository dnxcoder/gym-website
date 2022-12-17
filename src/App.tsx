import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Chilanka", "Gantari"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
