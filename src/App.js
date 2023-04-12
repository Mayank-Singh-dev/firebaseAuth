import React from "react";
import { Routes, Route } from "react-router-dom";
import { Singnin } from "./components/Singnin";
import { Signup } from "./components/Signup";
import { Account } from "./components/Account";
import { AuthContextProvider } from "./context/Authcontext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase Authentication
      </h1>
      <AuthContextProvider>
          <div className="border"> 
        <Routes>
          <Route path="/" element={<Singnin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
          </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
