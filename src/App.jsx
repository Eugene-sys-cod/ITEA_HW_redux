import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/General/Home"
import Popular from "./pages/Popular"
import Battle from "./pages/Battle/index"
import Nav from "./pages/General/Nav"
import Results from "./pages/Battle/Results";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/popular" element={<Popular />} />
          <Route exact path="/battle" element={<Battle />} />
          <Route exact path="/battle/results" element={<Results />} />
          <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
        </div>
    </Router>
  )
}

export default App;
