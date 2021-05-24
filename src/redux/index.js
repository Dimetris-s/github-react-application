import {combineReducers, applyMiddleware, createStore} from 'redux'
import { reposReducer } from './reducers/reposReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loaderReducer } from './reducers/loaderReducer'

const rootReducer = combineReducers({
    repos: reposReducer,
    loading: loaderReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(
    thunk
)))