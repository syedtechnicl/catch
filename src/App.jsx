import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
const App = () => {
  return (
<>
<Router>
  <Nav/>
  <Routes>
     <Route path='/'/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>



  </Routes>
</Router>
</>
    )
}

export default App