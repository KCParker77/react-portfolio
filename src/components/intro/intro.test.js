import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './index'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../store/reducers/rootReducer'
const store = createStore(rootReducer, {})

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
            <Intro />
        </Provider>,
        div
    )
})
