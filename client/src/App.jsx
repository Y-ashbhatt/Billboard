import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import UploadBillboard from "./pages/UploadBillboard/UploadBillboard";
import UploadBanner from "./pages/UploadBanner/UploadBanner";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const location = useLocation();

  // List of routes where the <main> styling is required
  const mainStyledRoutes = [
    "/",
    "/upload-billboard",
    "/upload-banner",
    "/success",
    "/preview",
  ];
  const isMainStyledRoute = mainStyledRoutes.includes(location.pathname);

  return (
    <>
      {isMainStyledRoute ? (
        <main
          className={`h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload-billboard" element={<UploadBillboard />} />
            <Route path="/upload-banner" element={<UploadBanner />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/preview" element={<PreviewPage />} />
          </Routes>
        </main>
      ) : (
        <Routes>
          <Route path="/signin" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      )}
    </>
  );
};

export default App;