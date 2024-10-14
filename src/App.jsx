import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Index";
import SignInPage from "./pages/Authentication/SignIn";
import NotFoundPage from "./pages/NotFoundPage/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
