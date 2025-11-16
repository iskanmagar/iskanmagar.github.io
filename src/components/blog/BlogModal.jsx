import { motion } from "framer-motion";

export default function BlogModal({ blog, onClose }) {
    if (!blog) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-2 border-pink-400 p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-colors font-mono font-bold"
                    aria-label="Close"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="mb-8 pb-6 border-b-2 border-gray-800">
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-4">
                        {blog.category && (
                            <span className="border border-pink-400/50 text-pink-400 px-2 py-1">
                                {blog.category}
                            </span>
                        )}
                        {blog.date && <span>{blog.date}</span>}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mb-0">
                        {blog.title}
                    </h1>
                </div>

                {/* Content */}
                <div className="text-gray-300 leading-relaxed space-y-6">
                    {blog.content.split("\n").map((line, index) => {
                        // Headings
                        if (line.startsWith("# ")) {
                            return (
                                <h1
                                    key={index}
                                    className="text-3xl font-mono font-bold text-white mt-8 mb-4"
                                >
                                    {line.replace("# ", "")}
                                </h1>
                            );
                        }

                        // Bold segments
                        if (line.includes("**")) {
                            const parts = line.split("**");
                            return (
                                <p key={index} className="my-4">
                                    {parts.map((part, i) =>
                                        i % 2 === 1 ? (
                                            <strong
                                                key={i}
                                                className="text-pink-300 font-semibold"
                                            >
                                                {part}
                                            </strong>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                            );
                        }

                        // Bullet list
                        if (line.startsWith("- ")) {
                            return (
                                <li key={index} className="ml-6 my-2 text-gray-300 list-disc">
                                    {line.replace("- ", "")}
                                </li>
                            );
                        }

                        // Empty line -> spacing
                        if (line.trim() === "") {
                            return <div key={index} className="h-2" />;
                        }

                        // Regular paragraph
                        return (
                            <p key={index} className="my-4 text-gray-300">
                                {line}
                            </p>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t-2 border-gray-800 text-center">
                    <button
                        onClick={onClose}
                        className="bg-pink-400 text-black px-8 py-3 font-mono font-bold hover:bg-pink-300 transition-colors"
                    >
                        [ CLOSE TRANSMISSION ]
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
