import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Sidebar } from "./components/molecules/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FilmListPage } from "./pages/FilmListPage";
import { MovieCard } from "./pages/MovieCard";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const handlerTheme = (checked: boolean) => {
    setSwitchChecked(!checked);
  };
  const cls = ["App"];
  if (switchChecked) {
    cls.push("dark-theme");
  }
  return (
    <BrowserRouter>
      <Sidebar
        switchStatus={switchChecked}
        onChangeSwitchStatus={handlerTheme}
      />
      <div className={cls.join(" ")}>
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
