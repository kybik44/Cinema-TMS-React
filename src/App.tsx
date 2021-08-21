import React, { useState } from "react";
import "./App.css";

import { Sidebar } from "./components/molecules/Sidebar";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { FilmListPage } from "./pages/FilmListPage";
import { MovieCard } from "./pages/MovieCard";
import { ErrorPage } from "./pages/ErrorPage";
import { FilterPage } from "./pages/FilterPage";

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
      <div>


</div>
        <main>
          <Switch>
            <Route path={"/filmList/:id"} exact component={MovieCard}/>
            <Route path={"/filmList"} component={FilmListPage} />
            <Route path={"/filterPage"} component={FilterPage} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
