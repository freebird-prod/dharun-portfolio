import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Loader2 } from "lucide-react";

type Star = {
  left: number;
  top: number;
  size: number;
  duration: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Loader: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const numStars = 50;
    const tempStars: Star[] = [];

    for (let i = 0; i < numStars; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 2 + 1;

      tempStars.push({ left, top, size, duration });
    }

    setStars(tempStars);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden select-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              left: `${Math.min(Math.max(star.left, 5), 95)}%`,
              top: `${Math.min(Math.max(star.top, 5), 95)}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 text-center">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          variants={itemVariants}
        >
          Dharun Kumar S H
        </motion.div>

        <motion.div
          className="mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-semibold"
          variants={itemVariants}
        >
          An Aspiring React Developer Portfolio
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center">
            {/* Glowing Core Pulse */}
            <motion.div
              className="absolute w-full h-full rounded-full bg-gradient-to-br from-violet-600 via-cyan-500 to-blue-500 blur-xl opacity-30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />

            {/* Rotating Halo Ring */}
            <motion.div
              className="absolute inset-2 border-4 border-dashed border-cyan-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            />

            {/* Inner Orbiting Dots */}
            <motion.span
              className="absolute top-0 w-4 h-4 bg-cyan-300 rounded-full shadow-md"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              style={{
                transformOrigin: '75px center',
              }}
            />

            <motion.span
              className="absolute bottom-0 w-2.5 h-2.5 bg-violet-400 rounded-full shadow-md"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              style={{
                transformOrigin: '65px center',
              }}
            />

            {/* Core Icon – Your Power Element */}
            <div className="z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <Loader2 className="w-10 h-10 text-cyan-300 animate-spin" />
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Loader;
