import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative py-8 px-4 border-t-2 border-gray-800 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 border-2 border-cyan-400 flex items-center justify-center group-hover:border-pink-400 transition-colors">
                            <span className="text-lg font-mono font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">
                                IK
                            </span>
                        </div>
                        <span className="font-mono text-sm text-gray-400 hidden sm:block">
                            ISKANMAGAR
                        </span>
                    </Link>

                    {/* Purpose */}
                    <div className="text-center md:text-left">
                        <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed max-w-2xl mx-auto md:mx-0">
                            A broadcast from underrepresented, multilingual communities building at the edge of technology, creativity, and community.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4 justify-center md:justify-end">
                        <a
                            href="https://youtube.com/@iskanmagar"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-cyan-400 transition-colors"
                            aria-label="YouTube"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/iskanmagar"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-cyan-400 transition-colors"
                            aria-label="X (Twitter)"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com/iskanmagar"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-cyan-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-600">
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="tracking-widest"
                    >
                        ▌▌▌ END OF TRANSMISSION ▌▌▌
                    </motion.div>
                    <div className="text-gray-500">
                        © 2025 ISKANMAGAR BROADCAST NETWORK
                    </div>
                </div>
            </div>
        </footer>
    );
}
