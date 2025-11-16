import { motion } from "framer-motion";
import podcastsData from "../../data/podcasts.json";

export default function EpisodesSection() {
    return (
        <section id="episodes" className="relative py-20 px-4 border-t-2 border-cyan-500/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-3 flex items-center gap-3">
                        <span className="text-cyan-400">▶</span>
                        <span className="text-white">ARCHIVED EPISODES</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-sm tracking-wider">[ RECORDED TRANSMISSIONS ]</p>
                </motion.div>

                {/* Episodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {podcastsData.map((episode, index) => (
                        <motion.div
                            key={episode.ep}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: "rgba(0,255,255,0.8)" }}
                            className="relative bg-black border-2 border-gray-800 hover:border-cyan-400 transition-all p-6 group cursor-pointer"
                            onClick={() => episode.youtubeUrl && window.open(episode.youtubeUrl, "_blank")}
                        >
                            {/* Episode Number Badge */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-cyan-400 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm bg-black">
                                {episode.ep}
                            </div>

                            {/* Thumbnail/Visual */}
                            <div className="w-full h-32 bg-gradient-to-br from-gray-900 to-black mb-4 relative overflow-hidden border border-gray-700 group-hover:border-cyan-400 transition-colors">
                                {episode.youtubeUrl ? (
                                    <>
                                        <img
                                            src={`https://img.youtube.com/vi/${episode.youtubeUrl.split("v=")[1]}/maxresdefault.jpg`}
                                            alt={episode.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = `https://img.youtube.com/vi/${episode.youtubeUrl.split("v=")[1]}/hqdefault.jpg`;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl text-white/80 group-hover:text-cyan-400 group-hover:scale-110 transition-all drop-shadow-lg">▶</span>
                                        </div>
                                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 font-mono font-bold">
                                            WATCH
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,#fff_0px,#000_1px,#fff_2px)] group-hover:animate-pulse" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl text-gray-700 group-hover:text-cyan-400 transition-colors">▶</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            <h3 className="text-lg font-mono font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {episode.title}
                            </h3>
                            {episode.guest && (
                                <p className="text-sm font-mono text-gray-400 mb-2">{episode.guest}</p>
                            )}
                            {episode.description && (
                                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{episode.description}</p>
                            )}
                            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                                <span>{episode.date}</span>
                                <span className="px-2 py-1 border border-gray-700 text-gray-500">
                                    {episode.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
