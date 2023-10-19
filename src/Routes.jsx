import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import DashboardTwoModal from "modals/DashboardTwo";
import NotFound from "pages/NotFound";
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/dashboardtwo" element={<DashboardTwoModal />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
