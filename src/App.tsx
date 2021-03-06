import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Sidebar } from "./components/molecules/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FilmListPage } from "./pages/FilmListPage";
import { MovieCard } from "./pages/MovieCard";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="App">
        <main>
          <Switch>
            <Route path={"/"} exact component={MovieCard} />
            <Route path={"/filmList"} component={FilmListPage} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
