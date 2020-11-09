//Reducers are where state can be stored, as well as actions to change to state.
//Reducers are functions
//Actions are objects 
//Actions will be sent to the reducer by the component to make changes to our state
//Reducer files will hold their own state, action type, action creator functions, and reducer function


//Initial State
const initialState = {
    user: {
        username: 'Jerry'
    }
}

//not a good example of a login BTW

//Action Creator is a function that allows changes to the redux state
//They will return an action object with TWO propertiesL a type and a payload
//type is where it's going 

//Declare an action type
const LOGIN_USER = "LOGIN_USER";

//Action Creator
//dont forget export function
export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

//Reducer Function
//A switch case determines how you want to change state - kind of like an if statement
//Every switch case needs a default
//Only one export default
export default function(state = initialState, action ){
    switch (action.type){
    case LOGIN_USER:
    return{...state, user: action.payload}
    default: 
        return state
    }
}