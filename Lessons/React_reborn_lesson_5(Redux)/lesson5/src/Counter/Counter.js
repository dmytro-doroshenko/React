import React from "react";
import { connect } from 'react-redux';


const Counter = ({counter, isAuth, increment, decrement}) => {

    console.log({counter, isAuth, increment, decrement});
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>Counter: {counter}</h2>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        isAuth: state.userIsAuth,
    }
};

const incrementActionCreator = () => ({type: 'INCREMENT'});

const decrementActionCreator = () => ({type: 'DECREMENT'});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(incrementActionCreator()),
//         decrement: () => dispatch(decrementActionCreator()),
//     }
// };

export const CounterWithRedux = connect(mapStateToProps, {
    increment: incrementActionCreator,
    decrement: decrementActionCreator,
})(Counter);