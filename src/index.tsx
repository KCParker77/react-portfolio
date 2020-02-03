import React from 'react'
import ReactDOM from 'react-dom'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

// Style
import 'normalize.css'
import 'animate.css/animate.css'
import './style.scss'

// Components
import Document from './components/document'
import Navigation from './components/Navigation'
import Intro from './components/intro'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import BackToTop from './components/back-top'
import Preloader from './components/preloader'

// Browser JS
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery.easing'

// Data
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
const store = createStore(rootReducer, {})

const App = () => {
    return (
        <Provider store={store}>
            <div
                data-spy="scroll"
                data-target=".navbar.fixed-top"
                data-offset="100"
            >
                <Document />
                <Navigation />
                <Intro />
                <Resume />
                <Portfolio />
                <Footer />
                <BackToTop />
                <Preloader />
            </div>
        </Provider>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))
