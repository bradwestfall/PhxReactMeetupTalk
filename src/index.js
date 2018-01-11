import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import PrimaryLayout from './layouts/PrimaryLayout'

const App = () => (
  <Router>
    <PrimaryLayout />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
