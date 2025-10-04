import LadingPage from "./pages/LadingPage";
import { Routes, Route } from "react-router-dom";
import LoginTela from "./pages/LoginTela/LoginTela";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/login" element={<LoginTela />} />
      </Routes>
    </>
  );
}

export default App;
