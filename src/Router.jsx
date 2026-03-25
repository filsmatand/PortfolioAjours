import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./pages/MainPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}