import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Container from "./components/Container";
import Search from "./pages/Search";
import Subscription from "./pages/Subscription";
import Updates from "./pages/Updates";
import Auth from "./getAuth/Auth";
import Application from "./pages/Application";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="">
      {/* defining routes  */}
      <Router>
        <ScrollToTop />

        <Routes>
          {/* router group with sidebar  */}
          <Route element={<Container />}>
            <Route path="/home" element={<Home />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/search" element={<Search />} />
            <Route path="/app" element={<Application />} />
            <Route index element={<Auth />} />
          </Route>
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
