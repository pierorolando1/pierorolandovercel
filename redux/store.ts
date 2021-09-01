import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducer';

var composeEnhancers = compose;

if (typeof window !== "undefined") {
    // browser code
    var composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
}

const reducers = combineReducers({
    auth: authReducer,
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);