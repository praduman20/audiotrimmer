import React, { Component } from "react"

import { WaveformContianer, Wave, PlayButton } from "./Waveformstyled"

class Waveform extends Component {
    render() {
        return (
            <WaveformContianer>
                <PlayButton>Play</PlayButton>
                <Wave id="waveform" /> // This is a <div />
                <audio id="track" />
            </WaveformContianer>
        )
    }
}

export default Waveform
