
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers(
{
    // ..Place all reducers all
    form: formReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


