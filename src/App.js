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
import Cart from "./pages/cart/cart";

import category from "./components/category/category";
import ProductDetails from "./pages/productDetails/productDetails";
import Footer from "./components/footer/footer";
import Register from "./pages/auth/register";
import LogIn from "./pages/auth/logIn";
import Paypal from "./components/paypal/paypal";
import Account from "./pages/account/account";
import Dialog from "./pages/dialog";
import Favorites from "./pages/favorites/favorites";
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
            <Route exact path={"/Jumia-E-Commerce"} component={Home}></Route>
            <Route exact path={"/home"} component={Home}></Route>
            <Route exact path={"/register"} component={Register}></Route>
            <Route exact path={"/login"} component={LogIn}></Route>
            <Route exact path={"/loream"} component={Loream}></Route>
            <Route exact path={"/search=:value"} component={Search}></Route>
            <Route path={"/cart"} component={Cart}></Route>
            <Route path={"/category/"} component={category}></Route>
            <Route path={"/account"} component={Account}></Route>
            <Route path={"/checkout"} component={Paypal}></Route>
            <Route path={"/fav"} component={Favorites}></Route>
            {/* <Route path={"/dialog"} component={Dialog}></Route> */}
            <Route
              path={"/productDetails/:id"}
              component={ProductDetails}
            ></Route>
          </Switch>
          <Footer />
        </LangProvider>
      </Router>
    </div>
  );
}

export default App;
