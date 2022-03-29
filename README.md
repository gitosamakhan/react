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

</details>

<!-- <details>
<summary>Basics</summary>
<hr/>
<hr/>
</details> -->
