import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TabLayout from "./layouts/TabLayout";
import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Products from "./pages/Products";
import Community from "./pages/Community";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }
        }
      });

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (window.confirm("New version available. Refresh now?")) {
          window.location.reload();
        }
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        {" "}
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
