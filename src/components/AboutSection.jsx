import { motion } from "framer-motion";
import hosts from "../data/hosts.json";

export default function AboutSection() {
    const primaryHost = hosts[0];

    return (
        <section id="about" className="relative py-20 px-4 border-t-2 border-gray-800 bg-black/80">
            <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[3fr_2fr] items-start">
                {/* Manifesto */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-cyan-400">▌</span>
                        <span>ABOUT ISKANMAGAR</span>
                    </h2>
                    <p className="text-xs font-mono text-gray-500 tracking-widest mb-6">[ MANIFESTO ]</p>

                    <div className="space-y-5 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                        <p>
                            Iskanmagar is a broadcast for those who grew up far from the center, but close to possibility. For multilingual kids who learned to switch languages before they learned to switch tabs. For builders from underrepresented places who know that talent is everywhere, even when opportunity is not.
                        </p>
                        <p>
                            This space exists to prove that a weak signal can still reach new skies. We share stories of people who turn scarcity into creativity, community into infrastructure, and late-night experiments into real-world transmissions.
                        </p>
                        <p>
                            Here, building in public is not a strategy—it is survival. We document the journey so others can follow different, faster paths. We celebrate those who translate local experience into global impact, and who refuse to let geography decide their ceiling.
                        </p>
                        <p className="text-pink-300 font-mono font-semibold">
                            iskanmagar init . The broadcast is a reminder: we are here, we are building, and we are not done.
                        </p>
                    </div>
                </motion.div>

                {/* Host Card */}
                {primaryHost && (
                    <motion.aside
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border border-gray-800 bg-black p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                    >
                        <p className="text-xs font-mono text-gray-500 tracking-widest mb-3">[ HOST ]</p>
                        <h3 className="text-2xl font-mono font-bold text-white mb-2">{primaryHost.name}</h3>
                        <p className="text-xs font-mono text-cyan-400 mb-1 uppercase tracking-wide">
                            {primaryHost.title}
                        </p>
                        <p className="text-xs font-mono text-gray-500 mb-4">
                            AI Google Developer Expert · Community Builder
                        </p>

                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                            {primaryHost.bio}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {primaryHost.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-mono px-2 py-1 border border-pink-400/40 text-pink-300 tracking-wide"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono">
                            {primaryHost.website && (
                                <a
                                    href={primaryHost.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                                >
                                    tahabouhsine.com
                                </a>
                            )}
                            {primaryHost.twitter && (
                                <a
                                    href={primaryHost.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 hover:text-white"
                                >
                                    𝕏
                                </a>
                            )}
                        </div>
                    </motion.aside>
                )}
            </div>
        </section>
    );
}
