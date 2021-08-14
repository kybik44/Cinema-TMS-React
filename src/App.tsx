import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { films } from "./mock";
import { FilmCard } from "./components/molecules/FilmCard";
import { Sidebar } from "./components/molecules/Sidebar";

import { TitleLine } from "./components/molecules/TitleLine";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
       <TitleLine />
        <FilmCard {...films[2]} />
      </main>
    </div>
  );
}

export default App;
