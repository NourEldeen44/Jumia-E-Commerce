/* eslint-disable eqeqeq */
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Loream from "./components/loream/loream";
import Firetest from "./firetest/firetest";
import { useState } from "react";
import { LangProvider } from "./contexts/langContext";
import Search from "./pages/search/search";
import Category from "./components/category/category";
import Home from "./pages/home/home";

// import { useContext } from "react";

function App() {
  const [lang, setlang] = useState("en");
  // const {langcon,setlangcon} = useContext(contextValue);
  return (
    <div
      dir={lang == "en" ? "ltr" : "rtl"}
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <Router>
        <LangProvider value={{ lang, setlang }}>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/home"} component={Home}></Route>
            <Route exact path={"/loream"} component={Loream}></Route>
            <Route exact path={"/search=:value"} component={Search}></Route>
            <Route path={"/category/"} component={Category}></Route>
          </Switch>
        </LangProvider>
      </Router>
    </div>
  );
}

export default App;
