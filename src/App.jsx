import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutSection from "./components/AboutSection";
import GuestsSection from "./components/GuestsSection";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/guests" element={<GuestsSection />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
