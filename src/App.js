import React from 'react'
import Resturant from './component/Resturant'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <Resturant />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App