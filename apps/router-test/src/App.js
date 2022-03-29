import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/products" component={Products}></Route>
      </Switch>
    </div>
  );
}

export default App;
