const {Fragment, Component} = React;

function fn(userMessage) {
    console.log(userMessage);
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {timestamp: new Date};
        this.timerId = setInterval(() => this.setState({timestamp: new Date}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        console.log('clock rendered');
        const {timestamp} = this.state;
        return <div>{timestamp.toLocaleTimeString()}</div>
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {showClock: true};
        setTimeout(() => this.setState({showClock: false}), 3000);
    }
    
    render () {
        const {showClock} = this.state;
        return (
            <Fragment>
               {showClock
                    ? <Clock>i am a child</Clock>
                    : 'Good bye...'}
            </Fragment>
        )
    }
    
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('container'))
}

setTimeout(render, 0);
