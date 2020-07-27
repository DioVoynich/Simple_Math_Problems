class App extends React.Component {

    // constructor, initializing variables
    constructor(props) {
        super(props);
        this.state = {
            num1: Math.ceil(Math.random() * 100),
            num2: Math.ceil(Math.random() * 100),
            response: "",
            score: 0
        };
    }
    render() {
        // if you want to stop at 10
        // if (this.state.score === 10) {
        //     return (
        //         <div id="winner">
        //             You won!
        //         </div>
        //     );
        // }

        // all the component that will be displayed on the screen
        return (
            <div>
            <div id="problem">{this.state.num1} + {this.state.num2}</div>
            <input onKeyPress={this.keyPress} onChange={this.updateResponse}
        value={this.state.response}/>
        <div>Score: {this.state.score}</div>
        <div>You have typed: {this.state.response}</div>
        </div>
    );
    }

    // updating the input
    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        })
    }

    // all the logic behind the application, generating variables
    // calculations, and reset
    keyPress = (event) => {
        if (event.key === 'Enter') {
            let sum = this.state.num1 + this.state.num2;
            const answer = parseInt(this.state.response);
            if (sum === answer) {
                // correct
                this.setState(state => ({
                    score: state.score + 1,
                    num1: Math.ceil(Math.random() * 100),
                    num2: Math.ceil(Math.random() * 100),
                    response: ""
                }));
            } else {
                // wrong
                if (this.state.score > 0) {
                    this.setState(state => ({
                        score: state.score - 1,
                    }));
                }
                this.setState(state => ({
                    response: ""
                }));
            }
        }
    }
}

// it is like starting the application
ReactDOM.render(<App />, document.querySelector('#app'));