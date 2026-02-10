import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Code, Users, Mic, Coffee, Globe, Sparkles } from 'lucide-react';
const activities = [
{
  id: 1,
  title: 'Hackathons',
  description:
  'Participating in 24h coding challenges to build rapid prototypes and experimental interfaces.',
  icon: <Code className="w-8 h-8 text-cyan-300" />,
  color: 'from-blue-500/20 to-cyan-400/20'
},
{
  id: 2,
  title: 'Open Source',
  description:
  'Contributing to major React libraries and maintaining community tools for better DX.',
  icon: <Globe className="w-8 h-8 text-purple-300" />,
  color: 'from-purple-500/20 to-pink-500/20'
},
{
  id: 3,
  title: 'Tech Talks',
  description:
  'Speaking at local meetups about frontend performance, WebGL, and UI animation techniques.',
  icon: <Mic className="w-8 h-8 text-orange-300" />,
  color: 'from-orange-400/20 to-red-500/20'
},
{
  id: 4,
  title: 'Workshops',
  description:
  'Mentoring junior developers and teaching web fundamentals through interactive sessions.',
  icon: <Users className="w-8 h-8 text-emerald-300" />,
  color: 'from-green-400/20 to-emerald-600/20'
},
{
  id: 5,
  title: 'Community',
  description:
  'Organizing monthly developer coffee chats and networking events to foster local talent.',
  icon: <Coffee className="w-8 h-8 text-indigo-300" />,
  color: 'from-indigo-500/20 to-blue-600/20'
}];

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export function ActivitiesPage() {
  return (
    <PageTransition className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-16 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Engagement Log</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Recent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Activities
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {activities.map((activity) =>
          <motion.div
            key={activity.id}
            variants={item}
            className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hologram-border">

              {/* Card Background & Gradient */}
              <div
              className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

              {/* Shine Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out z-10" />

              <div className="relative z-20 p-8 flex flex-col h-full">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500 group-hover:border-cyan-500/30">
                  {activity.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed flex-grow font-light">
                  {activity.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-cyan-500/70 uppercase tracking-widest">
                    Active Status
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#00d4ff]" />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageTransition>);

}