import react, { Component } from "react"
import homeback from "./img/homeback.png";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"
import Audioplayer from "./Audioplayer"
import "./Home.css"
import FancyButton from "./fancybtn"

function Home() {
    return (
        <div className="Home" src={{backgroundImage:`url(${homeback})`}}>
            <div className="head-text">
                <h1>+ Online Audio and Mp3 Cutter</h1>
            </div>
            <Link to="./Audioplayer">
                {
                    //}<button id="fancy-button" type="button"> Upload </button>
                }
                <FancyButton className="fancy-button">Upload</FancyButton>
            </Link>
        </div>
    )
}

export default Home
