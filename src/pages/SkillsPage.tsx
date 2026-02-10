import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
  Zap } from
'lucide-react';
const skillCategories = [
{
  title: 'Frontend Development',
  icon: <Layout className="w-6 h-6 text-cyan-500" />,
  skills: [
  {
    name: 'React / Next.js',
    level: 95
  },
  {
    name: 'TypeScript',
    level: 90
  },
  {
    name: 'Tailwind CSS',
    level: 95
  },
  {
    name: 'Framer Motion',
    level: 85
  }]

},
{
  title: 'Backend & Infrastructure',
  icon: <Server className="w-6 h-6 text-purple-500" />,
  skills: [
  {
    name: 'Node.js',
    level: 80
  },
  {
    name: 'PostgreSQL',
    level: 75
  },
  {
    name: 'Docker',
    level: 70
  },
  {
    name: 'AWS',
    level: 65
  }]

}];

const circularSkills = [
{
  name: 'Architecture',
  percent: 92
},
{
  name: 'UI Design',
  percent: 88
},
{
  name: 'Performance',
  percent: 95
},
{
  name: 'Testing',
  percent: 85
}];

const tools = [
{
  name: 'VS Code',
  icon: <Code2 />
},
{
  name: 'Git',
  icon: <Terminal />
},
{
  name: 'Figma',
  icon: <Layout />
},
{
  name: 'MongoDB',
  icon: <Database />
},
{
  name: 'GraphQL',
  icon: <Cpu />
},
{
  name: 'Linux',
  icon: <Terminal />
}];

export function SkillsPage() {
  return (
    <PageTransition className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3 h-3" />
            <span>Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical <span className="text-cyan-500">Arsenal</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            A comprehensive overview of my technical proficiency and the tools I
            utilize to architect digital solutions.
          </p>
        </motion.div>

        {/* Circular Progress Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {circularSkills.map((skill, index) =>
          <CircularProgress key={skill.name} skill={skill} index={index} />
          )}
        </div>

        {/* Skill Bars Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, catIndex) =>
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              x: catIndex % 2 === 0 ? -20 : 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, index) =>
              <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-cyan-600 font-mono text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                    initial={{
                      width: 0
                    }}
                    whileInView={{
                      width: `${skill.level}%`
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: 'easeOut'
                    }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 relative shadow-[0_0_10px_rgba(0,212,255,0.5)]">

                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50" />
                      </motion.div>
                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Tools Grid */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-slate-300" />
            Tools & Technologies
            <span className="w-12 h-px bg-slate-300" />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) =>
            <motion.div
              key={tool.name}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(6,182,212,0.5)'
              }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 group cursor-default">

                <div className="text-slate-400 group-hover:text-cyan-500 transition-colors mb-4 transform group-hover:scale-110 duration-300">
                  {tool.icon}
                </div>
                <span className="font-semibold text-slate-700 text-sm group-hover:text-cyan-700 transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>);

}
function CircularProgress({
  skill,
  index






}: {skill: {name: string;percent: number;};index: number;}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay: index * 0.1
      }}
      className="flex flex-col items-center">

      <div className="relative w-32 h-32 mb-4">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-100" />

          {/* Progress Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference
            }}
            whileInView={{
              strokeDashoffset:
              circumference - skill.percent / 100 * circumference
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: 0.2
            }}
            className="text-cyan-400 drop-shadow-[0_0_4px_rgba(0,212,255,0.5)]"
            strokeLinecap="round" />

        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-2xl font-bold text-slate-900">
            {skill.percent}%
          </span>
        </div>
      </div>
      <span className="font-semibold text-slate-700 uppercase tracking-wide text-sm">
        {skill.name}
      </span>
    </motion.div>);

}