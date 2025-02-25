import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Container from "./components/Container";
import Search from "./pages/Search";
import Subscription from "./pages/Subscription";
import Updates from "./pages/Updates";
import Setting from "./pages/Setting";
import Auth from "./getAuth/Auth";

function App() {
  return (
    <div className="">
      {/* defining routes  */}
      <Router>
        <Routes>
          {/* router group with sidebar  */}
          <Route element={<Container />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
