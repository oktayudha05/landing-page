import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./utils/navbar"
import Login from "./utils/login"


const App = () =>  {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      
      </Routes>
    </Router>

    
  )
}

export default App
