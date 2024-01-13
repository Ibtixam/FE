import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./components/pageNotFound";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<PageNotFound theme="dark" />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
