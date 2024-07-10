import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
