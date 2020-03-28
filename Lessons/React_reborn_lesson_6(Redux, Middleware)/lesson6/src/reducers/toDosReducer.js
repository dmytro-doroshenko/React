
const initialState = {
    toDos: [],
    loading: false,
};

export const toDosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_LOADING': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'END_LOADING': {
            return {
                ...state,
                loading: false,
                toDos: action.payload,
            }
        }
        case 'ON_TODO_REMOVE': {
            return {
                ...state,
                toDos: state.toDos.filter((el) => el.id !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
};