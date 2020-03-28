import { INCREMENT, DECREMENT, AUTH_USER } from "../actionTypes/counter";
import { ON_COMPLETE } from "../actionTypes/toDos";

const initialState = {
    counter: 0,
    userIsAuth: false,
    toDos: [
        {
            task: 'task 1',
            done: false,
        }, {
            task: 'task 2',
            done: false,
        }, {
            task: 'task 3',
            done: false,
        }, {
            task: 'task 4',
            done: false,
        },
    ]
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1,
            };
        }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1,
            };
        }
        case AUTH_USER: {
            return {
                ...state,
                userIsAuth: true,
            };
        }
        case ON_COMPLETE: {
            const updatedToDos = state.toDos.map(el => el.task === action.payload ? {...el, done: true} : el)
            return {
                ...state,
                toDos: updatedToDos,
            }
        }
        default:
            return state;
    }
};