import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./utils/navbar"
import Login from "./utils/login"
import Signup from "./utils/createAccount"

const App = () =>  {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
