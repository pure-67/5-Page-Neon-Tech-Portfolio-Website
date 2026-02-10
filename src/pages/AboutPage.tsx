import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  QrCode,
  ShieldCheck,
  Fingerprint } from
'lucide-react';
export function AboutPage() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateXValue = (y - centerY) / centerY * -10; // Max rotation deg
    const rotateYValue = (x - centerX) / centerX * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  return (
    <PageTransition className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-slate-50 flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(241,245,249,1)_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: 3D ID Badge */}
        <motion.div
          className="lg:col-span-5 perspective-container flex justify-center"
          initial={{
            x: -50,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.2,
            type: 'spring'
          }}>

          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100 preserve-3d cursor-pointer group"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              rotateX,
              rotateY
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>

            {/* Hologram Border Effect */}
            <div className="absolute inset-0 hologram-border opacity-50 pointer-events-none z-20" />

            {/* Badge Header */}
            <div className="h-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-shimmer" />

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 font-mono text-[10px] tracking-widest border border-cyan-500/30 px-2 py-1 rounded bg-cyan-950/30">
                  SECURE ACCESS
                </span>
              </div>
            </div>

            {/* Profile Content */}
            <div className="relative px-8 pb-8 bg-white/95 backdrop-blur-sm">
              {/* Photo */}
              <div className="w-32 h-32 -mt-16 rounded-2xl bg-slate-100 border-4 border-white shadow-xl overflow-hidden relative z-10 mx-auto lg:mx-0 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-xl z-20" />
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                  <User className="w-16 h-16" />
                </div>
                {/* Scanline over photo */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1/2 animate-scanline opacity-50" />
              </div>

              {/* Info */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                    Alex Developer
                  </h3>
                  <p className="text-cyan-600 font-medium tracking-wide">
                    Senior Creative Technologist
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-100">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                      ID Number
                    </p>
                    <p className="text-sm font-mono text-slate-700">
                      8492-XJ-09
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                      Clearance
                    </p>
                    <p className="text-sm font-mono text-cyan-600 font-bold">
                      LEVEL 4
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-end pt-2">
                  <div className="flex flex-col gap-1">
                    <QrCode className="w-12 h-12 text-slate-900 opacity-80" />
                    <span className="text-[8px] font-mono text-slate-400">
                      SCAN FOR KEY
                    </span>
                  </div>
                  <Fingerprint className="w-12 h-12 text-cyan-200 opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Bio */}
        <motion.div
          className="lg:col-span-7"
          initial={{
            x: 50,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.4,
            type: 'spring'
          }}>

          <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,212,255,0.4)]" />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                System Overview
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg mb-8 font-light">
                I am a passionate creative technologist bridging the gap between{' '}
                <strong className="text-slate-900 font-medium">
                  functional engineering
                </strong>{' '}
                and{' '}
                <strong className="text-slate-900 font-medium">
                  visual storytelling
                </strong>
                . With a background in both design and full-stack development, I
                build immersive web experiences that feel alive. Specializing in
                React ecosystems, WebGL, and interactive UI design.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                {
                  icon: MapPin,
                  label: 'Base Location',
                  value: 'San Francisco, CA'
                },
                {
                  icon: Briefcase,
                  label: 'Availability',
                  value: 'Open for Projects'
                },
                {
                  icon: Mail,
                  label: 'Communication',
                  value: 'hello@alex.tech'
                }].
                map((item, i) =>
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/40 hover:bg-white/90 hover:border-cyan-200 transition-all duration-300 group/card cursor-default"
                  whileHover={{
                    y: -2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: 0.6 + i * 0.1
                  }}>

                    <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600 group-hover/card:bg-cyan-100 group-hover/card:text-cyan-700 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>);

}