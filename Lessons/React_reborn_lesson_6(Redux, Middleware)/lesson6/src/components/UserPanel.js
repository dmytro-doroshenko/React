import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";

const UserPanel = ({isLoggedIn, logIn}) => {
    return(
        <div>
            <h2>You are {isLoggedIn ? '' : 'not'} logged in</h2>
            {!isLoggedIn && <button onClick={logIn}>Log in</button>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
    }

};

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        logIn: () => ({type: 'LOG_IN'})
    }, dispatch)
};

export const UserPanelWithRedux = connect(mapStateToProps, mapDispatchToProps)(UserPanel);