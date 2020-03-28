import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React, { useEffect } from "react";

const ToDosList = ({toDos, removeItem, getToDos}) => {

    useEffect(() => {
        getToDos();
    }, []);

    return(
        <div>
            {toDos.map((el) => <div onClick={() => removeItem(el.id)}>{el.title}</div>)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        toDos: state.toDosReducer.toDos,
    }

};

const getData = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dispatch({type: 'END_LOADING', payload: json}))
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeItem: (index) => ({type: 'ON_TODO_REMOVE', payload: index}),
        getToDos: getData,
    }, dispatch)
};

export const ToDosWithRedux = connect(mapStateToProps, mapDispatchToProps)(ToDosList);