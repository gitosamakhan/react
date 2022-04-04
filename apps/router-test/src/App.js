import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Product from "./components/product";
import Post from "./components/post";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/products/:id" component={Product}></Route>
        <Route path="/posts/:year?/:month?" component={Post}></Route>
        <Route path="/products" component={Products}></Route>
        <Redirect from="/messages" to="/products" />
        <Route path="/not-found" component={NotFound}></Route>
        <Route
          path="/"
          exact
          render={(props) => <Home sortBy="newest" {...props} />}
        ></Route>
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
