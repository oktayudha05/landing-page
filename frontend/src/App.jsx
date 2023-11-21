import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./utils/login"
import Signup from "./utils/createAccount"
import Body from "./utils/body"
import Dashboard from "./utils/dashboard"

const App = () =>  {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
