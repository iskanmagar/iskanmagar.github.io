import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-50 border-b-2 border-cyan-500/30 bg-black/80 backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                            <span className="text-cyan-400 font-mono text-xs font-bold">TV</span>
                        </div>
                        <div className="font-mono">
                            <div className="text-lg font-bold tracking-wider text-white">ISKANMAGAR</div>
                            <div className="text-[8px] text-cyan-400 tracking-widest">BROADCAST NETWORK</div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 font-mono text-sm">
                        <Link
                            to="/"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors border-b-2 border-cyan-400"
                        >
                            HOME
                        </Link>
                        <a
                            href="#episodes"
                            className="text-gray-400 hover:text-cyan-400 transition-colors hover:border-b-2 hover:border-cyan-400"
                        >
                            EPISODES
                        </a>
                        <a
                            href="#blog"
                            className="text-gray-400 hover:text-cyan-400 transition-colors hover:border-b-2 hover:border-cyan-400"
                        >
                            BLOG
                        </a>
                        <Link
                            to="/guests"
                            className="text-gray-400 hover:text-cyan-400 transition-colors hover:border-b-2 hover:border-cyan-400"
                        >
                            GUESTS
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-400 hover:text-cyan-400 transition-colors hover:border-b-2 hover:border-cyan-400"
                        >
                            ABOUT
                        </Link>
                    </div>

                    {/* Platform Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="w-8 h-8 rounded border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition-colors group"
                            aria-label="YouTube"
                        >
                            <span className="text-gray-400 group-hover:text-cyan-400 text-xs">▶</span>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded border border-gray-600 hover:border-pink-400 flex items-center justify-center transition-colors group"
                            aria-label="Instagram"
                        >
                            <span className="text-gray-400 group-hover:text-pink-400 text-xs">◉</span>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded border border-gray-600 hover:border-blue-400 flex items-center justify-center transition-colors group"
                            aria-label="Twitter"
                        >
                            <span className="text-gray-400 group-hover:text-blue-400 text-xs">𝕏</span>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded border border-gray-600 hover:border-purple-400 flex items-center justify-center transition-colors group"
                            aria-label="Twitch"
                        >
                            <span className="text-gray-400 group-hover:text-purple-400 text-xs">⚡</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
