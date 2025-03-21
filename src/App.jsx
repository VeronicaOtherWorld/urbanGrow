import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabLayout from "./layouts/TabLayout";
import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Products from "./pages/Products";
import Community from "./pages/Community";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        {/* bottom tabs */}
        <Route path="/" element={<TabLayout />}>
          <Route index element={<Home />} />
          <Route path="diagnosis" element={<Diagnosis />} />
          <Route path="Products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
