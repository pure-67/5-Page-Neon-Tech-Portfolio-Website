import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { GlowButton } from '../components/GlowButton';
import { ArrowRight, Sparkles, Cpu } from 'lucide-react';
export function HomePage() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <PageTransition className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50">
      {/* Mouse Follow Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.15), transparent 40%)`
        }} />


      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse"
          style={{
            animationDuration: '4s'
          }} />

      </div>

      {/* Scanline Beam */}
      <div className="scanline-beam" />
      <div className="scanline-overlay opacity-20" />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) =>
      <motion.div
        key={i}
        className="absolute rounded-full bg-cyan-400 blur-[1px]"
        style={{
          width: Math.random() * 4 + 1 + 'px',
          height: Math.random() * 4 + 1 + 'px'
        }}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.1
        }}
        animate={{
          y: [null, Math.random() * -100],
          x: [null, Math.random() * 50 - 25],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 5 + Math.random() * 10,
          repeat: Infinity,
          ease: 'linear',
          delay: Math.random() * 5
        }} />

      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2
          }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-cyan-100 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Welcome to the future</span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 0.4,
            type: 'spring',
            stiffness: 100
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 mb-6 relative">

          CREATIVE
          <span className="block text-shimmer text-glow-strong">
            TECHNOLOGIST
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.6
          }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">

          Building immersive digital experiences at the intersection of design
          and engineering. Crafting the future with clean code and{' '}
          <span className="text-cyan-500 font-medium">neon dreams</span>.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.8
          }}>

          <GlowButton
            size="lg"
            pulse
            onClick={() => navigate('/about')}
            className="group">

            START EXPLORING
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </GlowButton>
        </motion.div>
      </div>

      {/* System Status Footer */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.2
        }}
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 text-[10px] text-slate-400 tracking-[0.2em] font-mono uppercase">

        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3" />
          <span>v2.0.24</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink" />
          <span>SYSTEM STATUS: ONLINE</span>
        </div>
      </motion.div>
    </PageTransition>);

}