import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/atoms/Title";
import { films } from "./mock";
import { FilmCard } from "./components/molecules/FilmCard";
import { Sidebar } from "./components/molecules/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>

       < Title title={"Movie"} />
        <FilmCard {...films[2]} />
      </main>
    </div>
  );
}

export default App;
