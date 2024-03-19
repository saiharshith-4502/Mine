import React from 'react'
import Header from './components/common/heading/Header'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import About from './components/about/About'
import ProgrammesHome from './components/programmes/ProgrammesHome';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" exact component={<Home />} /> */}
          {/* <Route exact path='/' component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programme" element={<ProgrammesHome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App