import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./pages/homepage/homepage.styles.scss";
import HompageComponent from "./pages/homepage/Hompage.component.jsx";
import shoppageComponent from "./pages/shop/shoppage.component";
import HeaderComponent from "./Components/header/header.component";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HompageComponent} />
        <Route exact path="/hats" component={hat} />
        <Route exact path="/shop" component={shoppageComponent} />
      </Switch>
    </div>
  );
}
function hat(props) {
  console.log(props);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1> Hats</h1>

      <button onClick={() => props.history.push("/")}>Click Me!!</button>
    </div>
  );
}

{
  /* <HompageComponent />  */
}

export default App;
