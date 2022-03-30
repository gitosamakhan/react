import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home sortBy="newest" {...props} />}
        ></Route>
        <Route path="/products" component={Products}></Route>
      </Switch>
    </div>
  );
}

export default App;
