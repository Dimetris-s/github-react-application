import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import store from './redux'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ScrollUp from './hoc/ScrollUp/ScrollUp'

const application = (
    <BrowserRouter>
        <Provider store={store}>
            <ScrollUp>
                <App/>
            </ScrollUp>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    application, 
    document.querySelector('#root')
)