import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Loream from "./components/loream/loream";
import Firetest from "./firetest/firetest";
import { useState } from "react";
import { LangProvider } from "./contexts/langContext";
import category from "./components/category/category";
// import { useContext } from "react";

function App() {
  const [lang, setlang] = useState("en");
  // const {langcon,setlangcon} = useContext(contextValue);
  return (
    <div dir={lang == "en" ? "ltr" : "rtl"}>
      <Router>
        <LangProvider value={{ lang, setlang }}>
          <Header />
          <Switch>
            <Route exact path={"/loream"} component={Loream}></Route>
            <Route path={"/category"} component={category}></Route>
          </Switch>
        </LangProvider>
      </Router>
    </div>
  );
}

export default App;
