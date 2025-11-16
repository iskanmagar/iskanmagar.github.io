import { motion } from "framer-motion";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Simple scanlines effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100%_4px] opacity-40" />

            {children}

            <Footer />

            {/* Enhanced vignette effect - doesn't cover footer */}
            <div className="absolute top-0 left-0 right-0 bottom-24 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8))]" />
        </div>
    );
}
