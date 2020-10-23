import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./pages/homepage/homepage.styles.scss";
import HompageComponent from "./pages/homepage/Hompage.component.jsx";
import MenuItemComponent from "./Components/menu-items/menu-item.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HompageComponent} />
        <Route exact path="/hats" component={hat} />
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
