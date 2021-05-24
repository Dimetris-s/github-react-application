import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const application = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    application, 
    document.querySelector('#root')
)