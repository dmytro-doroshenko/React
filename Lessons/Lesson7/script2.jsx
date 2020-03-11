const {Fragment, Component} = React;

const API = {
    subscribeToUser: (userId, cb) => {
        let messageCount = 0;
        const intervalId = setInterval(() => cb(`Message ${++messageCount} from user ${userId}`), 1000);
        return intervalId;
    },
    unsubscribe: subsctiptionId => clearInterval(subsctiptionId),
}

function fn(userMessage) {
    console.log(userMessage);
}

class Chat extends Component {
    constructor(props) { 
        super(props);
        this.state = {...this.getEmptyMessagesStateUpdate()};
        this.subsctiptionId = API.subscribeToUser(this.props.userId, message => this.appendMessage(message));
    }

    getEmptyMessagesStateUpdate () {
        return ({messages: []})
    };

    appendMessage(msg) {
        this.setState(state => ({messages: [...state.messages, msg]
        }))
    }

    componentWillUpdate(nextProps) {
        if(this.props.userId !== nextProps.userId) {
            API.unsubscribe(this.subsctiptionId);
            this.subsctiptionId = API.subscribeToUser(nextProps.userId, message => this.appendMessage(message));
            this.setState(this.getEmptyMessagesStateUpdate())
        }
    }

    componentWillUnmount() {
        API.unsubscribe(this.subsctiptionId);
    }

    render() {
        const {userId} = this.props;
        const {messages} = this.state;
        return (<ul><h4>Messages from user {userId}</h4>{messages.map((msg, i) => (
            <li key={i}>{msg}</li>
            )    
        )}
        </ul>);
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChat: true,
            userId: 1001};
        setTimeout(() => this.setState({userId: 1002}), 5000);
        setTimeout(() => this.setState({showChat: false}), 10000);
    }
    
    render () {
        const {showChat, userId} = this.state;
        return (
            <Fragment>
               {showChat
                    ? <Chat userId={userId}>i am a child</Chat>
                    : 'Good bye...'}
            </Fragment>
        )
    }
    
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('container'))
}

setTimeout(render, 0);
