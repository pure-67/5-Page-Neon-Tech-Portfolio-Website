import React from 'react';
import { motion } from 'framer-motion';
interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'primary' | 'secondary';
}
export function GlowButton({
  children,
  onClick,
  pulse = false,
  size = 'md',
  className = '',
  variant = 'primary'
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-5 text-lg font-bold tracking-wider'
  };
  const baseStyles =
  'relative overflow-hidden rounded-full transition-all duration-500 flex items-center justify-center gap-2 z-10 group';
  const variantStyles =
  variant === 'primary' ?
  'bg-white text-cyan-950 border border-cyan-200 hover:border-cyan-400' :
  'bg-transparent text-cyan-400 border border-cyan-500/30 hover:bg-cyan-950/30';
  return (
    <div className="relative inline-block">
      {/* Sonar Pulse Rings */}
      {pulse &&
      <>
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse-ring" />
          <div
          className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse-ring"
          style={{
            animationDelay: '0.5s'
          }} />

        </>
      }

      {/* Orbiting Ring */}
      <div className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-full border border-cyan-400/50 blur-[2px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 blur-md group-hover:animate-spin transition-all duration-1000" />
      </div>

      <motion.button
        onClick={onClick}
        className={`${baseStyles} ${sizeClasses[size]} ${variantStyles} ${className} ${pulse ? 'shadow-[0_0_20px_rgba(0,212,255,0.3)]' : ''}`}
        whileHover={{
          y: -2,
          scale: 1.02,
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)'
        }}
        whileTap={{
          scale: 0.98
        }}>

        <span className="relative z-10 flex items-center gap-2 group-hover:text-glow transition-all duration-300">
          {children}
        </span>

        {/* Shine effect overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/80 to-transparent w-1/2 skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
      </motion.button>
    </div>);

}