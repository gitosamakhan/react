<h1 align="center"> React </h1>

<details>
<summary>Basics</summary>
<hr/>

### Component Imports

| Class Component    | Functional Component          |
| ------------------ | ----------------------------- |
| `this.props.field` | import `props` as an argument |

### Children Imports

Children are basically the JSX passed between the component tags. These can be accessed by `this.props.children`

<hr/>
</details>

<details>
<summary>Routing</summary>

### Routing Installation

<hr/>
In react we don't have the concept of routing. We need to install a library:

Install:

    npm i react-router-dom@4.3.1

### Routing Setup

<hr/>

Import the `BrowserRouter` in `index.js` and wrap the app component with it:

    import React from "react";
    import ReactDOM from "react-dom";
    import { BrowserRouter } from "react-router-dom";
    import "./index.css";
    import App from "./App";
    import reportWebVitals from "./reportWebVitals";

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();

### Router Working

<hr/>

Import the `Route` component from `React Router Dom` where you want to setup your routes:

    import "./App.css";
    import { Route } from "react-router-dom";
    import Home from "./components/home";
    import Products from "./components/products";

    function App() {
    return (
        <div className="App">
            <Route path="/products" component={Products}></Route>
            <Route path="/" exact component={Home}></Route>
        </div>
    );
    }

    export default App;

Some Important key points

- Also in the above implementation, there is a bug. If we render any route `/something`, the `/` route will also fire itself, for that, use the `exact` param in the **Route** component.
- The other way of fixing the bug is to use the Switch Component. With this we dont need the exact keyword. Also when using Switch, make sure to keep the simplest route eg `/` in the end and complicated ones in the start.

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

### Link

There is a bug in out app if we are using routing. If we goto the network tab and change the route, we will see some additional requests that are being made to download some data including `bundle.js`. This bundle.js has all the components of our react app. Everytime we change the route, it downloads it again which is bad for out app performance. for that, goto the `<a/>` link where our links for route are set, import `Link` and replace it with `<a><a/>`. also replace `href="/home"` with `to="/home"`. The code looks like this:

        import React from "react";
        import { Link } from "react-router-dom";

        const Navbar = () => {
        return (
            <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/">
                        Home <span class="sr-only">(current)</span>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/products">
                        Products
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
            </React.Fragment>
        );
        };

        export default Navbar;

### Additional Parameters by Route

When we use `<Route></Route>` to setup a route in our app. this route passes some additional params to the component which is mapped to it, these are `history`, `location` and `match`. You can view these props in React Dev Tools in chrome and search for the component mapped to the Route. These props help in routing and stuff and can be used in development.

Also if we want to pass our own parameters in a component mapped to a `<Route></Route>`, we should do that using `render` instead of **component** property of Route:

        <Route
          path="/"
          exact
          render={() => <Home sortBy="newest" />}
        ></Route>

In the above method, the additional parameters passed by route are removed, to bring them back, use:

        <Route
          path="/"
          exact
          render={(props) => <Home sortBy="newest" {...props} />}
        ></Route>

### Route Parameters

</details>

<!-- <details>
<summary>Basics</summary>
<hr/>
<hr/>
</details> -->
