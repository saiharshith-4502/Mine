import React from 'react'
import Header from './components/common/heading/Header'
import '@fortawesome/fontawesome-free/css/all.css';


import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App