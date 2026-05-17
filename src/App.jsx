import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ChangeCredentials from "./pages/ChangeCredentials";

import "./index.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* REGISTER */}

        <Route
          path="/"
          element={<Register />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* CHANGE PASSWORD */}

        <Route
          path="/changePassword"
          element={<ChangePassword />}
        />

        {/* FORGOT PASSWORD */}

        <Route
          path="/forgotPassword"
          element={<ForgotPassword />}
        />

        {/* CHANGE USER CREDENTIALS */}

        <Route
          path="/changeCredentials"
          element={<ChangeCredentials />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;