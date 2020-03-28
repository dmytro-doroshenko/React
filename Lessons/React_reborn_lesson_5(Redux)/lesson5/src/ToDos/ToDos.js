import React from "react";
import { connect } from 'react-redux';
import './ToDos.css';
import {onCompleteActionCreator} from "../actionCreators/toDos";


const ToDos = ({toDos, onTaskComplete}) => {

    return (
        <div>
            {
                toDos.map(el => (
                    <div className={el.done ? 'done' : ''} key={el.task}>
                        {el.task}
                        <button onClick={() => {onTaskComplete(el.task)}}>
                            Complete task
                        </button>
                    </div>
                ))
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        toDos: state.toDos,
    }
};


export const ToDosWithRedux = connect(mapStateToProps, {
    onTaskComplete: onCompleteActionCreator,
})(ToDos);