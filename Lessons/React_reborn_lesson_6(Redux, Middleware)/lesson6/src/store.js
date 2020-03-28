import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);

    if (action.type === 'ON_TODO_REMOVE' && !store.getState().userReducer.isLoggedIn) {
        alert('You are not allowed to remove items until you are not logged in!');

        return;
    }

    next(action);
};

const customThunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        action(store.dispatch);
        return;
    }
    next(action);
};

export const store = createStore(rootReducer, applyMiddleware(customThunk, loggerMiddleware));