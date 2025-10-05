import LadingPage from "./pages/LadingPage";
import { Routes, Route } from "react-router-dom";
import LoginTela from "./pages/LoginTela/LoginTela";
import Dashboard1 from "./pages/Dashboard1/Dashboard1";
import Dashboard2 from "./pages/Dashboard2/Dashboard2";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<LoginTela />} />
        <Route path="/dashboard1" element={<Dashboard1/>} />
        <Route path="/dashboard2" element={<Dashboard2/>} />
      </Routes>
    </>
  );
}

export default App;
