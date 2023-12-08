import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <Content />
        Weather app
      </div>
    </div>
  );
};

export default App;
