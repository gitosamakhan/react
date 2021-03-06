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

## Routing Installation

In react we don't have the concept of routing. We need to install a library:

Install:

    npm i react-router-dom@4.3.1

## Routing Setup

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

## Router Working

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

## Link

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

## Additional Parameters by Route

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

## Route Parameters

Route Parameter is a param passed in the URL as a value. eg: `company.com/products/1`, here **/1** is a route parameter.

To handle a route with a route parameter in react, we can add a seperate `<Route></Route>` with the link:

    <Route path="/products/:id" component={Product}></Route>

We can access the route parameter inside the component passed in the above Route using props. Remembert the 3 props that react-router passes when we use a route. one of those holds this route parameter. To access route param inside component:

    props.match.params.id           // Functional Component
    this.props.match.params.id      // Class Component

## Optional Parameters

Optional params are just like route params but optional. In route params it is must to pass a param, but here if you mapped several params, you can pass some of them, none of them, or all of the. To define an optional parameter use `?`. eg: `company.com/:year?/:month?`

Add the following route:

    <Route path="/posts/:year?/:month?" component={Post}></Route>

Now these links can catch this route:

- /posts/2019
- /posts/04
- /posts/2019/04

You can get these params from:

    props.match.params.id           // Functional Component
    this.props.match.params.id      // Class Component

Generally optional params should be avoided. Instead of including them into route, include them in query string parameters.

## Query String Parameters

Query String parameters are kind of key value pairs passed in the right most side of the link after a `?`. There is no way to handle it, it is optional. There is not specific `<Route></Route>` for it. An example of a query string param is:

    company.com/posts/2019?sortBy=newest&approved=true

These query string parameters are found in `location.search` prop of routes instead of `match`. A better way to handle this is to install an extenstion which will help us manage that:

    npm i query-string@6.1.0

To use the above package, import it as an object and it has a parse method which returns an object containing key-value pairs of query string params:

    import React from "react";
    import queryString from "query-string";

    const Post = (props) => {
        let queryStringParams = queryString.parse(props.location.search);
        console.log(queryStringParams);
        return (
            <h1>
            Posts from: {props.match.params.year} / {props.match.params.month}
            </h1>
        );
    };

    export default Post;

## Redirects

What if the user enters an invalid URL, for that case we want to redirect to a not found page. First we need to add a route for a not found page:

    <Route path="/not-found" component={NotFound}></Route>

Then import `Redirect` from **react-router-dom** and add this at the end of the routes:

    <Redirect to="/not-found" />

We can also use redirects if a user enters a specific link:

    <Redirect from="/messages" to="/products" />

## Programmatic Navigation

There are 3 props that react router passes in the component. if we check the `history` prop from browser(react debugger and search for component), we can see that there are several methods like `replace` and `push`. The push method adds a route in the back button.

    handleClick = () => {
        props.history.push("/products");
    }

If the above button is clicked, the user will be redirected to `/products`. and on clicking the back button he will be back on the previous page. If we use `replace` instead of push in the above implementation, the user will redirect to `/products` and cannot fo further back from there.

## Nested Routing

Watch Video From cource. The point of nested routing is that we can also use `Route` component inside other components instead of just using in app.js in one place. The whole point is that the path should be matched!

</details>

<details>
<summary>Forms </summary>
<hr/>
<hr/>
</details>

<details>
<summary>Calling Backend Services</summary>
<hr/>
<hr/>
</details>

<details>
<summary>Authentication and Authorization</summary>
<hr/>
<hr/>
</details>

<details>
<summary>Deployment</summary>
<hr/>
<hr/>
</details>

<details>
<summary>Advanced Topics</summary>
<hr/>
<hr/>
</details>
