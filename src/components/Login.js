import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../redux/reducer'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    //Type inside of input field and alter state
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //connected to forms on submit listener and fires the loginMagic function
    loginMagic = (e) => {
        e.preventDefault(); //prevents from our whole website from refreshing
        //after importing this function, add it here
        this.props.loginUser(this.state);
        this.props.history.push('/welcome') 
        //history that comes with the props object when using react router dom, 
        //think of it as an array and will redirect us to the route that has /welcome
        //Use this instead of a link tag, so you can wit till the function is complete before redirecting to the welcome page
    }

    render(){
        return (
            <div className="centered-container">
                <form onSubmit={e => this.loginMagic(e)}>
                    <input 
                        placeholder="Username"
                        name="username" 
                        type="text"
                        value={this.state.username}
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        placeholder="Password"
                        name="password" 
                        type="password"
                        value={this.state.password}
                        onChange={ e => this.changeHandler(e)}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {loginUser})(Login)
//To use Actions, you need to pass it as a second argument
//NOTE: if you aren't using redux state (mapStateToProps), but are using an action,
//the first argument of connect needs to be null