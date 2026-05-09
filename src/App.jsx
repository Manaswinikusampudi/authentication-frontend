import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";

import "./index.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/changePassword" element={<ChangePassword />} />

        <Route path="/forgotPassword" element={<ForgotPassword />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;