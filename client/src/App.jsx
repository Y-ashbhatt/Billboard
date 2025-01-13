import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import GetStarted from "./pages/getStarted/GetStarted";
import UploadImage from "./pages/UploadImage/UploadImage";
import { NotificationProvider } from "./context/NotificationContext";
import Error from "./components/Error";

const App = () => {
  const location = useLocation();

  // List of routes where the <main> styling is required
  const mainStyledRoutes = [
    "/home",
    "/upload",
    "/success",
    "/preview",
  ];
  const isMainStyledRoute = mainStyledRoutes.includes(location.pathname);

  return (
    <>
      <NotificationProvider>
        {isMainStyledRoute ? (
          <main
            className={`h-screen w-screen bg-[url('/back.png')] bg-cover bg-center flex flex-col items-center justify-center`}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/upload" element={<UploadImage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/preview" element={<PreviewPage />} />
              <Route path="*" element={<Error errorMsg='The page you are looking for does not exist or has been removed.' errorHeading='Page Not Found!' />} />
            </Routes>
          </main>
        ) : (
          <Routes>
            <Route path="/Login" element={<LogIn />} />
            <Route path="/" element={<GetStarted />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error errorMsg='The page you are looking for does not exist or has been removed.' errorHeading='Page Not Found!' />} />
          </Routes>
        )}
      </NotificationProvider>
    </>
  );
};

export default App;