import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Simple scanlines effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100%_4px] opacity-40" />

            {children}

            {/* Footer */}
            <footer className="relative py-12 px-4 border-t-2 border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-gray-600 font-mono text-xs tracking-widest mb-4"
                    >
                        ▌▌▌ END OF TRANSMISSION ▌▌▌
                    </motion.div>
                    <p className="text-gray-500 text-sm font-mono">
                        © 2025 ISKANMAGAR BROADCAST NETWORK
                    </p>
                    <p className="text-gray-700 text-xs font-mono mt-2">
                        [ SIGNAL MAY BE INTERRUPTED ]
                    </p>
                </div>
            </footer>

            {/* Enhanced vignette effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9))]" />
        </div>
    );
}
