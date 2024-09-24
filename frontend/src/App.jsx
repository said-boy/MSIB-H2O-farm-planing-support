import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import "./assets/css/style.css";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
