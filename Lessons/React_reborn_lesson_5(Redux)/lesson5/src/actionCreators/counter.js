import { INCREMENT, DECREMENT } from "../actionTypes/counter";


export const incrementActionCreator = () => ({type: INCREMENT});

export const decrementActionCreator = () => ({type: DECREMENT});