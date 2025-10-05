import LadingPage from "./pages/LadingPage";
import { Routes, Route } from "react-router-dom";
import LoginTela from "./pages/LoginTela/LoginTela";
import Dashboard from "./pages/Dashboard/Dashboard";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<LoginTela />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
