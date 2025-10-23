import { motion } from 'motion/react';
import { Gamepad2, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              // scaled ~0.6x for snappier motion
              duration: Math.random() * 1.8 + 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Animated logo/icon */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1 
          }}
        >
          <motion.div
            className="relative"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <Gamepad2 className="w-20 h-20 text-primary" />
          </motion.div>
          
          {/* Orbiting sparkles */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{ originX: 0.5, originY: 0.5 }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.12,
              }}
            >
              <motion.div
                style={{
                  x: Math.cos((angle * Math.PI) / 180) * 50 - 10,
                  y: Math.sin((angle * Math.PI) / 180) * 50 - 10,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-5 h-5 text-secondary" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl"
            animate={{
              textShadow: [
                "0 0 10px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.8)",
                "0 0 10px rgba(139, 92, 246, 0.5)",
              ],
            }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            Loading Portfolio
          </motion.h1>
          <div className="flex items-center gap-2 justify-center text-muted-foreground">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
              Initializing
            </motion.span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-accent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 md:w-96 space-y-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.18 }}
            />
          </div>
          <motion.div
            className="text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Floating action hints */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
        >
          {['Ready', 'Player', 'One'].map((word, i) => (
            <motion.span
              key={word}
              className="text-sm text-primary/60"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
