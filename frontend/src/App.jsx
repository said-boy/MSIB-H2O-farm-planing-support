import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import FarmPage from "./pages/farm/FarmPage";
import MarketPage from "./pages/market/MarketPage";
import "./assets/css/style.css";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/farm" element={<FarmPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
