import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Play, Github, ExternalLink, Film } from 'lucide-react';
const projects = [
{
  id: 1,
  title: 'Neon Dashboard',
  category: 'Featured Project',
  tech: ['React', 'D3.js', 'Tailwind'],
  color: 'from-pink-500 to-rose-500'
},
{
  id: 2,
  title: 'Crypto Wallet',
  category: 'Featured Project',
  tech: ['Web3', 'Next.js', 'Solidity'],
  color: 'from-violet-600 to-indigo-600'
},
{
  id: 3,
  title: 'AI Image Gen',
  category: 'Recent Work',
  tech: ['OpenAI API', 'Node.js', 'Canvas'],
  color: 'from-cyan-500 to-blue-500'
},
{
  id: 4,
  title: 'E-Commerce 3D',
  category: 'Recent Work',
  tech: ['Three.js', 'R3F', 'Stripe'],
  color: 'from-emerald-400 to-teal-500'
}];

export function WorksPage() {
  return (
    <PageTransition className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-[#0a0a0f] text-white overflow-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-16 flex items-end gap-4">

          <div>
            <div className="flex items-center gap-2 text-cyan-500 mb-2">
              <Film className="w-5 h-5" />
              <span className="text-xs font-mono tracking-widest uppercase">
                Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
              Selected Works
            </h2>
          </div>
          <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent mb-4" />
        </motion.div>

        {/* Featured Row */}
        <div className="mb-20">
          <h3 className="text-sm font-bold text-slate-400 mb-8 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-8 h-1 bg-cyan-500 shadow-[0_0_10px_#00d4ff]" />
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((project, index) =>
            <ProjectCard key={project.id} project={project} index={index} />
            )}
          </div>
        </div>

        {/* Recent Row */}
        <div>
          <h3 className="text-sm font-bold text-slate-400 mb-8 flex items-center gap-3 uppercase tracking-widest">
            <span className="w-8 h-1 bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            Recent Experiments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(2, 4).map((project, index) =>
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 2} />

            )}
          </div>
        </div>
      </div>
    </PageTransition>);

}
function ProjectCard({ project, index }: {project: any;index: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.6
      }}
      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">

      {/* Thumbnail */}
      <div className="aspect-video bg-slate-800 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:scale-105 transition-transform duration-700`} />

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.4)] relative">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-50" />
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Tech Tags Slide Up */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) =>
            <span
              key={t}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10 shadow-sm">

                {t}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 bg-[#0f1016] group-hover:bg-[#13141c] transition-colors duration-300">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 group-hover:text-glow transition-all duration-300">
              {project.title}
            </h4>
            <p className="text-sm text-slate-400 font-light">
              {project.category}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>);

}