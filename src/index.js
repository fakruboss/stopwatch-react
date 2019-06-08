import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    state = {
        time: 0,
        running: false
    };
    handleStartStop = () => {
        this.setState(state => {
            if (!state.running) {
                const startTime = Date.now() - state.time;
                this.timer = setInterval(() => {
                    this.setState({
                        time: Date.now() - startTime
                    });
                }, 0);
            } else {
                clearInterval(this.timer);
            }
            return { running: !state.running };
        });
    };
    handleClear = () => {
        clearInterval(this.timer);
        this.setState({
            time: 0,
            running: false
        });
    };
    render() {
        return (
            <div>
                <div className="timer">{this.state.time}ms</div>
                <button onClick={this.handleStartStop}>
                    {this.state.running ? "Stop" : "Start"}
                </button>
                <button onClick={this.handleClear}>Clear</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
