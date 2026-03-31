import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
const App = () => {
  return (
    <>
    <div>heyyy</div>
    <Router>
      <Routes>
    
        <Route path="/create-post" element={<CreatePost />} />
        {/* <Route path="/about" element={<About />} /> */}
    
      </Routes>
    </Router>
    </>
    
  )
}

export default App
