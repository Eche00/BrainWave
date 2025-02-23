import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Container from "./components/Container";

function App() {
  return (
    <div>
      {/* defining routes  */}
      <Router>
        <Routes>
          {/* router group with sidebar  */}
          <Route element={<Container />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
