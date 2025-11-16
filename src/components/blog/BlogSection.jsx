import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogsData from "../../data/blogs.json";

export default function BlogSection({ onSelectBlog }) {
    return (
        <section id="blog" className="relative py-20 px-4 border-t-2 border-pink-500/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-3 flex items-center gap-3">
                        <span className="text-pink-400">■</span>
                        <span className="text-white">TRANSMISSION LOG</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-sm tracking-wider">[ WRITTEN BROADCASTS ]</p>
                </motion.div>

                {/* Blog Posts */}
                <div className="space-y-6">
                    {blogsData.map((post, index) => (
                        <motion.article
                            key={post.slug || index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 10, borderColor: "rgba(255,100,200,0.8)" }}
                            className="border-l-4 border-gray-800 hover:border-pink-400 bg-black/50 p-6 transition-all cursor-pointer group"
                            onClick={() => onSelectBlog(post)}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                <h3 className="text-xl font-mono font-bold text-white group-hover:text-pink-400 transition-colors mb-2 sm:mb-0">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-3 text-xs font-mono">
                                    <span className="border border-pink-400/50 text-pink-400 px-2 py-1">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500">{post.date}</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {post.preview}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-pink-400 text-sm font-mono group-hover:gap-4 transition-all">
                                <span>READ MORE</span>
                                <span>→</span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/about"
                            className="inline-block bg-black text-pink-400 px-12 py-4 font-mono font-bold border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition-colors"
                        >
                            [ VIEW MANIFESTO & HOST ]
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
