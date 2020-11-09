import React from 'react';

import {connect} from 'react-redux';


const Welcome = (props) => {
    //console.log("PROPS", this.props)
    //You'll see history, location, match and dispatch
    //And then most importantly the user object
    return <div className="centered-container">
        <h1>Welcome to Jurasic Park, {props.user.username}</h1>
    </div>
}

//mapStateToProps it takes the redux state and returns it
//this is what subscribes the component to the store
const mapStateToProps = state => state;


export default connect(mapStateToProps)(Welcome);