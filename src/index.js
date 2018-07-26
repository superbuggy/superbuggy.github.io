import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import './fonts/Abel-Regular.ttf'
// import './fonts/Rajdhani-Regular.ttf'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
