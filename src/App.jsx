import "./App.css";
import LoginPage from "./indexloginPage";
import Notfound from "./NotFound";
import Register from "./Register ";
import Home from "./Home.jsx";
import ChangePassword from "./ChangePassword";
import { UserProvider } from "./context/usecontext";
import { Toaster } from "react-hot-toast";
import ForgetPassword from "./ForgetPassword";

import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <UserProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
