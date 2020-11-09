//Store is where we keep the application state
//The store is a place other components can connect to 
//in order to receive updates about info they might need

import {createStore} from 'redux';
import reducer from './reducer';

export default createStore(reducer);
