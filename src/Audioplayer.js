import react, { useState, Component } from "react"
import song from "./audio.mp3"
import ReactDOM from "react-dom"
import WaveSurfer from "wavesurfer.js"
import { WaveformContianer, Wave, PlayButton } from "./Waveformstyled"
import { createContext } from "react"
import { MdReplay } from "react-icons/md"
import "./Audioplayer.css"

class Audioplayer extends Component {
    state = {
        Playing: false,
    }

    componentDidMount() {
        const track = document.querySelector("#track")

        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: "#waveform",
            backend: "WebAudio",
            height: 100,
            progressColor: "#2D5BFF",
            responsive: true,
            waveColor: "#EFEFEF",
            cursorColor: "transparent",
        })

        this.waveform.load(track)
    }


    handlePlay = () => {
        this.setState({ playing: !this.state.playing })
        this.waveform.playPause()
    }


    render() {
        return (
            <div className="Audioplayer">
                <WaveformContianer>
                    <PlayButton onClick={this.handlePlay}>
                        {!this.state.playing ? "PLAY" : "PAUSE"}
                    </PlayButton>
                    <Wave id="waveform" />
                    <audio id="track" src={song} />
                </WaveformContianer>
                <div className="container">
                    <div className="toggle-switch">
                        <input type="checkbox" className="checkbox"
                            name="toggle" />
                        <label className="label">
                            <span className="inner" />
                            <span className="switch" />
                        </label>
                    </div>
                    <div className="volumetext">
                        <h4> Volume :</h4>
                    </div>
                    <div>
                        <input type="range" className="progressBar" defaultValue="70" />
                    </div>
                    <div>
                        <button className="trimbtn">TRIM</button>
                    </div>
                    <div>
                        <button className="playPause">
                            <MdReplay />
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}


export default Audioplayer
