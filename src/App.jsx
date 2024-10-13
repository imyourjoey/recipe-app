import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Index";
import SignInPage from "./pages/Authentication/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
