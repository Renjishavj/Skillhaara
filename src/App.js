import React from 'react'
import HomePage from './pages'
import { BrowserRouter as Router, } from 'react-router-dom';
import EDA from './components/EDA';


function App() {
  return (
   <>
  <Router>
    <HomePage/>
  </Router>
   </>
  )
}

export default App

