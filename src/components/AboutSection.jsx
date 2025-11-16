import { motion } from "framer-motion";
import { useState } from "react";
import hosts from "../data/hosts.json";

export default function AboutSection() {
    const [expandedHost, setExpandedHost] = useState(null);

    return (
        <div className="relative min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 px-4 border-b-2 border-gray-800">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-bold text-white mb-4 sm:mb-6">
                            <span className="text-cyan-400">▌</span> ABOUT ISKANMAGAR
                        </h1>
                        <p className="text-sm sm:text-base font-mono text-gray-500 tracking-widest">
                            [ BROADCAST FROM THE EDGE ]
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="relative py-16 sm:py-24 px-4 border-b-2 border-gray-800 bg-black/80">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-pink-400 mb-6 sm:mb-8 flex items-center gap-3">
                            <span>►</span> THE MANIFESTO
                        </h2>

                        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-gray-300 leading-relaxed">
                            <p className="text-base sm:text-lg text-white font-semibold">
                                Where we start is not where we are meant to stop.
                            </p>

                            <p>
                                Iskanmagar is a broadcast for those who grew up far from the center, but close to possibility.
                                For multilingual kids who learned to switch languages before they learned to switch tabs.
                                For builders from underrepresented places who know that <span className="text-pink-300 font-semibold">talent is everywhere</span>,
                                even when opportunity is not.
                            </p>

                            <div className="border-l-4 border-cyan-400 pl-4 sm:pl-6 py-2 bg-cyan-400/5">
                                <p className="italic text-cyan-100">
                                    "In places the maps label as 'underrepresented,' we know them as home.
                                    Streets where accents are heavy, passports are weak, and yet the dreams are louder than any border."
                                </p>
                            </div>

                            <p>
                                This space exists to prove that a weak signal can still reach new skies. We share stories of people
                                who turn <span className="text-pink-300">scarcity into creativity</span>, community into infrastructure,
                                and late-night experiments into real-world transmissions.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                                Our Solutions
                            </h3>

                            <div className="grid gap-4 sm:gap-6">
                                <div className="border border-gray-800 p-4 sm:p-6 bg-black">
                                    <h4 className="text-cyan-400 font-mono font-bold mb-2 text-sm sm:text-base">→ Share what we learn</h4>
                                    <p className="text-sm sm:text-base">
                                        Knowledge stops being locked to a few and starts flowing between many.
                                        A meetup, a group chat, a shared repo—community changes everything.
                                    </p>
                                </div>

                                <div className="border border-gray-800 p-4 sm:p-6 bg-black">
                                    <h4 className="text-cyan-400 font-mono font-bold mb-2 text-sm sm:text-base">→ Treat the journey as experiments</h4>
                                    <p className="text-sm sm:text-base">
                                        Not a single test we can fail once. Every attempt is practice.
                                        We ship small things, learn in public, and keep iterating.
                                    </p>
                                </div>

                                <div className="border border-gray-800 p-4 sm:p-6 bg-black">
                                    <h4 className="text-cyan-400 font-mono font-bold mb-2 text-sm sm:text-base">→ Ask for guidance</h4>
                                    <p className="text-sm sm:text-base">
                                        More than feels comfortable. Send the email. Write the message.
                                        The worst answer is silence; the best outcome is a shift in trajectory.
                                    </p>
                                </div>

                                <div className="border border-gray-800 p-4 sm:p-6 bg-black">
                                    <h4 className="text-cyan-400 font-mono font-bold mb-2 text-sm sm:text-base">→ Document the journey</h4>
                                    <p className="text-sm sm:text-base">
                                        Build in public. Show the work, not just the launch.
                                        Someone behind you will find your small step huge.
                                    </p>
                                </div>

                                <div className="border border-gray-800 p-4 sm:p-6 bg-black">
                                    <h4 className="text-cyan-400 font-mono font-bold mb-2 text-sm sm:text-base">→ Build a rhythm, not a rush</h4>
                                    <p className="text-sm sm:text-base">
                                        Ten consistent steps beat one giant leap that never happens.
                                        Daily progress compounds into breakthrough results.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border-2 border-pink-400 p-6 sm:p-8 mt-8 sm:mt-12">
                                <p className="text-base sm:text-lg text-pink-300 font-mono font-bold mb-3 sm:mb-4">
                                    iskanmagar init .
                                </p>
                                <p className="text-sm sm:text-base">
                                    The broadcast is a reminder: <span className="text-white font-semibold">we are here, we are building, and we are not done.</span>
                                </p>
                                <p className="text-sm sm:text-base mt-3 sm:mt-4 text-cyan-100">
                                    This is not just our beginning. It is an invitation to everyone who recognizes this reality—who juggles
                                    languages and expectations, who watches conferences at 2 a.m., who builds with second-hand tools but
                                    first-class ambition.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hosts Section */}
            <section className="relative py-16 sm:py-24 px-4 bg-black/80">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                            <span className="text-cyan-400">►</span> THE HOSTS
                        </h2>
                        <p className="text-xs sm:text-sm font-mono text-gray-500 tracking-widest mb-8 sm:mb-12">
                            [ TRANSMISSION OPERATORS ]
                        </p>

                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {hosts.map((host, index) => (
                                <motion.div
                                    key={host.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-2 border-gray-800 bg-black hover:border-cyan-400/50 transition-colors group overflow-hidden"
                                >
                                    {/* Host Image */}
                                    <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-pink-900/20">
                                        <img
                                            src="/taha-host.jpg"
                                            alt={host.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                        {/* Name overlay on image */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-1 break-words">
                                                {host.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-mono text-pink-400 uppercase tracking-wide">
                                                {host.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 sm:p-8">
                                        <p className="text-xs font-mono text-gray-500 mb-4">
                                            {host.role}
                                        </p>

                                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                            {expandedHost === index ? (
                                                <>
                                                    {host.bio}
                                                    <br /><br />
                                                    <span className="text-cyan-300">
                                                        AI Google Developer Expert passionate about democratizing AI and ML education.
                                                        Previous founder of ML Nomads, a global research community bringing together
                                                        researchers and practitioners from underrepresented regions. Currently building
                                                        azetta.ai to make AI accessible and practical for builders everywhere.
                                                    </span>
                                                </>
                                            ) : (
                                                host.bio
                                            )}
                                        </p>

                                        <button
                                            onClick={() => setExpandedHost(expandedHost === index ? null : index)}
                                            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-4 flex items-center gap-2"
                                        >
                                            {expandedHost === index ? '▼ Show Less' : '► Show More'}
                                        </button>

                                        {host.tags && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {host.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] font-mono px-2 py-1 border border-cyan-400/40 text-cyan-300 tracking-wide"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4 text-xs font-mono pt-4 border-t border-gray-800">
                                            {host.website && (
                                                <a
                                                    href={host.website}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 break-all"
                                                >
                                                    Website
                                                </a>
                                            )}
                                            {host.twitter && (
                                                <a
                                                    href={host.twitter}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-gray-500 hover:text-white transition-colors"
                                                >
                                                    𝕏
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
