import { AnimatePresence, motion } from 'framer-motion';
export const SeeMoreButton = ({ showAll, setShowAll, filteredProjects }) => {
    // Button animation variants
    const buttonVariants = {
        initial: {
            scale: 1,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            transition: { duration: 0.2, yoyo: Infinity }
        },
        tap: {
            scale: 0.98,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        },
        animate: {
            scale: [1, 1.02, 1],
            backgroundColor: ["#f3f4f6", "#e5e7eb", "#f3f4f6"],
            transition: {
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                backgroundColor: { duration: 2, repeat: Infinity }
            }
        }
    };

    // Floating particles animation
    const particleVariants = {
        initial: { opacity: 0, y: 20, scale: 0 },
        animate: {
            opacity: [0, 1, 0],
            y: [20, -10, 20],
            scale: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2
            }
        }
    };

    // Glow effect
    const glowVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: [0, 0.3, 0],
            scale: [1, 1.1, 1],
            filter: ["blur(0px)", "blur(20px)", "blur(0px)"],
            transition: {
                duration: 4,
                repeat: Infinity
            }
        }
    };

    return (
        <>
            {/* See More Button */}
            {!showAll && filteredProjects.length > 4 && (
                <div className="mt-12 text-center relative">
                    {/* Animated Background Glow */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl"
                        variants={glowVariants}
                        initial="initial"
                        animate="animate"
                        aria-hidden="true"
                    />

                    {/* Floating Particles */}
                    <AnimatePresence>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-xs opacity-0"
                                style={{
                                    left: `${10 + i * 15}%`,
                                    top: `${-10 + Math.sin(i) * 20}px`,
                                }}
                                variants={particleVariants}
                                initial="initial"
                                animate="animate"
                                aria-hidden="true"
                            >
                                {['✦', '✧', '✩', '✪', '✫', '✬'][i]}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Main Button */}
                    <motion.button
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        animate="animate"
                        onClick={() => setShowAll(true)}
                        className="relative inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm 
                       border border-gray-200/50 rounded-full shadow-lg 
                       text-gray-700 font-medium text-sm hover:text-gray-900
                       overflow-hidden group"
                    >
                        {/* Gradient Border Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r 
                         from-blue-500 via-purple-500 to-pink-500 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300"
                            style={{ padding: '2px' }}
                        >
                            <div className="h-full w-full rounded-full bg-white/90 backdrop-blur-sm" />
                        </motion.div>

                        {/* Pulsing Icon */}
                        <motion.span
                            className="relative z-10"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                            }}
                        >
                            👁️
                        </motion.span>

                        <span className="relative z-10">See More Projects</span>

                        {/* Animated Arrow */}
                        <motion.span
                            className="relative z-10"
                            initial={{ x: 0 }}
                            animate={{
                                x: [0, 8, 0],
                                opacity: [1, 0.7, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            →
                        </motion.span>

                        {/* Click Ripple Effect */}
                        <AnimatePresence>
                            {false && (
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-white/30"
                                    initial={{ scale: 0, opacity: 1 }}
                                    animate={{ scale: 4, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                />
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Subtle Shine Effect */}
                    <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-sm"
                        animate={{
                            x: [0, 10, 0],
                            y: [0, -5, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        aria-hidden="true"
                    />
                </div>
            )}
        </>
    );
};
