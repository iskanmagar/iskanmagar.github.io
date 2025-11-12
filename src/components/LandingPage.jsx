import { motion } from "framer-motion";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Animated scanlines effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_2px] animate-pulse opacity-20" />

            {/* Hero Section */}
            <section className="relative w-full flex flex-col items-center justify-center py-20 px-4">
                {/* Retro TV Circle */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.2)] bg-black"
                >
                    {/* Color bars */}
                    <div className="grid grid-cols-6 h-1/3">
                        <div className="bg-yellow-400" />
                        <div className="bg-cyan-400" />
                        <div className="bg-green-400" />
                        <div className="bg-pink-500" />
                        <div className="bg-red-600" />
                        <div className="bg-blue-700" />
                    </div>

                    {/* Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src="/logo.svg" alt="Logo" className="h-24 w-24 invert" />
                    </div>

                    {/* TV Info Display */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center pb-3">
                        <div className="h-2 w-full bg-black border-t border-white" />
                        <div className="flex justify-between w-full px-6 text-xs text-gray-300">
                            <span>04:20</span>
                            <span>xx-xx-25</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm tracking-widest font-mono">ΣΟΚολCοΧοΟ</p>
                        </div>
                        <div className="mt-2 text-gray-300">
                            {/* <p className="font-semibold">#1</p> */}
                            <p className="uppercase tracking-widest text-sm">Iskanmagar</p>
                        </div>
                    </div>
                </motion.div>

                {/* Overlay Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-center mt-10"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
                        Welcome to Iskanmagar
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed px-4">
                        Broadcasting creativity, color, and digital nostalgia. Tune in for a retro-futuristic experience.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
                        aria-label="Enter the broadcast"
                    >
                        Enter Broadcast
                    </motion.button>
                </motion.div>
            </section>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.8))]" />
        </div>
    );
}
