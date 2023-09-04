import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Manage from "./pages/Manage";


function App() {
  return (
    <div>
      <Header/>   
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/employee" element={<Employee/>} />
          <Route path="/manage" element={<Manage/>} />
        </Routes>
      </Router>
 
    </div> 
  );
}

export default App;
