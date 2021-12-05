import react, { Component } from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"
import Audioplayer from "./Audioplayer"
import Home from "./Home"
import Pagenotfound from "./Pagenotfound"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Audioplayer" exact component={Audioplayer} />
                <Route path="*" exact component={Pagenotfound} />
            </Switch>
        </Router>
    )
}

export default App
