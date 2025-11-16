import AboutSection from "../components/AboutSection";
import GuestsSection from "../components/GuestsSection";
import LandingPage from "../components/LandingPage";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Reuse hero/nav from landing for consistency if desired later */}
            <LandingPage />
        </div>
    );
}
