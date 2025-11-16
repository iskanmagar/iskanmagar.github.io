import { motion } from "framer-motion";
import guests from "../data/guests.json";

export default function GuestsSection() {
    return (
        <section id="guests" className="relative py-20 px-4 border-t-2 border-cyan-500/20 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-3 flex items-center gap-3">
                        <span className="text-cyan-400">◎</span>
                        <span className="text-white">PREVIOUS GUESTS</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-sm tracking-wider">[ FEATURED SIGNALS ]</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guests.map((guest, index) => (
                        <motion.article
                            key={guest.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6, borderColor: "rgba(56,189,248,0.9)" }}
                            className="border border-gray-800 bg-black/70 p-6 relative overflow-hidden transition-all cursor-pointer group"
                            onClick={() => guest.youtubeUrl && window.open(guest.youtubeUrl, "_blank")}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[repeating-linear-gradient(0deg,#fff_0px,#000_1px,#fff_2px)] pointer-events-none transition-opacity" />

                            <p className="text-[10px] font-mono text-gray-500 tracking-[0.3em] mb-2">
                                GUEST {guest.episode?.padStart(2, "0")}
                            </p>
                            <h3 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {guest.name}
                            </h3>
                            <p className="text-xs font-mono text-pink-300 mb-1">
                                {guest.handle} · {guest.country}
                            </p>
                            <p className="text-xs font-mono text-gray-500 mb-3">
                                {guest.role}
                            </p>

                            <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-3">
                                {guest.description}
                            </p>

                            <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 mt-2">
                                <span className="text-cyan-300">
                                    EP {guest.episode} · {guest.episodeTitle}
                                </span>
                                <span className="text-gray-400">{guest.followers}</span>
                            </div>

                            {guest.companyUrl && (
                                <div className="mt-3 text-[11px] font-mono">
                                    <a
                                        href={guest.companyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        odysser.com
                                    </a>
                                </div>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
