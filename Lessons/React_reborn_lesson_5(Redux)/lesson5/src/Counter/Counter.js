import React from "react";
import { connect } from 'react-redux';
import {incrementActionCreator, decrementActionCreator} from "../actionCreators/counter";


const Counter = ({counter, isAuth, increment, decrement}) => {

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
        toDos: state.toDos,
    }
};



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