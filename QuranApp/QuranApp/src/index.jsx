import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
