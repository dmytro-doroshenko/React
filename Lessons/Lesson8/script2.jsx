const {Fragment, Component} = React;

const getShortTime = d => `${d.getHours()}:${d.getMinutes()}`;

class Time extends Component {
    render() {
        return <p>{getShortTime(this.props.value)}</p>
    }
}


class App extends Component {
state={timestamp: new Date}

    render () {
        return (
            <Fragment>
                <button >update time</button>
                <Time value={this.state.timestamp} />     
            </Fragment>
            
        )
    }
    
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('container'))
}

setTimeout(render, 0);
