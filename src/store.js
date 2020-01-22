
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers(
{
    // ..Place all reducers all
    form: formReducer
})

export const store = createStore(rootReducer);


