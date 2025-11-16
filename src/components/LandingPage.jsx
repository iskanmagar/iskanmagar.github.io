import { motion } from "framer-motion";
import { useState } from "react";
import EpisodesSection from "./episodes/EpisodesSection";
import BlogSection from "./blog/BlogSection";
import BlogModal from "./blog/BlogModal";
import AboutSection from "./AboutSection";
import GuestsSection from "./GuestsSection";

export default function LandingPage() {
    const [glitchText, setGlitchText] = useState("SIGNAL LOST");
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 z-10">
                {/* Retro TV Circle - Classic Broadcasting Design */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px]"
                >
                    {/* Outer TV Frame */}
                    <div className="absolute inset-0 rounded-full border-[12px] border-gray-800 shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
                        {/* Inner Screen Bezel */}
                        <div className="absolute inset-0 rounded-full border-4 border-gray-600 overflow-hidden bg-black">
                            {/* Screen Content */}
                            <div className="relative w-full h-full">
                                {/* CRT Screen Curvature Effect */}
                                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />

                                {/* Color bars with vintage effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="absolute top-0 left-0 right-0 grid grid-cols-7 h-[28%] relative"
                                >
                                    <div className="bg-gray-200" />
                                    <div className="bg-yellow-400" />
                                    <div className="bg-cyan-400" />
                                    <div className="bg-green-500" />
                                    <div className="bg-pink-500" />
                                    <div className="bg-red-500" />
                                    <div className="bg-blue-600" />
                                    {/* Horizontal scanlines on bars */}
                                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(0,0,0,0.15)_1px,rgba(0,0,0,0.15)_2px)]" />
                                </motion.div>

                                {/* Logo - Properly centered vertically */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                                >
                                    <img src="/logo.svg" alt="Logo" className="h-24 w-24 sm:h-28 sm:w-28 invert" />
                                </motion.div>

                                {/* TV Info Display - Bottom Panel */}
                                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center pb-4 pt-6">
                                    <div className="flex justify-between w-full px-8 text-xs text-gray-400 font-mono mb-3">
                                        <motion.span
                                            className="bg-red-900/30 px-2 py-1 border border-red-600/60 flex items-center gap-1"
                                            animate={{ opacity: [1, 0.7, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            REC
                                        </motion.span>
                                        <span className="bg-green-900/20 px-2 py-1 border border-green-600/40">ON AIR</span>
                                    </div>

                                    <div className="flex justify-between w-full px-8 text-[10px] text-gray-500 font-mono mb-3">
                                        <span>CH: 01</span>
                                        <span>11-12-25</span>
                                        <motion.span
                                            animate={{ opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            04:20
                                        </motion.span>
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-base tracking-[0.3em] font-mono text-gray-300 font-semibold">ΣΟΚολCοΧοΟ</p>
                                        <p className="uppercase tracking-[0.25em] text-sm font-display font-bold text-white">Iskanmagar</p>
                                        <p className="text-[10px] text-gray-600 tracking-wider font-mono">BROADCAST SIGNAL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Signal Lost Text Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-center mt-12 max-w-4xl"
                >
                    {/* Main Heading with Press Start 2P */}
                    <div className="mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display text-white leading-relaxed">
                            SIGNAL LOST
                        </h1>
                    </div>

                    {/* Broadcast Standby Message */}
                    <div className="mb-8">
                        <p className="text-base sm:text-lg font-mono text-gray-400 tracking-widest mb-4">
                            PLEASE STAND BY
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300 font-body max-w-2xl mx-auto leading-relaxed">
                            While we try to find our identity...
                        </p>
                    </div>

                    <div className="mb-10">
                        <p className="text-sm font-mono text-cyan-400 tracking-wider border-t border-b border-gray-800 py-3 inline-block px-8">
                            BROADCASTING: CREATIVITY · COLOR · NOSTALGIA
                        </p>
                    </div>

                    {/* Simple Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyan-400 text-black px-12 py-4 font-mono font-bold hover:bg-cyan-300 transition-colors min-w-[280px]"
                            aria-label="Enter the broadcast"
                        >
                            <span className="flex items-center justify-center gap-3 tracking-wider">
                                ENTER BROADCAST
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-pink-400 px-12 py-4 font-mono font-semibold border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition-all min-w-[280px]"
                            aria-label="Learn more"
                        >
                            <span className="flex items-center justify-center gap-2 tracking-wider">
                                TUNE IN
                            </span>
                        </motion.button>
                    </div>

                    {/* Technical Status Bar */}
                    <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-600 border border-gray-900 px-6 py-3 bg-black/80">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-red-400">SIGNAL: WEAK</span>
                        </span>
                        <span className="text-gray-800">|</span>
                        <span className="text-gray-500">QUALITY: 240p</span>
                        <span className="text-gray-800">|</span>
                        <span className="text-yellow-600">STATUS: SEARCHING</span>
                    </div>
                </motion.div>
            </section>

            {/* Episodes Section */}
            <EpisodesSection />

            {/* Blog Section */}
            <BlogSection onSelectBlog={setSelectedBlog} />

            {/* Previous Guests */}
            <GuestsSection />

            {/* About / Manifesto */}
            <AboutSection />

            {/* Blog Modal */}
            <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
        </>
    );
}
