import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/atoms/Title";
import { films } from "./mock";
import { FilmCard } from "./components/molecules/FilmCard";
function App() {
  return (
    <div className="App">
      <main>
        <Title title={"Наш сайт с фильмами"} />
        <FilmCard {...films[2]} />
      </main>
    </div>
  );
}

export default App;
